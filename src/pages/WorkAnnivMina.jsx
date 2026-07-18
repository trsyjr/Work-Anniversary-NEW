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
import KELLY from '../assets/comments/Kelly.jpg';
import KENT from '../assets/comments/Kent.JPG';
import ANGEL from '../assets/comments/ANGEL.JPG';

const MINA_CELEBRANT_DATA = {
  name: "Carmina A. Llanto", 
  nickname: "Mina",
  gender: "female", 
  anniversaryNumber: "3rd",
  avatar: Profile, 
  
  // Clean mid-tone yellow theme designed to pair beautifully with white text layout layers
  theme: {
    gradient: "from-yellow-500 via-amber-400 to-yellow-600",
    accent: "text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    btn: "from-yellow-300 to-amber-400 hover:from-yellow-400 hover:to-amber-500 text-stone-900 font-bold shadow-md transition-all duration-200"
  },

  shortPraise: "Today, we celebrate not just the time you have dedicated to your role, but the profound impact of your passion and exceptional management. Your unwavering reliability shines through in everything you do—making you a steadfast pillar of support not only to your family and parents but also a deeply valued asset to the entire CBD-PLDS.",

  longDedication: "Happy Work Anniversary! It is said that yellow is the color of optimism, energy, and joy—and it is the perfect reflection of how you bright and shine like the sun every single day. Your radiant passion for your work lights up the entire workplace, making you a true celebrity in the CBD-PLDS. You are a beacon of reliability, serving as a dependable pillar of strength for your parents and a brilliant star for our entire team. Thank you for bringing so much warmth, dedication, and sunshine into everything you do. May your year ahead continue to be just as bright!",

  carouselImagesRow1: [
    WA1, WA2, WA3, WA4, WA5, WA6, WA7, WA8
  ],
  carouselImagesRow2: [
    WA9, WA10, WA11, WA12, WA13, WA14, WA15, WA16
  ],

  messages: [
    { 
      from: "Althea", 
      text: "WALANG KAMATAYANG TSISMIS SA MGA TAONG HINDI MAGANDA ANG PAKIKITUNGO SAMIN! HAHAHAHAHAHAHAHAHAHAHAHAHAHA pero syempre, bilang kaibigan ko itong si Mina, sobrang kumportable naman ako na usapin sa kanya ang kahit ano. Kahit awkward ang topic. Kahit hindi ako comfortable, nagiging comftable ako dahil alam kong safe space sya at kay Raphael nya lang ito makkwento? hahahahahahaha pero siguro kung papipiliin ako ng deep talks, mga tungkol sa buhay nalang-- aspirations, frustrations, relationships, current events, tas buhay din ng iba. Di mawawala siguro yon. hahahaha thanks mem sa palagiang paglelend ng listening ears, kahit na mga rants ko! Mabuhay ka and sana dumami ka pa!", 
      avatar: THEA 
    },
    { 
      from: "Meann", 
      text: "Roar by Katty Perry", 
      avatar: MEANN 
    },
    { 
      from: "Nancy", 
      text: "Her humility, expertise and willingness to listen make her both brilliant and approachable. She creates a welcoming environment where everyone feels valued.", 
      avatar: NANCY 
    },
    { 
      from: "Kent", 
      text: "Happy Anniversary, Mina-san!! Almost 2 years na tayong magkakilala, pero ikaw pa rin ang certified source ng tawa at kalokohan charaught, never a dull moment, lalo na kapag may “Amazeballs!” ka na naman.  Stay funny, stay kalog, and keep being your amazing self. Advice ko lang: trust your vibes, enjoy the ride, and huwag mawawala ang good vibes mo. Cheers to more laughs, chika, at amazeballs moments! ps. Di na daw kayo maarok ni Riri and i don’t know what maarok mean 🤣🤣", 
      avatar: KENT 
    },
    { 
      from: "LJ", 
      text: "I thinks she is has the Katniss Everdeen (Hunger Games) vibe. Just like Katniss, she also bravely steps up with her sister to defy the odds and is resilient because she endures all challenges in life. Happy 3rd work anniversary, Ms. Mina. May the odds be on your favor! Keep on shining! :)", 
      avatar: LJ 
    },
    { 
      from: "Cla", 
      text: "Yellow suits her well because of her bright personality - magaan ang presence niya, very approachable and easy to work with. Like color yellow, she stands out in whatever she does. Happy 3rd Work Anniversary Ms. Mina! ", 
      avatar: CLA 
    },
    { 
      from: "Jena", 
      text: "💛- Yellow Heart. Why?\nshe leads with kindness and pinapa-feel nya sa bawat tao na pwede mo siya lapitan anytime. \n\n🌻- Sunflower naman kasi nagraradiate ang kanyang mala-Angel Locsin na beauty na talaga nga naman na masisilaw ka. \n\n☀️- syempre kung may sunflower, dapat may sun. Tapos dapat lahat yellow eh. \nKada dadaan siya, mapapa sabi ka na lang talaga ng \"Sunshine Morning, y'all!\" Isa siya sa nagbibigay ng energy sa team para malagpasan ang bahat hamon sa trabaho. Az a tropa, masasabi ko na thankful ako sa life nya dahil nagbibigay siya ng warmth and bonggang energy and joy sa aming tropahan. \n\n🎵🎵\"Kung meron mang kulay ang aming nagsisilbing tanglaw, Ikaw, ikaw ay dilaw\" 🎵🎵\n\nHappy Work Anniversary, Minaaaa gurl! \n\n-Jena", 
      avatar: JENA 
    },
    { 
      from: "Kelly", 
      text: "Euphrosyne Award🏆💛 because Euphrosyne is the goddess of joy, good cheer and mirth. Happy 3rd Work Anniversary Ma'am Mina! ", 
      avatar: KELLY 
    },
    { 
      from: "Noreen", 
      text: "'Shining Star' - Sinearch ko po kung may book na ganito, meron naman, miss hahaha pero kidding aside, ito po talaga 'yung unang pumasok sa isip ko nung nabasa ko 'yung question hehe kasi bukod sa favorite color ni Ms. Mina ang yellow na isa sa mga colors ng star, she has a remarkable way of uplifting and inspiring people around her. Just like a star na nagbibigay rin ng light, she radiates hope, kindness, and warmth. Happy 3rd work anniversary po, Ms. Minaaaa! May God bless you always!", 
      avatar: NOREEN 
    },
    { 
      from: "Jes", 
      text: "everything she does, says super benta! NATURALESA nya lang maging funny! Biruin mo miss by just existing, andami mong napapasaya! Grabeng talent at blessing naman iyan! \n\nSupeer bets ko kapag gayang gaya mo si Angel Locsin, tas kaya mo rin impersonate ako char plus mga ibang artista na para bang wala kang hndi kayang gawin!! \n\nSuper dami mong pinapauso samin na mga expressions miss na super havey talaga kaya ikaw ang mother of all invention talaga! \n\nHappy 3rd work anniversary miss mina! you will always be that special colleague to me from the time na chinachat mo palang ako sa mga reqs ko, to my first roomie sa Bohol, to being my first mentor at hanggang ngayon yan! Sobrang idol din kita miss in terms of values and principles, sino na lang ang isang tao kung walang prinsipyo at integridad yan ung tatak mo sakin! Salamat miss sa lahat ng natutunan ko sayo! Sobra ka sa kagalingan, kabaitan at kagandahan!! Super simple pero pak! Happy anniv! sana tumagal ka pa miss until maging DC ka na miss then director!\n\n Love, Jes 🌻🌻🌻", 
      avatar: JES 
    },
    { 
      from: "CJ", 
      text: "Japan! Ms. Mina is very fun to talk with or to bond with i believe if the PLDS have the chance to go like this it would be very fun. Happy work anniversary Ms. Mina! I hope for your success and to your family!", 
      avatar: CJ 
    },
    { 
      from: "Jocelyn", 
      text: "I just wanted to take a moment to say how much I admire Ms. Mina. Watching her has shown me what true, unconditional love for family looks like. She brings that same beautiful care into the office every day, putting her whole heart into everything she does with such perfect order and quality. More than anything, her sweetness, warmth, and honesty make the office a better place. She is a wonderful colleague and an even more wonderful human being.", 
      avatar: JO 
    },
    { 
      from: "Kleng", 
      text: "PARANG LAHAT NAMAN KAY MISS MINA AY KAPURI PURI AT NAPUPURI ITO NG LAHAT??? HAHAHAH OA. Siguro yung pagiging one chat away ni miss mina sa work? Kapag may mga inquiry ako isa si miss Mina sa mga una kong china-chat. At kapag nag rerespond siya, never half-hearted. Talagang very willing to assist or mentor you. Madaling mag work kapag hindi madamot sa info ang kasama, it makes the work efficient and swift! Salamat salamat sa buhay mo maemm. Happy work anniversaryyyy! More more more blessings pa para sa iyooo!", 
      avatar: KLENG 
    },
    { 
      from: "Orchid", 
      text: "When I was being onboarded here in the Academy...  Napaka-patient mo po with me, Ms. Mina and you made sure that I won't be left out. THANK YOU for helping me with my transition.  To many more inspiring moments with you, Ms. Mina!  May you be blessed with so many more Graces! *bearhugs*", 
      avatar: O 
    },
    { 
      from: "EDD", 
      text: "Ms. Mina, your strong personality has inspired me in so many ways, both professionally and personally. I truly admire how you stand by your principles and remain authentic in everything you do. I've also seen how politically aware and socially conscious you are, and it encourages me to be more informed and intentional in my own perspectives and actions. Happy 3rd work anniversary, Ms. Mina! 🎉 Thank you for being someone who leads with conviction, integrity, and purpose. Wishing you continued growth, success, and fulfillment in the years ahead. May you continue to inspire the people around you and make a meaningful impact wherever you go. Padayon! 🌻", 
      avatar: EDD 
    },
  ]
};

export default function WorkAnniveMina() {
  return <WorkAnniversary celebrant={MINA_CELEBRANT_DATA} />;
}