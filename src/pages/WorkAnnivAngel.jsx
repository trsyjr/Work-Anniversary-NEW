import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

// Static asset imports
import Profile from '../assets/angel/ProfileAngel.JPG';
import MAM1 from '../assets/angel/MAM1.JPG';
import MAM2 from '../assets/angel/MAM2.JPG';
import MAM3 from '../assets/angel/MAM3.jpeg';
import MAM4 from '../assets/angel/MAM4.jpeg';
import MAM5 from '../assets/angel/MAM5.jpeg';
import MAM6 from '../assets/angel/MAM6.jpeg';
import MAM7 from '../assets/angel/MAM7.jpeg';
import MAM8 from '../assets/angel/MAM8.jpeg';
import MAM9 from '../assets/angel/MAM9.jpeg';
import MAM10 from '../assets/angel/MAM10.jpeg';
import MAM11 from '../assets/angel/MAM11.jpeg';
import MAM12 from '../assets/angel/MAM12.jpg';
import MAM13 from '../assets/angel/MAM13.jpg';

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

// CRITICAL PERFORMANCE FIX: Declared entirely outside the component function scope. 
// This object is now evaluated exactly once on load, instead of creating heavy new memory allocations on every re-render loop.
const ANGEL_CELEBRANT_DATA = {
  name: "Mr. Mark Angel Malapira",
  nickname: "Angel",
  anniversaryNumber: "1st",
  avatar: Profile, 
  
  theme: {
    gradient: "from-orange-600 via-amber-500 to-yellow-500",
    accent: "text-orange-600",
    btn: "from-orange-500 to-amber-600"
  },

  shortPraise: "Your enthusiasm, leadership, and unwavering dedication make a difference every day. We truly appreciate your commitment and passion.",

  longDedication: "Thank you for another incredible year of dedication and excellence. Your exceptional work ethic and commitment to quality consistently raise the bar for our entire team, making you an invaluable asset to the company. But beyond your professional brilliance, what truly sets you apart is your genuine kindness and warmth. You have a rare gift for turning a stressful workday into a positive experience, proving time and again that you are not just an outstanding colleague, but a deeply valued friend. We are incredibly fortunate to have you with us, and we look forward to many more years of shared success and great memories. Cheers to your special day!",

  carouselImagesRow1: [
    MAM1, MAM2, MAM3, MAM4, MAM5, MAM6, MAM7
  ],
  // FIXED: Deduplicated MAM9 image double call which was interrupting browser marquee layout streams
  carouselImagesRow2: [
    MAM8, MAM9, MAM10, MAM11, MAM12, MAM13
  ],

  messages: [
    { 
      from: "LJ", 
      text: "Hi Sir Angel! Congrats on your work anniversary. May you continue to be an angel who inspires and shares not just your skills and knowledge but also your positive traits. Keep soaring higher!", 
      avatar: LJ
    },
    { 
      from: "Aljohn", 
      text: "Happy Work Anniversary sir Angel! Thank you for being such a kind, brilliant and lively na workmate. Subrang gaan ka trabaho dahil sa positive energy mo. Blessed kami to have you sa team. Wishing you more success, growth, and happines sa work and in life. More years to come kapatid!", 
      avatar: ALJOHN
    },
    { 
      from: "Principal Jocelyn", 
      text: "Hi Sir Angel, Happy Work Anniversary! Thanks for always keeping things fun around the office while being someone the team can completely rely on. Cheers to a great first year!", 
      avatar: JO
    },
    { 
      from: "Jesica", 
      text: "Happy First Work Anniversary, Angel! Cheers! 🥂🥂", 
      avatar: JES
    },
    { 
      from: "Klenarchi", 
      text: "Happy anniversary satin, sweetie pie. Charis. Happy worksary sa iyoooo!! I'm happy na magkasama na naman tayo, I am blessed to witness how you work and how much you have grown as a person. but at the same time still be the same Angel I can yap with for hours, minus the nicotine tho. I love that you're loving what you do here. Ang galing galing, ang sipag sipag. Deserve mo lahat ng blessings na meron ka ngayon Gel. Love you!", 
      avatar: KLENG
    },
    { 
      from: "Orchid", 
      text: "You certainly live up to your name -- ANGEL!  Grateful to have worked with you and let me witness what a beautiful person you are.  Thank you for your kind and sweet demeanor and for always being so thoughtful.  Ang saya saya mo lang talaga kasama *hugs*!  Much, much love to you, dear Angel and congratulations!", 
      avatar: O
    },
    { 
      from: "Althea", 
      text: "I admire your professional demeanor and how you can make things work with minimal supervision. Ang pinaka paborito ko sa iyo ay yung lagi mo akong inaassure everytime na may task na mapupunta sa iyo 'ako na po bahala'`. Kaya hindi malabo na maging paborito ka pagdating sa pag dedeliver ng mga gawain. At syempre bukod sa professional performance, gusto ko rin na lagi mo kaming pinasasaya. Salamat at napunta ka sa DSWD at sa the best and the brightest section in the world. Happy Work Anniv, Sir Angel!", 
      avatar: THEA
    },
    { 
      from: "Perrine", 
      text: "Happy Work Anniversary, Geeeeeel!!  Seeing you grow in this role from day one has been such a privilege. I’ve seen all the hard work, the stress, and the heart you put into everything you do—you truly make the hardest days look easy. Sobrang swerte ng mga opisinang napupuntahan mo but I’m the luckiest because I get to see all the behind-the-scenes of your brilliance.  You’re an inspiration and a total rockstar, but more importantly, thank you for being the reason I don't quit every Monday! HAHAHAHAHAHAHAHAHAHA. I’m so proud of the professional you’ve become and even prouder to be alongside with yaaaaaa. Cheers to many more years of you killing it (at pag survive sa work together wahahahaha)! Love you forever and always sis!", 
      avatar: PERRINE
    },
    { 
      from: "Ruby", 
      text: "Happy work anniv! More to go po <33", 
      avatar: AKI
    },
    { 
      from: "CJ", 
      text: "Happy Work Anniversary Beshyyy, Maging masaya ka!", 
      avatar: CJ
    },
  ]
};

export default function WorkAnnivAngel() {
  return <WorkAnniversary celebrant={ANGEL_CELEBRANT_DATA} />;
}