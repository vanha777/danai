"use client";

import React from 'react';

interface MobileMenuProps {
    activeButton?: number;
    setActiveButton: (buttonIndex: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeButton, setActiveButton }) => {
    // const [activeButton, setActiveButton] = useState(0);
    const handleButtonClick = (buttonIndex: number) => {
        console.log("this is active button ",activeButton);
        setActiveButton(buttonIndex);
    };
    // const handleSignOut = async () => {

    //     const supabase = createClient();
    //     await supabase.auth.signOut();
    // }
    //@ts-ignore
    // const { user } = useAuth();
    return (
        // <div className="rounded-box btm-nav top-0 z-10 fixed flex justify-around">
        // <div className="btm-nav fixed justify-around z-10 ">
        <div
            className='btm-nav fixed bottom-6 left-0 right-0 flex justify-around shadow-xl rounded-t-2xl z-10 p-2 bg-transparent'
        >
            <button
                className='text-primary'
                onClick={() => handleButtonClick(1)}
            >
                <svg width="80px" height="80px" viewBox="0 0 24 24" fill="noen" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1299 13.8H11.5C11.7357 13.8 11.8536 13.8 11.9268 13.8732C12 13.9464 12 14.0643 12 14.3V18.7299C12 19.6205 12 20.0659 12.1962 20.1091C12.3925 20.1523 12.5795 19.7482 12.9537 18.9399L15.6851 13.0402C16.2768 11.7621 16.5726 11.1231 16.2777 10.6615C15.9828 10.2 15.2786 10.2 13.8701 10.2H12.5C12.2643 10.2 12.1464 10.2 12.0732 10.1268C12 10.0536 12 9.9357 12 9.7V5.27013C12 4.37946 12 3.93413 11.8038 3.89091C11.6075 3.8477 11.4205 4.25182 11.0463 5.06006L8.31493 10.9597C7.72321 12.2379 7.42735 12.8769 7.72228 13.3385C8.01721 13.8 8.72143 13.8 10.1299 13.8Z" fill="#DA07ED" />
                </svg>
            </button>

            <div className='rounded-full flex items-center justify-center'>
                <button
                    className="text-primary w-18 h-18 rounded-full flex p-6 items-center justify-center"
                    style={{
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #DA07ED, #3066BE, #6EFAFB)',
                    }}
                    onClick={() => handleButtonClick(2)}
                >
                    <svg stroke="currentColor" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <button
                className='text-primary'
                onClick={() => handleButtonClick(3)}
            >
                <svg width="70px" height="70px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#DA07ED" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z" />
                </svg>
            </button>
        </div>
    )
}

export default MobileMenu;