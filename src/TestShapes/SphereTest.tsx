import "@react-three/fiber";

function SphereTest() {

    return (
        <mesh>
            <sphereGeometry args={[1, 64, 64]}/>
            <meshStandardMaterial
                color="royalBlue" 
                roughness={0.3} 
                metalness={0.2}
            />
        </mesh>
    )
}

export default SphereTest;