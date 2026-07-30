import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

import Profile from '../assets/nancy/NancyProfile.JPG';
import N1 from '../assets/nancy/N1.jpg';
import N2 from '../assets/nancy/N2.jpg';
import N3 from '../assets/nancy/N3.jpg';
import N4 from '../assets/nancy/N4.jpg';
import N5 from '../assets/nancy/N5.jpg';
import N6 from '../assets/nancy/N6.jpg';
import N7 from '../assets/nancy/N7.jpg';
import N8 from '../assets/nancy/N8.jpg';


import LJ from '../assets/comments/LJ.JPG';
import ALJOHN from '../assets/comments/ALJOHN.JPG';
import JO from '../assets/comments/JO.JPG';
import JES from '../assets/comments/JES.JPG';
import KLENG from '../assets/comments/KLENG.JPG';
import O from '../assets/comments/O.JPG';
import THEA from '../assets/comments/THEA.JPG';
import PERRINE from '../assets/comments/PERRINE.JPG';
import AKI from '../assets/comments/AKI.JPG';
import CJ from '../assets/comments/Ako.JPG';
import JENA from '../assets/comments/Jena.JPG';
import MEANN from '../assets/comments/Meann.JPG';
import MERL from '../assets/comments/Merl.JPG';
import NOREEN from '../assets/comments/NData.JPG';
import EDD from '../assets/comments/Edd.JPG';
import CLA from '../assets/comments/Clarrisa.JPG';
import PAO from '../assets/comments/pao.png';
import NIC from '../assets/comments/Nicole.jpeg';
import DC from '../assets/comments/DCJ.JPG';
import MINA from '../assets/comments/Carmina.JPG';
import LYKA from '../assets/comments/Lyka.JPG';
import NANCY from '../assets/comments/Nancy.JPG';
import JOPS from '../assets/comments/JOPS.JPG';
import KELLY from '../assets/comments/Kelly.jpg';
import KENT from '../assets/comments/Kent.JPG';
import ANGEL from '../assets/comments/ANGEL.JPG';
import JOY from '../assets/comments/Joy.jpg';

const NANCY_CELEBRANT_DATA = {
  name: "Nancy E. Fortes", 
  nickname: "Nancy",
  gender: "female", 
  anniversaryNumber: "21st",
  avatar: Profile, 
  
  // Clean mid-tone yellow theme designed to pair beautifully with white text layout layers
  theme: {
    gradient: "from-[#FFCBA4] via-[#FFB7A1] to-[#FF9EAA]",
    accent: "text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    btn: "from-[#FFCBA4] to-[#FFB7A1] hover:from-[#FFB7A1] hover:to-[#FF9EAA] text-stone-800 font-bold shadow-md transition-all duration-200"
  },

  shortPraise: "Today, we celebrate not just the time you have dedicated to your role, but the profound impact of your passion and exceptional management. Your unwavering reliability shines through in everything you do—making you a steadfast pillar of support not only to your family and parents but also a deeply valued asset to the entire CBD-PLDS.",

  longDedication: "Happy Work Anniversary! It is said that yellow is the color of optimism, energy, and joy—and it is the perfect reflection of how you bright and shine like the sun every single day. Your radiant passion for your work lights up the entire workplace, making you a true celebrity in the CBD-PLDS. You are a beacon of reliability, serving as a dependable pillar of strength for your parents and a brilliant star for our entire team. Thank you for bringing so much warmth, dedication, and sunshine into everything you do. May your year ahead continue to be just as bright!",

  carouselImagesRow1: [
    N1, N2, N3, N4,
  ],
  carouselImagesRow2: [
    N5, N6, N7, N8
  ],

  messages: [
    { 
      from: "Mina", 
      text: "If Ms. Nancy's personality was a color it would be Green. Kasi napaka kalmado niya lang na tao at katrabaho. Green kasi katulad ng Blue parang ang refreshing lang 'di ba. Si Ms. Nancy ay isa sa mga may pinaka banayad na boses at kamay na nakilala ko. Bukod diyan ay napaka humble din. Thank you, Ms. Nance sa pagiging malumanay sa lahat. Isang lesson iyan na naituro mo rin sa akin na maisasabuhay ko sa araw-araw hehehe. Happy Work Anniversary! Cheers to 21 years of public service!", 
      avatar: MINA 
    },
    { 
      from: "Ms. O", 
      text: "Keep enjoying what you do, Ms. Nancy! For the 21 years that you have been here, we celebrate all that you have accomplished and how they have become life-changing moments to others. May you continue your inspiring service and may you be blessed more and more.", 
      avatar: O 
    },
    { 
      from: "Kent", 
      text: "Olaaaa Ms. Nancy, lowkey ka lang po pero ang laki ng positive impact mo sa team. 😊 Your genuine smile and accommodating nature make everyone feel comfortable, even on stressful days. Thank you po for being our quiet source of good vibes. Keep smiling, you make the workplace brighter!", 
      avatar: KENT 
    },
    { 
      from: "CJ", 
      text: "Her smile and gestures show how graceful she is. You can really see her professionalism through her personality, and her warm smile makes her so approachable. Happy 21st Work Anniversary, Ms. Nancy! wow grabe Ms. 21 years kana po dito you truly honed yourself po here. Very inspiring ka po Ms. Happy work Anniversary po ulet, I wish you Good Health also Wealth to you and to your family!", 
      avatar: CJ 
    },
    { 
      from: "Ms. Jo", 
      text: "Think of the vibe of 'A Love to Last a Lifetime'—not so much for the words, but for that smooth, easy rhythm. It’s the kind of music that just makes one breathe a little easier, unwind, and feel a quiet, gentle warmth.", 
      avatar: JO 
    },
    { 
      from: "LJ", 
      text: "I think I'll ask Ms Nancy pano nya nagagawang maging soft spoken? hahaha. Kidding aside, I think magandang pag-usapan namin ang child welfare lalo na at expertise nya yung ganun. Happy, happy 21st work anniversary po, Ms. Nancy! Grabe 3x loyalty awardee na po yun, diba? Congrats and I hope for your success :)", 
      avatar: LJ 
    },
    { 
      from: "Ruby", 
      text: "Quiet, Warm, and Fun. Happy work anniversary po! <33", 
      avatar: AKI 
    },
    { 
      from: "Kelly", 
      text: "Hello po Ms. Nancy!! Happy 21st Work Anniversary po ❤️ Since I am a new employee po sa CBD, I can’t really answer the question yet, but I just want to say how inspiring it is to see someone reach 21 years of dedication and service. Thank you po for your hard work, guidance and positive impact on the team. Wishing you many more successful years ahead, good health, happiness, and continued blessings. Congratulations po on this amazing milestone! 🎉🥳", 
      avatar: KELLY 
    },
    { 
      from: "Jena", 
      text: "For me talaga nakaka inspire yung pagiging calm and mahinhin niya. Grace under pressure ang atake and hoping na kaya ko rin yan. Kahit anong bigat ng work eh nakikita ko na kaya nya ihandle. Also, wow yung 21 years sa dswd?? talagang nakaka inspire. How to be u po? paano tumagal nang ganyan? Happy Work Anniv po Ms. Nancyyyy!! <3 \n\n-Jena Mae", 
      avatar: JENA 
    },
  ]
};

export default function WorkAnniveNancy() {
  return <WorkAnniversary celebrant={NANCY_CELEBRANT_DATA} />;
}