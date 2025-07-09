import { PerspectiveCamera, Float, Html } from "@react-three/drei";

const Model = () => {
  return (
    <>
      <PerspectiveCamera
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 0, 60]}
      />
      <hemisphereLight groundColor="red" />
      <Float floatIntensity={10} rotationIntensity={4}>
        <Html
          className="select-none"
          castShadow
          receiveShadow
          occlude="blending"
          transform
        >
          <iframe
            title="embed"
            width={1400}
            height={900}
            src="https://francisalj.onrender.com/"
            frameBorder={0}
          />
        </Html>
      </Float>
    </>
  );
};

export default Model;
