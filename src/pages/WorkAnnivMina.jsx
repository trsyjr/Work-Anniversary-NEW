import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

import Profile from '../assets/mina/MinaProfile.JPG';
import WA1 from '../assets/mina/WAMina1.jpg';
import WA2 from '../assets/mina/WAMina2.jpg'; 
import WA3 from '../assets/mina/WAMina3.jpg'; 
import WA4 from '../assets/mina/WAMina4.jpg'; 
import WA5 from '../assets/mina/WAMina5.jpg'; 
import WA6 from '../assets/mina/WAMina6.jpg'; 
import WA7 from '../assets/mina/WAMina7.jpg'; 
import WA8 from '../assets/mina/WAMina8.jpg'; 
import WA9 from '../assets/mina/WAMina9.jpg'; 
import WA10 from '../assets/mina/WAMina10.jpg'; 
import WA11 from '../assets/mina/WAMina11.jpg'; 
import WA12 from '../assets/mina/WAMina12.jpg'; 
import WA13 from '../assets/mina/WAMina13.jpg'; 
import WA14 from '../assets/mina/WAMina14.jpg'; 
import WA15 from '../assets/mina/WAMina15.JPG'; 
import WA16 from '../assets/mina/WAMina16.JPG'; 

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

const MINA_CELEBRANT_DATA = {
  name: "Carmina A. Llanto", 
  nickname: "Mina",
  gender: "female", 
  anniversaryNumber: "2nd",
  avatar: Profile, 
  
  // Clean mid-tone yellow theme designed to pair beautifully with white text layout layers
  theme: {
    gradient: "from-yellow-500 via-amber-400 to-yellow-600",
    accent: "text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    btn: "from-yellow-300 to-amber-400 hover:from-yellow-400 hover:to-amber-500 text-stone-900 font-bold shadow-md transition-all duration-200"
  },

  shortPraise: "Celebrating the Champion of Well-Being and Wonder. Your kind heart, generosity, and reliable leadership inspire us daily. Thank you for being the true 'Mother of Well-Being' to our team; your passion and commitment mean the world to us.",

  longDedication: "Happy Work Anniversary to the person who works tirelessly behind the scenes to keep our division connected, appreciated, and inspired! And although our offices may be in different areas, Ms. Jes always has a creative idea up her sleeve to bring us together and look after our collective well-being. Thank you, Ms. Jes, for being our ultimate champion of joy and making sure everyone is celebrated and has a place to belong!",

  carouselImagesRow1: [
    WA1, WA2, WA3, WA4, WA5, WA6, WA7, WA8
  ],
  carouselImagesRow2: [
    WA9, WA10, WA11, WA12, WA13, WA14, WA15, WA16
  ],

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
    { 
      from: "CARMINA", 
      text: "Jes, it’s been two years since we first met. Actually, March 6 tayo nagkakilala—initial interview mo pa iyon! Haha. And from that very first meeting, I already had a feeling that you would do amazing things. You’ve been such a light in our section—always welcoming, accommodating, and ready to lend a helping hand to anyone who needs it. You have a way of making people feel comfortable and supported, and that’s something not everyone can do. You’re also really good at what you do. I know there are times when you doubt yourself or feel like you’re not doing enough, but somehow, you always rise to the occasion and end up excelling. So never forget how capable and talented you truly are. Thank you for all that you do and for the positive energy you bring to the team. Keep shining, keep believing in yourself, and keep being the wonderful person that you are. And may your hugs always be just as warm as they were the first time we met—our very beautiful, talented, moisturized, hydrated, former 4 PM girlie. Happy work anniversary, Jes! Here's to more years of growth, success, and making wonders happen.", 
      avatar: MINA 
    },
    { 
      from: "DC JOESA", 
      text: "Humility, humility, humility! Yes, that's one thing I admire Ms. Jes. Her humility is demonstrated in all aspect of her dealings to everyone no matter what the situation is. She is grateful, forgiving, empowering, creative, talented in so many small and big ways, engaging, caring, inspiring and mostly loving. Nararamdaman ng lahat! May God bless you Ms. Jes!", 
      avatar: DC 
    },
    { 
      from: "Orchid", 
      text: "Ain't No Mountain High Enough by Marvin Gaye & Tammi Terrell ( https://youtu.be/IC5PL0XImjw?si=gGxF8KmNmvlwCZt6 ) Fitting song for you, Ms. Jes   ... a song that carries a beautiful message of determination and being there for others—perfect for a caring multitasker like you!", 
      avatar: O 
    },
    { 
      from: "Taylor Swift", 
      text: "Best believe I'm still bejeweled When I walk in the room I can still make the whole place shimmer pwede ba itong lyrics as motto? hahaha dahil iba ang glow ng nag iisang Song Hye Kyo ng DSWD. Super keri nya dalhin ang self nya with confidence and grabe ang charisma. Happy Work Anniversary, Ms. Jes! <3 -Jena", 
      avatar: JENA 
    },
    { 
      from: "Ruby", 
      text: "She really embodies teamwork and service kasi she's always willing to help and work with everyone. Ang dali niyang ka-work, and she makes sure na everyone feels supported and included. She does things with genuine care, and her positive energy helps create a good and welcoming environment for the whole team. Happy work anniv, Mother of Wellbeing!", 
      avatar: AKI 
    },
    { 
      from: "Noreen", 
      text: "Purpose. If there’s one word of encouragement na gusto ko pong i-share as you continue your journey with this office, it would be purpose. Ms. Jes, I just want you to know po that you are one of the people I truly look up to in the office. Ang dami ko pong natututunan sa inyo, not just sa work, but also sa pakikitungo sa ibang tao, sa faith, at sa pag-handle ng iba't ibang challenges sa buhay (ay wow hahaha). Yung wisdom niyo po, yung patience, at kahit yung simpleng pakikinig po ninyo sa mga random chika at kwento ko araw-araw, sobrang na-aappreciate ko po ‘yun. Sabi nga nila, everything happens for a reason, at sana hindi ka po mapagod sa pagtupad ng purpose mo. I hope you continue to find meaning, fulfillment, and joy sa ginagawa mo at sa pagpapatuloy mo rito sa Academy. We love you, our Queen Mother! Thank you for your guidance, wisdom, and genuine care. Wishing you more years of meaningful service and continued success! Happy work anniversary, Ms. Jessss 🤗", 
      avatar: NOREEN 
    },
    { 
      from: "Meann Dealo", 
      text: "maging chill parang di sya nase-stressed at nagagalit ; yun mga stickers at bookmarks na ginagawa nya for her trainings, kahit di ko ginawa sa trainings ko magandang idea sya", 
      avatar: MEANN 
    },
    { 
      from: "PAO", 
      text: "Homelander po kasi pinagalitan niya ko nung TSII pa lang ako. Dejk. Superman, caring ganun", 
      avatar: PAO 
    },
    { 
      from: "JOPS", 
      text: "Mabilis siyang makahanap ng paraan para himayin at solusyunan ang mga kumplikadong problema. Kahit kulang sa resources o hindi malinaw ang panuntunan, palaging may paraan si Ms. Jes. 'baka Ms. Jes yan!'", 
      avatar: JOPS 
    },
    { 
      from: "CLA", 
      text: "🥳 - This emoji represents Miss Jess because she creatively leads the WBT in thinking of meaningful and fun activites for the PLDS team. Happy work anniv, Miss Jess! Congrats! ", 
      avatar: CLA 
    },
  ]
};

export default function WorkAnniveMina() {
  return <WorkAnniversary celebrant={MINA_CELEBRANT_DATA} />;
}