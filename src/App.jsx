// src/App.jsx
import React, { useState } from 'react';
import WorkAnnivAngel from './pages/WorkAnnivAngel';
import WorkAnnivJes from './pages/WorkAnnivJes';
import WorkAnnivMina from './pages/WorkAnnivMina'; 
import WorkAnnivOrchid from './pages/WorkAnnivOrchid';
import WorkAnnivNic from './pages/WorkAnnivNic';
import WorkAnnivCjAki from './pages/WorkAnnivCjAki';
import Catalog from './components/Catalog';

import JesAvatar from './assets/jes/Jesica.JPG';
import AngelAvatar from './assets/angel/ProfileAngel.JPG';
import MinaAvatar from './assets/mina/MinaProfile.JPG';
import OrchidAvatar from './assets/orchid/OProfile.JPG';
import NicAvatar from './assets/nic/ProfileNic.JPG';
import CjAvatar from './assets/cj/ProfileCj.JPG';    
import AkiAvatar from './assets/aki/ProfileAki.JPG';  

import './App.css';

const DATA_MAPPING = {
  nic: { 
    id: "nic",
    nickname: "Nic",
    anniversaryNumber: "1st",
    avatar: NicAvatar 
  },
  orchid: { 
    id: "orchid",
    nickname: "Orchid",
    anniversaryNumber: "2nd",
    avatar: OrchidAvatar 
  },
  mina: { 
    id: "mina",
    nickname: "Mina",
    anniversaryNumber: "3rd",
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
  },
  // Combined entry for CJ & Aki in the Catalog
  cjAki: {
    id: "cj-ruby",
    nickname: "CJ & Ruby",
    anniversaryNumber: "1st",
    avatar: CjAvatar, // Primary fallback avatar
    avatars: [CjAvatar, AkiAvatar], // Dual avatar support
    theme: {
      gradient: "from-red-600 via-rose-600 to-orange-500",
      btn: "from-red-500 to-orange-500"
    }
  }
};

function App() {
  const activeCelebrantsList = [
    DATA_MAPPING.jesica, 
    DATA_MAPPING.mina, 
    DATA_MAPPING.angel, 
    DATA_MAPPING.orchid,
    DATA_MAPPING.nic,
    DATA_MAPPING.cjAki, // Renders the combined CJ & Aki item on Catalog
  ];
  
  // Default selected ID
  const [selectedId, setSelectedId] = useState("cj-ruby");

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
      case "nic":
        return <WorkAnnivNic />;
      
      // Handles CJ, Aki, or combined "cj-aki" selection
      case "cj":
      case "ruby":
      case "cj-ruby":
        return <WorkAnnivCjAki initialSelected={selectedId} />;
      
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