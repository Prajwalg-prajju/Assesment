import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import backgroundVideo from './components/assets/another.mp4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={15} 
        />
      </Canvas>
      <div className="content">
      </div>
    </div>
  );
}

export default App;
