import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
import soundfile from "./hub.mp3";
import earthSound from "./earth.flac";
import { Html } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));
new Audio(soundfile).play();
new Audio(earthSound).play();

root.render(
  <Canvas
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputEncoding: THREE.sRGBEncoding,
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [9, 4.25, 7], //fireplace
      // position: [ 40,5, 6 ]
      // position: [ 9, 16, -12 ]//forest
      // position: [9, 15, -12 ]
    }}
  >
    <Experience />
  </Canvas>
);
