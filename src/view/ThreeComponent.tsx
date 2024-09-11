
import React, { Suspense, useRef, useState, useEffect } from 'react';
// import Model from './IronMan';
import Model2 from '../components/blueLady.js';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
// import SpinningLoadingIcon from './SpinningLoadingIcon.jsx';

// Define the hook to set up the camera
// const useCamera = () => {
//     const { camera } = useThree();
//     useFrame(() => {
//       camera.position.set(0.15, 3.25, 0.75);
//       camera.lookAt(0, 3.25, 0);
//     });
//   };


const ThreeComponent = (botState: { chatBotState?: string; }) => {
    const { chatBotState } = botState;

    // useThree to access camera props, and useFrame() to update attribution. From react-three/fiber
    // function MyCamera() {
    //     const { camera } = useThree();
    //     // useFrame() Hook to update camera position in after render Canvas. From react-three/fiber
    //     useFrame(() => {
    //         camera.position.set(1, 15, 5.5);
    //         camera.lookAt(-0.5, 13, 0);
    //     });
    // }

    // const MyCamera2 = () => {
    //     const { camera } = useThree();
    //     // useFrame() Hook to update camera position in after render Canvas. From react-three/fiber
    //     useFrame(() => {
    //         camera.position.set(0.15, 3.25, 0.75);
    //         camera.lookAt(0, 3.25, 0);
    //         // cameraSetRef.current = true;
    //     });
    // }
    const Camera = () => {
        const { camera } = useThree();
        useFrame(() => {
            camera.position.set(0.15, 3.25, 0.75);
            camera.lookAt(0, 3.25, 0);
        });
        return null; // This component does not render anything
    };
    return (
        <Canvas flat linear  >
            {/* <Suspense fallback={<SpinningLoadingIcon />} > */}
            <Camera />
            <Environment preset="dawn" background blur={0.5} />

            <directionalLight intensity={1} position={[2, 5, 3]} />
            {/* wait when model are being built */}

            {/* Additional ambient light for overall brightness */}
            <ambientLight intensity={0.5} />

            {/* Soft fill light from the opposite side */}
            <pointLight intensity={0.8} position={[-5, 5, -3]} />

            {/* Optional rim light for highlighting edges */}
            <spotLight intensity={0.6} position={[-5, 10, 5]} angle={0.3} penumbra={1} />

            <Model2 userState={chatBotState} />
            {/* </ Suspense> */}
            {/*<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />*/}

        </Canvas>
    )
}
export default ThreeComponent;

{/* Document on React-Three/Fiber  link: https://docs.pmnd.rs/react-three-fiber/api/hooks */ }