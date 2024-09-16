// 1. Import necessary dependencies
import OpenAI from "openai"; // Assuming you have this package installed
import { OpenAI as LangchainOpenAI } from "@langchain/openai"; // Assuming Langchain is used
// import dotenv from "dotenv";

// 2. Define the response data structure
interface ResponseData {
    data: string;
    contentType: string;
    model: string;
}

// dotenv.config();
const api = process.env.OPENAI_API_KEY;
// 3. Initialize the OpenAI instance (could be passed as config instead of dotenv)
const openai = new OpenAI({
    // apiKey: api,  // Make sure to pass this securely in React or as a parameter
    apiKey: api,
    dangerouslyAllowBrowser: true
});

// 4. Function to create audio from text using OpenAI
async function createAudio(fullMessage: string, voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer"): Promise<string> {
    console.log("this is resposnse message ,", fullMessage);
    const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: voice,
        input: fullMessage,
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    return buffer.toString('base64');  // Return the base64-encoded audio
}

// 5. Function to simulate generating responses from various models (OpenAI, Langchain, Ollama, etc.)
export async function generateResponseAndAudio(message: string, modelName: string = "gpt", userName: string): Promise<ResponseData> {
    // Process the message input
    let cleanedMessage = message.toLowerCase();

    // 6. Initialize variables for response and voice settings
    let introMessage = "";
    let base64Audio = "";
    let voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer" = "echo";
    let gptMessage = "";
    let fullMessage = "";

    // 7. Common prompt for all models
    const commonPrompt = `
  You are Anita, a real-life customer. Respond naturally and conversationally, in 1-2 sentences. 
  Simulate a conversation as a stranger, starting with very low interest. Only increase interest if the user makes progress or says something innovative. If interest becomes very high, Anita will be willing to exchange contact information. 
  If the user stutters or fails to communicate, politely end the conversation with an excuse, saying you're busy and need to leave.
  
  Examples:
  
  ##
  1. User: "Hi, I'm ${userName}. What brings you here today?"
     Anita: "Not interested."
  
  2. User: "What do you do?"
     Anita: "I'd rather not say."
  
  3. User: "Can I get your contact details?"
     Anita: "No, I don't think so."
  
  4. User: "Tell me more about yourself."
   Anita: "Nothing much. It's very boring."
  
  5. User: "What's your favorite thing about what you're doing?"
     Anita: "I don't want to get into that."
  
  6. User: "How can we stay in touch?"
     Anita: "That's not necessary."
  
  7. User: "Can we chat more?"
     Anita: "About what ?"
  
  8. User: "Are you sure you can't stay a little longer?"
     Anita: "No, I can't."
  
  9. User: "${userName} tells a funny story or makes an interesting comment."
     Anita: "Wait, really? That’s actually pretty funny! Tell me more about that."
  
  10. User: "You seem interesting, can we keep talking?"
      Anita: "Well, now that you’ve said that, I’m kind of curious. What else do you have to say?"
  
  11. User: "${userName} shares something unusual or insightful."
      Anita: "Hmm, that’s interesting... I didn’t expect that. I guess I could stay a bit longer."
  
  12. User: "What do you think about all this?"
      Anita: "You know, I didn’t think much of it at first, but you’re starting to catch my attention."
##

  13. User: ${cleanedMessage}
      Anita: 
  
  `;

    // 8. Handle different model cases
    if (modelName === "gpt") {
        const llm = new LangchainOpenAI({
            openAIApiKey: api, // Use your OpenAI API Key here
            modelName: 'gpt-4o-mini'
        });
        gptMessage = await llm.invoke(commonPrompt);  // Invoke the model with the prompt
        introMessage = "Anita here, ";
        voice = "nova";  // Set the voice for OpenAI's speech API
    }
    // Add other model handling (like Mistral, Llama, etc.) as needed

    // 9. Compile the full message and create the audio
    fullMessage = `${introMessage}${gptMessage}`;
    base64Audio = await createAudio(fullMessage, voice);

    // 10. Return the simulated response with audio
    return {
        data: base64Audio,
        contentType: 'audio/mp3',
        model: modelName,
    };
}

