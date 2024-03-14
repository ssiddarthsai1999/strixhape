import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";

import { Fog } from "three";

function Scene() {
    const cameraRef = useRef();
    const initialPositions = useRef([
        [-1, 3, 2.5],
        [3, 3, -1.5],
    ]); // Store initial positions for each scene
    const fieldOfView = 70;
    const startPositionRefs = useRef([...initialPositions.current]); // Refs to hold the starting positions for each scene
    const currentSceneIndexRef = useRef(0);

    const scenes = [
        {
            start: 0,
            end: 800,
            action: (scrollY) => {
                const newPositionX =
                    initialPositions.current[0][0] + scrollY / 200;
                const newPositionY = initialPositions.current[0][1];
                const newPositionZ =
                    initialPositions.current[0][2] + scrollY / -200;
                cameraRef.current.position.x = newPositionX;
                cameraRef.current.position.y = newPositionY;
                cameraRef.current.position.z = newPositionZ;
            },
        },
        {
            start: 800,
            end: 1300,
            action: (scrollY) => {
                const newPositionY =
                    initialPositions.current[1][1] + scrollY / 2000;
                const newPositionX =
                    initialPositions.current[1][0] + (scrollY - 800) / 200;
                // Adjusting newPositionX based on the scrollY value relative to the start of scene 2
                cameraRef.current.position.y = newPositionY;
                cameraRef.current.position.x = newPositionX;
            },
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (cameraRef.current) {
                scenes.forEach((scene, index) => {
                    if (scrollY > scene.start && scrollY <= scene.end) {
                        scene.action(scrollY);
                        console.log(
                            "scrollx",
                            cameraRef.current.position.x,
                            "scrolly",
                            cameraRef.current.position.y,
                            "scrollz",
                            cameraRef.current.position.z,
                            "scroll",
                            scrollY
                        );
                        cameraRef.current.lookAt(0, 3, 0);
                        currentSceneIndexRef.current = index;
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
 
            <Canvas
                shadows
                camera={{
                    fov: fieldOfView,
                    position: initialPositions.current[0],
                }} // Set initial position for the camera
                onCreated={({ gl, scene, camera }) => {
                    cameraRef.current = camera;
                    camera.lookAt(0, 3, 0);
                    // gl.setClearColor("#E50404");
                    // scene.fog = new Fog("#E50404", 1, 10);
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.5} />

                    <Model />
                </Suspense>
            </Canvas>

    );
}

export default Scene;
