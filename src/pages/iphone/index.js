import { useEffect, useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PCFSoftShadowMap } from "three";

extend({ OrbitControls });

const Phone = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      autoRotate
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[100, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight position={[0, 1000, 0]} intensity={1} />
      {/* <spotLight position={[-1000, -1000, -1000]} intensity={1} /> */}
    </>
  );
};

export const Iphone = () => {
  console.log("RENDER");
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 1], fov: 70 }}>
        <Lights />

        <mesh position={[0, 0, 0]}>
          {/* <Controls /> */}
          <Phone />
        </mesh>
      </Canvas>
    </div>
  );
};
