import React from 'react';
import { Canvas } from "@react-three/fiber";
import './App.css';
import SphereTest from './3dModels/SphereTest';

// fra youtube tutorial https://www.youtube.com/watch?v=jz-zBfTW2ew

function App() {

    function Scene({children}:any) {
        return (
            <Canvas camera={{position:[3,2,3], fov: 45}}>
                <color attach="background" args={["gold"]}></color>
                {children}
            </Canvas>
        );
    }

    return (
        <div className="App" style={{width:"100vw", height:"100vh"}}>
            {/* create scene and adjust camera angle */}
            <Scene>
                {/* add objects */}
                <SphereTest />

                {/* add directional light */}
                <directionalLight intensity={3}></directionalLight>

                {/* add ambient light */}
                <ambientLight intensity={0.2}></ambientLight>

            </Scene>
        </div>
    );
}

export default App;

{/* <Canvas camera={{position:[3,2,3], fov: 45}}>
    <mesh position={[0, 0, 0]}>
        <boxGeometry></boxGeometry>
        <meshNormalMaterial></meshNormalMaterial>
    </mesh>
</Canvas> */}

{/* <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]}/>
        <meshStandardMaterial 
        color="royalBlue" 
        roughness={0.3} 
        metalness={0.2}
        />
    </mesh> */}