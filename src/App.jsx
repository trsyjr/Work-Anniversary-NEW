// src/App.jsx
import React, { useState } from 'react';
import WorkAnnivAngel from './pages/WorkAnnivAngel';
import WorkAnnivJes from './pages/WorkAnnivJes';
import WorkAnnivMina from './pages/WorkAnnivMina'; 
import WorkAnnivOrchid from './pages/WorkAnnivOrchid';
import Catalog from './components/Catalog';

import JesAvatar from './assets/jes/Jesica.JPG';
import AngelAvatar from './assets/angel/ProfileAngel.JPG';
import MinaAvatar from './assets/mina/MinaProfile.JPG';
import OrchidAvatar from './assets/orchid/OProfile.JPG';

import './App.css';

const DATA_MAPPING = {
  orchid: { 
    id: "orchid",
    nickname: "Orchid",
    anniversaryNumber: "2nd",
    avatar: OrchidAvatar 
  },
  mina: { 
    id: "mina",
    nickname: "Mina",
    anniversaryNumber: "2nd",
    avatar: MinaAvatar 
  },
  jesica: {
    id: "jesica",
    nickname: "Jes",
    anniversaryNumber: "2nd",
    avatar: JesAvatar 
  },
  angel: {
    id: "angel",
    nickname: "Angel",
    anniversaryNumber: "1st",
    avatar: AngelAvatar 
  }
};

function App() {
  // Added DATA_MAPPING.mina back to the list to display her in the Catalog HUD
  const activeCelebrantsList = [
    DATA_MAPPING.jesica, 
    DATA_MAPPING.mina, 
    DATA_MAPPING.angel, 
    DATA_MAPPING.orchid
  ];
  
  const [selectedId, setSelectedId] = useState("mina");

  const renderCelebrantPage = () => {
    switch (selectedId) {
      case "jesica":
        return <WorkAnnivJes />;
      case "mina":
        return <WorkAnnivMina />;
      case "angel":
        return <WorkAnnivAngel />;
      case "orchid":
        return <WorkAnnivOrchid />;
      default:
        return <WorkAnnivOrchid />;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      
      <div key={selectedId} className="w-full h-full">
        {renderCelebrantPage()}
      </div>

      <Catalog 
        employees={activeCelebrantsList} 
        currentSelected={selectedId} 
        onSelect={setSelectedId} 
      />

    </div>
  );
}

export default App;