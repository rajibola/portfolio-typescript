import { useEffect, useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, PresentationControls } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

const Phone = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("/iphone/scene.gltf", setModel);
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

const Lights = ({ hovered }) => {
  const props = useSpring({
    intensity: hovered ? 5 : 1,
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[100, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <a.spotLight
        position={[0, 1000, 0]}
        intensity={props.intensity}
        penumbra={0}
      />
    </>
  );
};

const PhoneModel = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.3, 1.3, 1.3] : [1, 1, 1],
  });
  const meshRef = useRef();

  useFrame((state, delta) => (meshRef.current.rotation.y += 0.01), []);

  return (
    <>
      <Lights hovered={hovered} />
      <PresentationControls
        global
        // snap
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <a.mesh
          ref={meshRef}
          position={[0, 0, 0]}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => setActive(!active)}
          scale={props.scale}
        >
          <Phone />
        </a.mesh>
        <AdaptiveDpr pixelated />
      </PresentationControls>
    </>
  );
};

export const Iphone = () => {
  console.log("CHANGDE");
  return (
    <div className="w-full h-screen bg-black" style={{ touchAction: "none" }}>
      <Canvas
        performance={{
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
        }}
        camera={{ position: [0, 0, 1], fov: 70 }}
      >
        <PhoneModel />
      </Canvas>
    </div>
  );
};
