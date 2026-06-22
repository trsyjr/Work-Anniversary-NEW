import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

import Profile from '../assets/jes/Jesica.JPG'; 
import WA1 from '../assets/jes/WAJes1.jpg';
import WA2 from '../assets/jes/WAJes2.jpg';
import WA3 from '../assets/jes/WAJes3.PNG';
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
import WA19 from '../assets/jes/WAJes19.jpeg';
import WA20 from '../assets/jes/WAJes20.jpeg';
import WA21 from '../assets/jes/WAJes21.jpg';
import WA22 from '../assets/jes/WAJes22.jpeg';
import WA23 from '../assets/jes/WAJes23.jpeg';
import WA24 from '../assets/jes/WAJes24.JPG';
import WA25 from '../assets/jes/WAJes25.jpeg';
import WA26 from '../assets/jes/WAJes26.jpg';
import WA27 from '../assets/jes/WAJes27.JPG';

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

const JES_CELEBRANT_DATA = {
  name: "Jesica S. Mencias", // Prefix removed here so the dynamic component applies it cleanly
  nickname: "Jes",
  gender: "female", // Added to control dynamic title selection
  anniversaryNumber: "2nd",
  avatar: Profile, 
  
  theme: {
    gradient: "from-emerald-800 via-teal-700 to-emerald-900",
    accent: "text-emerald-400",
    btn: "from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white"
  },

  shortPraise: "Celebrating the Champion of Well-Being and Wonder. Your kind heart, generosity, and reliable leadership inspire us daily. Thank you for being the true 'Mother of Well-Being' to our team; your passion and commitment mean the world to us.",

  longDedication: "Happy Work Anniversary to the person who works tirelessly behind the scenes to keep our division connected, appreciated, and inspired! And although our offices may be in different areas, Ms. Jes always has a creative idea up her sleeve to bring us together and look after our collective well-being. Thank you, Ms. Jes, for being our ultimate champion of joy and making sure everyone is celebrated and has a place to belong!",

  carouselImagesRow1: [
    WA1, WA2, WA3, WA4, WA5, WA6, WA7, WA8, WA9, WA10, WA11, WA12, WA24, WA27
  ],
  carouselImagesRow2: [
    WA13, WA14, WA15, WA16, WA17, WA18, WA19, WA20, WA21, WA22, WA25, WA26
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
      text: "Ain't No Mountain High Enough by Marvin Gaye & Tammi Terrell ( https://youtu.be/IC5PL0XImjw?si=gGxF8KmNmvlwCZt6 ) Fitting song for you, Ms. Jes  ... a song that carries a beautiful message of determination and being there for others—perfect for a caring multitasker like you!", 
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

export default function WorkAnniveJes() {
  return <WorkAnniversary celebrant={JES_CELEBRANT_DATA} />;
}