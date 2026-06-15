// src/App.jsx
import React, { useState } from 'react';
import WorkAnnivAngel from './pages/WorkAnnivAngel';
import WorkAnnivJes from './pages/WorkAnnivJes';
import Catalog from './components/Catalog';

// Import the real local profile images directly into App.jsx
import JesAvatar from './assets/jes/Jesica.JPG';
import AngelAvatar from './assets/angel/ProfileAngel.JPG';

import './App.css';

// We now pass the real imported images right into your data mapping schema
const DATA_MAPPING = {
  jesica: {
    id: "jesica",
    nickname: "Jes",
    anniversaryNumber: "2nd",
    avatar: JesAvatar // Target verified local asset
  },
  angel: {
    id: "angel",
    nickname: "Angel",
    anniversaryNumber: "1st",
    avatar: AngelAvatar // Target verified local asset
  }
};

function App() {
  const activeCelebrantsList = [DATA_MAPPING.jesica, DATA_MAPPING.angel];
  const [selectedId, setSelectedId] = useState("jesica");

  return (
    <div className="relative w-full min-h-screen bg-black">
      
      {/* 1. Dynamic Core Page Presentation Matrix Layer */}
      <div key={selectedId} className="w-full h-full">
        {selectedId === "jesica" ? <WorkAnnivJes /> : <WorkAnnivAngel />}
      </div>

      {/* 2. Floating Navigation Control Engine HUD */}
      <Catalog 
        employees={activeCelebrantsList} 
        currentSelected={selectedId} 
        onSelect={setSelectedId} 
      />

    </div>
  );
}

export default App;