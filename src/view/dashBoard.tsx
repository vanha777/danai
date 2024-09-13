"use client"

import MobileMenu from "../components/mobileMenu";
import { SetStateAction, useState } from "react";
import ThreeComponent from "./ThreeComponent";
const DashBoard = () => {
    const [botState, setBotState] = useState("idle");
    const [user, setUser] = useState(null);
    const [activeButton, setActiveButton] = useState(1);
    const [tab, setTab] = useState(1);
    const changeTab = (index: SetStateAction<number>) => {
        console.log("changing tab")
        setTab(index)
    };
    return (
        <div>
            <MobileMenu activeButton={activeButton} setActiveButton={setActiveButton} />
            {activeButton === 1 &&
                <div className="h-screen w-screen flex items-center justify-center">
                    {/* <Slider /> */}
                    tab 1
                </div>
            }
            {activeButton === 2 &&
                <div className="h-3/4 w-screen items-center justify-center pt-8 pb-8 pl-4 pr-6">
                    {/* <WalletCard /> */}
                    <ThreeComponent chatBotState="talk" />
                </div>
            }
            {activeButton === 3 &&
                <div className="h-screen w-screen flex items-center justify-center">
                    {/* <Connection /> */}
                    tab 3
                </div>
            }
            {/* {!user && (
                <div className="toast toast-top toast-end">
                    <div role="alert" className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                       <span>Claim your account so that you don't lose your stuff!</span>
                </div>
                        <div className="">
                            <button className="btn btn-sm btn-primary">Sign up!</button>
                            <button className="btn btn-sm">
                                <IconClose />
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
            {/* {!user && tab == 1 &&
                <div className="toast toast-top toast-end space-y-2">
                    <div className="alert alert-info p-4">
                        <div className="flex flex-row items-center space-x-2">
                            <svg onClick={() => changeTab(2)} xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="block text-sm md:text-base lg:text-lg">
                                Claim your account now !
                            </span>
                            <button className="btn btn-sm btn-primary">Sign up!</button>
                        </div>
                    </div>
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



            {/* <div className="flex flex-col lg:flex-row gap-20 items-center justify-center align-middle">
                <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
                    <main className="flex-1 flex flex-col lg:flex-row gap-6">
                        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4"> */}
            {/* <ProfileCard /> */}
            {/* <WalletCard /> */}
            {/* </div>
                    </main>
                </div>
            </div> */}

        </div>

    )
}

export default DashBoard;