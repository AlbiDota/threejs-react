import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import './App.css';
import SphereTest from './TestShapes/SphereTest';


function Model(props: any){
    const { scene } = useGLTF("/3dModels/planet_earth.glb");
    return <primitive object={scene} {...props}/>
}

// documentation https://drei.docs.pmnd.rs/controls/presentation-controls
// useGLTF https://www.youtube.com/watch?v=QaRIHrRclVk
// kamera og scene setup https://www.youtube.com/watch?v=jz-zBfTW2ew
function App() {

    function Scene({children}:any) {
        return (
            <Canvas dpr={[1,2]} camera={{position:[6,1,6], fov: 35}}>
                <color attach="background" args={["gold"]}></color>
                <PresentationControls speed={1.5} global zoom={1} polar={[-Infinity, Infinity]} azimuth={[-Infinity, Infinity]}>
                    {children}
                </PresentationControls>
            </Canvas>
        );
    }

    return (
        <div className="App" style={{width:"100vw", height:"100vh"}}>
            {/* create scene and adjust camera angle */}
            <Scene>
                {/* add objects */}
                {/* <SphereTest /> */}
                <Model />
                
                {/* add directional light */}
                <directionalLight intensity={2} position={[0,3,3]}></directionalLight>

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