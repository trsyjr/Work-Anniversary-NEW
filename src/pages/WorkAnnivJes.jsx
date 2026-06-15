import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

import Profile from '../assets/jes/Jesica.JPG'; 
import WA1 from '../assets/jes/WAJes1.jpg';
import WA2 from '../assets/jes/WAJes2.jpg'; 
import WA3 from '../assets/jes/WAJes3.jpg'; 
import WA4 from '../assets/jes/WAJes4.jpg'; 
import WA5 from '../assets/jes/WAJes5.JPG'; 
import WA6 from '../assets/jes/WAJes6.JPG'; 
import WA7 from '../assets/jes/WAJes7.JPG'; 
import WA8 from '../assets/jes/WAJes8.JPG'; 
import WA9 from '../assets/jes/WAJes9.JPG';
import WA10 from '../assets/jes/WAJes10.JPG'; 
import WA11 from '../assets/jes/WAJes11.JPG'; 
import WA12 from '../assets/jes/WAJes12.JPG'; 
import WA13 from '../assets/jes/WAJes13.JPG'; 
import WA14 from '../assets/jes/WAJes14.JPG'; 
import WA15 from '../assets/jes/WAJes15.jpg'; 
import WA16 from '../assets/jes/WAJes16.JPG'; 
import WA17 from '../assets/jes/WAJes17.jpg'; 
import WA18 from '../assets/jes/WAJes18.jpg';
import WA19 from '../assets/jes/WAJes19.jpg'; 
import WA20 from '../assets/jes/WAJes20.jpg'; 
import WA21 from '../assets/jes/WAJes21.jpg'; 
import WA22 from '../assets/jes/WAJes22.jpg'; 
import WA23 from '../assets/jes/WAJes23.jpg'; 
import WA24 from '../assets/jes/WAJes24.JPG';
import WA25 from '../assets/jes/WAJes25.jpg'; 
import WA26 from '../assets/jes/WAJes26.jpg'; 
import WA27 from '../assets/jes/WAJes27.JPG'; 

import LJ from '../assets/angel/LJ.JPG';
import ALJOHN from '../assets/angel/ALJOHN.JPG';
import JO from '../assets/angel/JO.JPG';
import JES from '../assets/angel/JES.JPG';
import KLENG from '../assets/angel/KLENG.JPG';
import O from '../assets/angel/O.JPG';
import THEA from '../assets/angel/THEA.JPG';
import PERRINE from '../assets/angel/PERRINE.JPG';
import AKI from '../assets/angel/AKI.JPG';
import CJ from '../assets/angel/Ako.JPG';
import JENA from '../assets/angel/Jena.JPG';
import MEANN from '../assets/angel/Meann.JPG';
import MERL from '../assets/angel/Merl.JPG';
import NOREEN from '../assets/angel/NData.JPG';
import EDD from '../assets/angel/Edd.JPG';
import CLA from '../assets/angel/Clarrisa.JPG';
import PAO from '../assets/angel/pao.png';
import NIC from '../assets/angel/Nicole.jpeg';
import DC from '../assets/angel/DCJ.JPG';
import MINA from '../assets/angel/Carmina.JPG';
import LYKA from '../assets/angel/Lyka.JPG';
import NANCY from '../assets/angel/Nancy.JPG';


const JES_CELEBRANT_DATA = {
  name: "Ms. Jesica S. Mencias",
  nickname: "Jes",
  anniversaryNumber: "2nd",
  avatar: Profile, // Ensure this points to Jes's profile image
  
  theme: {
    gradient: "from-emerald-800 via-teal-700 to-emerald-900",
    accent: "text-emerald-400",
    btn: "from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white"
  },

  shortPraise: "Your enthusiasm, leadership, and unwavering dedication make a difference every day. We truly appreciate your commitment and passion.",

  longDedication: "Thank you for another incredible year of dedication and excellence. Your exceptional work ethic and commitment to quality consistently raise the bar for our entire team. We are incredibly fortunate to have you with us, and we look forward to many more years of shared success and great memories. Cheers to your special day!",

  carouselImagesRow1: [
    WA1, WA2, WA3, WA4, WA5, WA6, WA7, WA8, WA9, WA10, WA11, WA12, WA24
  ],
  carouselImagesRow2: [
    WA13, WA14, WA15, WA16, WA17, WA18, WA19, WA20, WA21, WA22, WA25, WA26
  ],

  // --- UPDATE THESE MESSAGES FOR JES ---
  messages: [
    { 
      from: "Althea", 
      text: "Hi Ms. Jes. Hindi mo alam kung ano ang epekto ng leadership mo sa team natin. Sobrang blessed kame na dito ka napunta kahit na alam kong may iba kang career path na pinlano for yourself. Ang laking bagay na meron kameng nilulook forward na mga paandar sa Division lalo na sa Section kapag may stressful na araw. Hindi mo lang pinaganda ang mga pakiramdam namin, pinatibay mo rin ang bond ng bawat isa sa team. Sana dumami pa ang Jesica sa mundo-- yung sobrang thoughtful at creative sa pag express ng thoughtfulness. Tingin ko mas magiging masayang tirhan yung earth kung maraming wellbeing queen mother. Hay. Sa personal level naman, marami akong core memories with Ms. Jes na hindi ko rin ineexpect. Hahaha. Sobrang prim and proper kasi nya kaya wala talaga akong expectation na magkakaroon din kame ng bond outside work. Pero I guess, like-minded people are meant to stick together???? charez. Hahaha. Thank you, Jes, ha? Sa listening ears mo sa mga matters of the heart ko and random rants. And sa words of wisdom mo na talaga namang mapapaisip ka pag narinig. hahaha. Ayon. Please know that I have so much respect sa talino, bait, kulit, at lahat ng kaya mo pang ibigay sa amin at sa iyong sarili. ", 
      avatar: THEA 
    },
    { 
      from: "Nic", 
      text: "Ms. Jes reminds me of Alex Dunphy from the TV show, Modern Family. Like Alex, Ms. Jes is stuck with a chaotic family, the CBD-PLDS. She has to navigate her daily life surrounded by energetic, extroverted, and borderline chaotic bunch but similarly to the show, even though she is the quiet introverted type, she remains part of the family and is supported by everyone. Happy work anniversary, Ms. Jes, please know that the whole section is here for you and wishes for your continued success.", 
      avatar: NIC 
    },
    { 
      from: "CJ", 
      text: "Lahat naman kaya nya, perpek yan sha e. Happy Work Anniversary Ms. Jes/Mother of Wellbeing. Godbless!", 
      avatar: CJ 
    },
    { 
      from: "LJ", 
      text: "Ms Jes has a positive attitude and helps the team work in harmony. ", 
      avatar: LJ 
    },
    // { 
    //   from: "", 
    //   text: "", 
    //   avatar: 
    // },
    // Add all your messages here
  ]
};

export default function WorkAnniveJes() {
  return <WorkAnniversary celebrant={JES_CELEBRANT_DATA} />;
}