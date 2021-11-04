import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";
import * as THREE from "three";
import Box from "./components/Box";
import { Canvas, useFrame } from "@react-three/fiber";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ray Dalio",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ac959f74bbe6f2310f1e05c%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D657%26cropX2%3D3206%26cropY1%3D80%26cropY2%3D2627",
      age: 72,
      note: "Raymond Thomas Dalio is an American billionaire investor and hedge fund manager.",
    },
  ]);

  return (
    <div className="App">
      <h1>Famous People List</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
