import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

import Profile from '../assets/orchid/OProfile.JPG';
import WA1 from '../assets/orchid/O1.jpg';
import WA2 from '../assets/orchid/O2.jpg';
import WA3 from '../assets/orchid/O3.jpg';
import WA4 from '../assets/orchid/O4.jpeg';
import WA5 from '../assets/orchid/O5.jpg';
import WA6 from '../assets/orchid/O6.jpeg';
import WA7 from '../assets/orchid/O7.jpg';
import WA8 from '../assets/orchid/O8.jpg';
import WA9 from '../assets/orchid/O9.jpeg';
import WA10 from '../assets/orchid/O10.jpeg';
import WA11 from '../assets/orchid/O11.jpg';
import WA12 from '../assets/orchid/O12.jpg';
import WA13 from '../assets/orchid/O13.jpg';
import WA14 from '../assets/orchid/O14.jpg';
import WA15 from '../assets/orchid/O15.jpg';

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

const ORCHID_CELEBRANT_DATA = {
  name: "Orchid Bibit-Ocampo", 
  nickname: "O",
  gender: "female", 
  anniversaryNumber: "2nd",
  avatar: Profile, 
  
  // Clean mid-tone yellow theme designed to pair beautifully with white text layout layers
  theme: {
    gradient: "from-orange-400 via-orange-300 to-amber-200",
    accent: "text-amber-950 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]",
    btn: "from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold shadow-md transition-all duration-200"
  },

  shortPraise: "To the Ultimate Super Mom—at Home and at Work From being an extraordinary, devoted super mom at home to anchoring the CBD-PLDS team with your brilliant mind and international-level prowess, you do it all with unmatched grace. Your sharp intellect, talent, and reliable leadership inspire us daily. Thank you for being the heart and anchor of our team; your passion, global vision, and boundless commitment mean the world to us.",

  longDedication: "Happy Work Anniversary to the incredible Ms. O! Whether she is being an extraordinary, devoted super mom at home or guiding the CBD-PLDS division with her sharp intellect and international-level prowess, she manages it all with absolute grace. Ms. O works tirelessly to elevate our team, bringing world-class talent and creative vision to everything she touches while always prioritizing our collective well-being. Thank you, Ms. O, for your reliable leadership, your inspiring passion, and for ensuring that everyone in our division feels celebrated, connected, and valued!",

  carouselImagesRow1: [
    WA1, WA2, WA3, WA4, WA5, WA6, WA7, WA8
  ],
  carouselImagesRow2: [
    WA9, WA10, WA11, WA12, WA13, WA14, WA15,
  ],

  messages: [
    { 
      from: "Jops", 
      text: "Happy 2nd Work Anniversary, Ms. O! Maraming salamat sa iyong walang sawang dedikasyon at sipag sa ating team. Nawa'y mas marami pa tayong maabot na milestones kasama ka! 🎉Cheers to more years to come!🥂", 
      avatar: JOPS 
    },
    { 
      from: "Carmina", 
      text: "si ms orchid ay 🤩 kasi palagi siyang proud lang at masaya sa mga ginagawa ng mga kasama. always din siyang expressive sa mga bagay-bagay at laging pinaparating sa mga kasamahan niya kung magaling sila, need mag-improve, maganda, at lahat naaaa. thank you, ms. o sa iyong TLC sa lahat ng taong nakapaligid sa iyo. ramdam namin ang husay, galing, at malasakit mo since day 1! happy work anniversary woooooo!", 
      avatar: MINA 
    },
    { 
      from: "Jes", 
      text: "She's one of the greatest blessings to the team! She's a complete package sa totoo lang!!! Talent, character, beauty, nurturing, mother figure, a friend, free therapy and counseling, life's advice, creative sa lahat ng bagay, tiktokerist, team driver and the list goes on! Salamat Miss O sa buhay mo, naniniwala ako na nilagay ng Panginoon samin dahil maramin kaming matutunan sayo. Sana tumagal ka pa sa PLDS, kung hndi man, know that i am very supportive of you san ka man dalahen ni Lord! Blessed ang mga taong nakakasama ka sa work. Salamat miss o for everything especially sa mga personal nating heart to heart talks! You know im very comfortable with you - i can share with you anything! Thank you! Happy 2nd work anniv! I love you!", 
      avatar: JES
    },
    { 
      from: "Cla", 
      text: "Si Ms. Orchid, very supportive and calming ang prescence. When situations seem challenging, siya yung bumabalense. It reflects how seasoned she is as a professional. Hanga ako. haha. I am grateful to work with you and get to know you as a person, Miss O. Thank you for being here sa CBD-PLDS. Happy work anniversary sa DSWD!", 
      avatar: CLA 
    },
    { 
      from: "Kelly", 
      text: "Happy 2nd Work Anniversary po Ms. O🎊 Congratulations on reaching another milestone po! Wishing you a continued success, good health and more opportunities to grow in your career po🩷 ", 
      avatar: KELLY 
    },
    { 
      from: "Kent", 
      text: "If I had to choose a BTS song for Ms. O, it would definitely be Permission to Dance. It's actually the only BTS song I know, and coincidentally, it's also the song she performed during the last PLDS Big Break, what a coincidence, char! 😄 To me, Permission to Dance is about not needing anyone's approval to be happy and simply embracing who you are. I've seen how free-spirited Ms. O is and how genuinely caring she has been to all of us, even though we've only known each other for a short time. She has a way of making people feel comfortable, welcomed, and appreciated, and I think that perfectly reflects the song in Ms. O's personality", 
      avatar: KENT 
    },
    { 
      from: "Ruby", 
      text: "Finesse by Bruno Mars 🎶 Ms. O gives off that cool mom energy na chill, approachable, and effortlessly cool. Siya yung tipo ng tao na madaling lapitan at laging game tumulong whenever you need her. She makes things feel lighter, and she's someone you know will always have your back. Happy work anniversary, Mommy O! 💛", 
      avatar: AKI 
    },
    { 
      from: "LJ", 
      text: "Hi Ms O! Life goes on! I want you to know that I admire the way you care about your child, and I appreciate all the little talks we have lalo if its about Yoongi hahahah!!! I look forward to the time na magkakasama tayo as LMT. May you be blessed with a loving heart and I wish you more happiness in this lifetime. Happy work anniversary! Cheering for you, LJ :)", 
      avatar: LJ 
    },
    { 
      from: "Noreen", 
      text: "I think one of the qualities that makes Ms. O such a great colleague is her calmness. Super naa-appreciate ko po 'yun sa kanya since ilang beses na rin kaming nagkasama sa iba't ibang trainings, and napapansin ko na kapag mej challenging na ang situation, super calm pa rin niya. Nakakahawa po 'yung pagiging composed niya, kapag nakikita ko siyang kalmado, nababawasan din pagiging OA ko hahaha I really admire the way you handle everything so smoothly and gracefully, Ms. O. Thank you so much po sa lahat ng advice and guidance ninyo—not just professionally, but personally as well. Ang dami ko pong natutunan sa inyo, and I truly appreciate it. Happy Work Anniversaryyyyyyyy, Ms. O! May God bless you always 🥰", 
      avatar: NOREEN 
    },
    { 
      from: "Angel", 
      text: "My Mama O is a very inspiring person. She is the sweetest at lagi nya inaalala ang welfare ng lahat ng tao sa paligid nya. I remember nung nasa palawan kami, she always ask if okay kami, if kumain na ba; and if pagod, magpahinga. Minsan napapaisip ako, paano if sha ang maging mama ko sa tru lng na life, and biglang marerealize na she can be a mother to me naman talaga dahil lahat ay anak nya sa section natin. Thank you Mama O sa life mo and sa care mo sa amin. You have the heart of gold and we love you for it. Keep inspiring us to be kind and great sa life. And congrats sa iyong second year anniv sa work. love youuuuuu 😘😘❤️❤️", 
      avatar: ANGEL 
    },
    { 
      from: "Perrine", 
      text: "Ms. Orchid, or 'Mommy O' as I fondly call her, is a brilliant, highly capable, and intelligent Training Specialist who leads with both excellence and empathy. Beyond her exceptional professional skills in workforce development, she is incredibly nurturing, sincere, and deeply caring toward everyone in the workplace. She has a natural gift for making people feel comfortable, valued, and safe around her. She acts not just as a colleague, but as a dependable, guiding presence—a true 'work mom' who balances operational mastery with a warm, compassionate heart.", 
      avatar: PERRINE 
    },
    { 
      from: "CJ", 
      text: "During BELEN! this is the most memorable, Ms. O is very reliable person talagang sya ang gumastos for the BELEN also makikita mo talaga sakanya yung determination since lahat kami na awardan. Happy work anniversary Ms O! thank you sa tenga mo, im grateful that we have Ms. O sa CBD-PLDS!", 
      avatar: CJ 
    },
    { 
      from: "Edd", 
      text: "What I'll always remember about working with Ms. O is her warm and welcoming presence. Although we haven't had the opportunity to facilitate a training together yet, collaborating with her in WBT has shown me how incredibly creative, fun, and passionate she is. She has a way of putting her heart into everything she does, and that genuine dedication is truly inspiring. Happy 2nd Work Anniversary, Ms. O! 🥳 I'll always remember how you welcomed me with open arms during my very first week at work. Your kindness made me feel comfortable and valued from day one, and I'm grateful to have someone like you on the team. Wishing you continued success, happiness, and many more meaningful years ahead! Padayon! 💚", 
      avatar: EDD 
    },
    { 
      from: "Jo", 
      text: "Looking back, our first time together at the Gender and Development Training stands out so clearly to me. Those sessions can feel a bit intense, but her down-to-earth nature completely changed the vibe. She has this rare, effortless ability to make people feel comfortable and seen. Because of her warmth, I instantly felt at ease around her, and suddenly, the whole experience felt like a breeze.", 
      avatar: JO 
    },
    { 
      from: "Merl", 
      text: "Ms. O brings energy to the team through her naturally fun personality and childlike excitement for the things she enjoys. She never hesitates to sing, dance, or be playfully loud when the moment allows. She blends smoothly with everyone, as far as I can see XD", 
      avatar: MERL 
    },
    { 
      from: "Thea", 
      text: "Ms. Orchid, thank you po kasi kahit na di kayo pumayag e nag aact kayong surrogate parent ng PLDS? HAHAHAHAHA Lagi po kayong may wisdom sa amin and nakaka libre rin kame ng counseling service pay may mga bonding tayo on the side. Salamat din for being cool teammate po. Gusto ko po talaga na nakikinig sa inyong wisdom and I am sure, pati ang mga kasama natin sa team ay gusto rin makinig sa inyo. Salamat po sa inyong sobrang galing na pakikisama. Mabuhay po kayo, Ms. O!", 
      avatar: THEA 
    },
  ]
};

export default function WorkAnniveMina() {
  return <WorkAnniversary celebrant={ORCHID_CELEBRANT_DATA} />;
}