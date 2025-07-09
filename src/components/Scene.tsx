import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

/*
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
*/

const Scene = () => {
  return (
    <>
      <Spline scene="https://prod.spline.design/1z2rlRtngKIEQtSN/scene.splinecode" />
    </>
  );
};

export default Scene;
