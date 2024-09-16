"use client"

import MobileMenu from "../components/mobileMenu";
// import SetStateAction from "react";
import ThreeComponent from "./ThreeComponent";
import { useEffect, useState, useRef } from "react";
// import { generateResponseAndAudio } from "../ultilities/ai";

// declare global {
//     interface Window {
//         SpeechRecognition: any;
//         webkitSpeechRecognition: any;
//     }
// }

const DashBoard = () => {

    // const [isRecording, setIsRecording] = useState<boolean>(false);
    // const [isPlaying, setIsPlaying] = useState<boolean>(false);
    // const [_transcript, setTranscript] = useState<string>("");
    // const [model, setModel] = useState<string>("");
    // const [_response, setResponse] = useState<string>("");
    // const [_isLoading, setIsLoading] = useState<boolean>(false);

    // //5. Ref hooks for speech recognition and silence detection
    // const recognitionRef = useRef<any>(null);
    // const silenceTimerRef = useRef<any>(null);

    // const handleResult = (event: any): void => {
    //     if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    //     let interimTranscript = "";
    //     for (let i = event.resultIndex; i < event.results.length; ++i) {
    //         interimTranscript += event.results[i][0].transcript;
    //     }
    //     setTranscript(interimTranscript);
    //     silenceTimerRef.current = setTimeout(() => {
    //         //9.1 Extract and send detected words to backend
    //         const words = interimTranscript.split(" ");
    //         const modelKeywords = [
    //             "gpt4",
    //             "gpt",
    //             "perplexity",
    //             "local mistral",
    //             "local llama",
    //             "mixture",
    //             "mistral",
    //             "llama",
    //         ];
    //         const detectedModel = modelKeywords.find((keyword) =>
    //             words.slice(0, 3).join(" ").toLowerCase().includes(keyword)
    //         );
    //         setModel(detectedModel || "gpt");
    //         sendToBackend(interimTranscript, detectedModel);
    //         setTranscript("");
    //     }, 2000);
    // };
    // const sendToBackend = async (message: string, modelKeyword?: string): Promise<void> => {
    //     setIsLoading(true);
    //     if (modelKeyword) setModel(modelKeyword);
    //     else if (!model) setModel("gpt-3.5");

    //     try {
    //         //7.1 Stop recording before sending data
    //         stopRecording();

    //         //7.2 Send POST request to backend
    //         //   const response = await fetch("/api/chat", {
    //         //     method: "POST",
    //         //     headers: { "Content-Type": "application/json" },
    //         //     body: JSON.stringify({ message, model: modelKeyword }),
    //         //   });

    //         //7.3 Check for response validity
    //         //   if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    //         //7.4 Process and play audio response if available
    //         //   const data = await response.json();
    //         const data = await generateResponseAndAudio(message, modelKeyword, "Patrick Ha");
    //         if (data.data && data.contentType === "audio/mp3") {
    //             const audioSrc = `data:audio/mp3;base64,${data.data}`;
    //             const audio = new Audio(audioSrc);
    //             setIsPlaying(true);
    //             audio.play();
    //             audio.onended = () => {
    //                 setIsPlaying(false);
    //                 startRecording();
    //                 if (data.model) setModel(data.model);
    //             };
    //         }

    //     } catch (error) {
    //         //7.5 Handle errors during data transmission or audio playback
    //         console.error("Error sending data to backend or playing audio:", error);
    //     }
    //     setIsLoading(false);
    // };
    // //10. Initialize speech recognition
    // // const startRecording = () => {
    // //     console.log("start recording");
    // //     setIsRecording(true);
    // //     setTranscript("");
    // //     setResponse("");
    // //     recognitionRef.current = new window.webkitSpeechRecognition();
    // //     recognitionRef.current.continuous = true;
    // //     recognitionRef.current.interimResults = true;
    // //     recognitionRef.current.onresult = handleResult;
    // //     recognitionRef.current.onend = () => {
    // //         setIsRecording(false);
    // //         if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    // //     };
    // //     recognitionRef.current.start();
    // // };

    // // const startRecording = () => {
    // //     console.log("start recording");

    // //     // Set up your states for recording
    // //     setIsRecording(true);
    // //     setTranscript("");
    // //     setResponse("");

    // //     // Check for SpeechRecognition or webkitSpeechRecognition
    // //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // //     if (SpeechRecognition) {
    // //         recognitionRef.current = new SpeechRecognition();
    // //         recognitionRef.current.continuous = true; // Keep recognizing speech continuously
    // //         recognitionRef.current.interimResults = true; // Capture interim results

    // //         // Handle the result (transcript of speech)
    // //         recognitionRef.current.onresult = (event: any) => {
    // //             let transcript = "";
    // //             for (let i = event.resultIndex; i < event.results.length; i++) {
    // //                 transcript += event.results[i][0].transcript;
    // //             }
    // //             handleResult(transcript); // Update the transcript with the result
    // //         };

    // //         // Handle when recognition ends
    // //         recognitionRef.current.onend = () => {
    // //             setIsRecording(false);
    // //             if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    // //         };

    // //         // Start the speech recognition
    // //         recognitionRef.current.start();
    // //     } else {
    // //         console.error("SpeechRecognition API is not supported in this browser.");
    // //     }
    // // };

    // const startRecording = () => {
    //     console.log("start recording");

    //     console.log("debug 0");
    //     // Set up your states for recording
    //     setIsRecording(true);
    //     setTranscript("");
    //     setResponse("");
    
    //     // Check for SpeechRecognition or webkitSpeechRecognition
    //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    //     console.log("debug 1");
    //     if (SpeechRecognition) {
    //         recognitionRef.current = new SpeechRecognition();
    //         recognitionRef.current.continuous = false; // Stop recognizing after one session
    //         recognitionRef.current.interimResults = true; // Capture interim results
    
    //         let fullTranscript = ""; // Store the complete transcript
    
    //         console.log("debug 2");
    //         // Handle the result (transcript of speech)
    //         recognitionRef.current.onresult = (event: any) => {
    //             let interimTranscript = "";
    //             for (let i = event.resultIndex; i < event.results.length; i++) {
    //                 interimTranscript += event.results[i][0].transcript;
    //             }
    //             fullTranscript += interimTranscript; // Append interim results to full transcript
    //             handleResult(interimTranscript); // Update the transcript with the result
    //         };
    
    //         console.log("debug 3");
    //         // Handle when recognition ends
    //         recognitionRef.current.onend = () => {
    //             setIsRecording(false);
    //             console.log("Recording finished:", fullTranscript); // Log the final transcript
    //         };
    
    //         console.log("debug 4");
    //         // Start the speech recognition
    //         recognitionRef.current.start();
    
    //         // Set timeout to stop recording after 5 seconds
    //         setTimeout(() => {
    //             if (recognitionRef.current) {
    //                 recognitionRef.current.stop(); // Stop the recognition after 5 seconds
    //             }
    //         }, 5000); // 5000 milliseconds = 5 seconds
    
    //         console.log("debug 5");
    //     } else {
    //         console.error("SpeechRecognition API is not supported in this browser.");
    //     }
    // };
    


    // useEffect(
    //     () => () => {
    //         if (recognitionRef.current) recognitionRef.current.stop();
    //     },
    //     []
    // );

    // const stopRecording = () => {
    //     if (recognitionRef.current) recognitionRef.current.stop();
    // };

    // //13. Toggle recording state
    // const handleToggleRecording = () => {
    //     if (!isRecording && !isPlaying) startRecording();
    //     else if (isRecording) stopRecording();
    // };

    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [_audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null); // Store the media stream to stop it later
  
    const handleRecording = () => {
      if (isRecording) {
        // Stop the recording if it is currently ongoing
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
        if (streamRef.current) {
          // Stop all tracks of the stream to free up the microphone
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
        setIsRecording(false);
      } else {
        // Start a new recording
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream: MediaStream) => {
            streamRef.current = stream; // Store the stream so we can stop it later
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
  
            // Collect audio data
            mediaRecorder.ondataavailable = (event: BlobEvent) => {
              audioChunksRef.current.push(event.data);
            };
  
            // Start recording
            mediaRecorder.start();
            setIsRecording(true);
  
            // Stop recording automatically after 5 seconds
            setTimeout(() => {
              if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
              }
              if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
              }
            }, 5000);
  
            // Handle the stop event to process the audio
            mediaRecorder.onstop = () => {
              const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
              const audioUrl = URL.createObjectURL(audioBlob);
              setAudioUrl(audioUrl);
              audioChunksRef.current = []; // Reset chunks for future recordings
            };
          })
          .catch((error: DOMException) => {
            console.error('Error accessing the microphone:', error);
          });
      }
    };

    const videoRef = useRef<HTMLVideoElement>(null);
    const [_error, setError] = useState<string | null>(null);
  
    const openCamera = () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          })
          .catch((err) => {
            console.error("Error accessing the camera:", err);
            setError('Error accessing the camera.');
          });
      } else {
        setError('Camera access is not supported in this environment.');
      }
    };

    const [botState, _setBotState] = useState("idle");
    const [_user, _setUser] = useState(null);
    const [activeButton, setActiveButton] = useState(1);
    const [_tab, _setTab] = useState(1);

    useEffect(() => {
        if (activeButton === 2) {
            console.log("activeButton is 2, turning on microphone...");
            handleRecording();
            openCamera();
        }
    }, [activeButton]);

    // const changeTab = (index: SetStateAction<number>) => {
    //     console.log("changing tab")
    //     setTab(index)
    // };

    return (
        <div>
            <MobileMenu activeButton={activeButton} setActiveButton={setActiveButton} />
            <div className="h-3/4 w-screen items-center justify-center pt-8 pb-8 pl-4 pr-6">
                <ThreeComponent chatBotState="talk" />
            </div>
            {/* {activeButton === 1 &&
                <div className="h-screen w-screen flex items-center justify-center">
                    tab 1
                </div>
            } */}
            {/* {activeButton === 2 &&
                <div className="h-3/4 w-screen items-center justify-center pt-8 pb-8 pl-4 pr-6">
                    <ThreeComponent chatBotState="talk" />
                </div>
            } */}
            {/* {activeButton === 3 &&
                <div className="h-screen w-screen flex items-center justify-center">
                    tab 3
                </div>
            } */}
            <div className="toast toast-top toast-center space-y-2 flex flex-col items-center ">
                {botState === 'thinking' ? (
                    <span className="loading loading-infinity loading-lg"></span>
                ) : (
                    <button
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 flex"
                    >
                        <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0V2H13L16 8.5L13 15H3L0 8.5L3 2H7V0H9ZM4.59794 11.7384L8 12.2618L11.4021 11.7384L11.0979 9.76163L8 10.2382L4.90206 9.76163L4.59794 11.7384ZM7 6.75C7 7.44036 6.44036 8 5.75 8C5.05964 8 4.5 7.44036 4.5 6.75C4.5 6.05964 5.05964 5.5 5.75 5.5C6.44036 5.5 7 6.05964 7 6.75ZM10.25 8C10.9404 8 11.5 7.44036 11.5 6.75C11.5 6.05964 10.9404 5.5 10.25 5.5C9.55964 5.5 9 6.05964 9 6.75C9 7.44036 9.55964 8 10.25 8Z" fill="#ffffff" />
                        </svg>
                        <span className="ml-2 avatar online placeholder">  Anita</span>
                    </button>
                )}
            </div>
        </div>

    )
}

export default DashBoard;