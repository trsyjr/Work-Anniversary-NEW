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

// CRITICAL PERFORMANCE FIX: Declared entirely outside the component function scope. 
// This object is now evaluated exactly once on load, instead of creating heavy new memory allocations on every re-render loop.
const ANGEL_CELEBRANT_DATA = {
  name: "Mr. Mark Angel Malapira",
  nickname: "Angel",
  gender: "Male",
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
      text: (
        <>
          Hi Angel!<br />
          Happy First Work Anniversary!<br /><br />
          
          You truly add color to our team with your charming personality. I admire how calm you are in everything you do, and how you <span className="text-emerald-400 font-semibold">consistently deliver your work with excellence</span>.<br /><br />
          
          Although we haven’t had the chance to work together in training, I can see how responsible, dependable, and humble you are. I also admire how cool a <span className="text-amber-300">fur parent</span> you are! Most of all, I am amazed by the way you pray—a reflection of how centered your life is in our Lord Jesus Christ.<br /><br />
          
          Thank you for being such an inspiring colleague. I wish you nothing but the best and many more fruitful and fulfilling years with us.<br /><br />
          
          Congratulations on your first work anniversary! 💙✨
        </>
      ), 
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
      text: "Happy Work Anniversary, Geeeeel!!  Seeing you grow in this role from day one has been such a privilege. I’ve seen all the hard work, the stress, and the heart you put into everything you do—you truly make the hardest days look easy. Sobrang swerte ng mga opisinang napupuntahan mo but I’m the luckiest because I get to see all the behind-the-scenes of your brilliance.  You’re an inspiration and a total rockstar, but more importantly, thank you for being the reason I don't quit every Monday! HAHAHAHAHAHAHAHAHAHA. I’m so proud of the professional you’ve become and even prouder to be alongside with yaaaaaa. Cheers to many more years of you killing it (at pag survive sa work together wahahahaha)! Love you forever and always sis!", 
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
    { 
      from: "Jena", 
      text: "Happy Work Anniv!! Thank youu kasi isa ka sa nagpapasaya sa team! Bongga ang lahat ng contributions, hard work, and commitment mo for the PLDS and Academy. Happy Work Anniv ulit!! ", 
      avatar: JENA
    },
    { 
      from: "Marry Ann", 
      text: "Thank you for being such a sweet person. I'm happy to be working with you. Cheers to more years in service.", 
      avatar: MEANN
    },
    { 
      from: "Merl", 
      text: "One year na ’yun? Parang kailan lang, chismis pa lang ang “working with DA,” tapos ngayon isang taon ka na palang naghahasik ng bonggang energy sa amin. XD  Happy Work Anniversary, Mamii! My heart is full because you’re here with us. What a blessing to have you in our corner.  Thank you for being reliable, driven, funny, joyful, and safe. You inspire me to do better — partly kasi napaka-competitive mo 😂 but really, your excellence pushes us to level up too.  So grateful for the opportunity to work with you. Wishing you more happiness, success, and blessings ahead.  I love youuu. 🤍🫶", 
      avatar: MERL
    },
    { 
      from: "Noreen", 
      text: "Happy Work Anniversary, Sir Angel! Isang beses pa lang tayo nagkakasama sa training pero nakita ko po kung gaano ka kagaling at kagaan ka-trabaho. Thank you rin po sa pagbibigay ng happiness sa section natin! hahahaha Stay healthy, happy, and ingat po palagiii <3 May God bless you always po!", 
      avatar: NOREEN
    },
    { 
      from: "Edd", 
      text: "Happy 1st Work Anniversary, BFF, and our BEST BREAD FRIEND, Sir Angel! 🍞💚  Thank you for your existence and for being such an amazing person, katrabaho, and friend. Your kindness, humor, and genuine support make the workplace lighter and more meaningful every day. May you continue to grow, inspire others, and “rise” toward greater blessings and achievements ahead. We’re truly grateful to have you in our lives — stay soft and freshly baked always! ✨", 
      avatar: EDD
    },
    { 
      from: "Cla", 
      text: "Happy work anniversary!!! Naka 365 days around the sun na ang iyong professional life together with CBD-PLDS. I hope you will continue to shine and soar in what ever you do. Congratulations!!", 
      avatar: CLA
    },
    { 
      from: "Pao", 
      text: "Dear AngleSuper idol de xiàoróng dōu méi nǐ de tián Bā yuè zhèngwǔ de yángguāng dōu méi nǐ yàoyǎn Rè'ài 105 dù de nǐ Dī dī qīngchún de xhēngliúshuǐ. wala palang enter dito amp. Drink water. Pati dogs. Not drink dogs, but make dogs drink water ganern ", 
      avatar: PAO
    },
    { 
      from: "Nic", 
      text: "Happy work anniversary, my Viefef! Ang tanging nakakachikahan ko pag dating sa drag race hahahaha. I wish you continued success viefef ko, alam ng naka naka mo na to ang iyong angking galing at talino, kinakaya mo mamangha hindi lamang ang iyong mga kasamahan sa trabaho kung di pati ang mga pax na ating binibigyan serbisyo. Continue shining, kaso nga lang sabi ni Mirabel sa kanyang awitin, stars don't shine they burn, kaya dont forget to take care of yourself, heartburn? Mag Kremil-S ka na.", 
      avatar: NIC
    },
    { 
      from: "DC Joesa", 
      text: "Hi Gandang Angel! Congratulations to your Work Anniversary! I am so grateful you are part of us in the CBD-PLDS/DA. The work is more colorful, joyful and meaningful because of your light and beautiful presence. Please continue to be competent in doing your job and the untiring commitment to serve through the CBD-PLDS. Let me know if you have concerns so I may be of help. Godbless you more!", 
      avatar: DC
    },
    { 
      from: "Carmina", 
      text: "Hello My Katukayo! Grabe ka Happy Work Anniversary sa iyo! Grabe ka naman. Time flies so fast! Ang dami mo nang nagawa at gagawin pa para sa bayan. Sana sama-sama lang tayo hanggang sa walang hanggan. Sana masaya ka pa rito, Sis?! Ahahaha. Kidding aside, nawa palagi kang masaya sa ginagawa mo. Deserve naman siguro natin kumita ng pera habang natutuwa sa buhay na ito. At syempre, stay healthy ka palagi! To many more years in service with you (Insert hand gesture ni Swoh Duts).", 
      avatar: MINA
    },
    { 
      from: "Lyka", 
      text: "Happy Work Anniversary Geeeeel! Proud ako sayo sa lahat ng hard work at achievements mo. Deserve mo lahat ng blessings at success na meron ka ngayon. Salamat sa pagiging isa sa mga dose of happiness namin sa CBD. Salamat sa bohay mo! 💗", 
      avatar: LYKA
    },
    { 
      from: "Nancy", 
      text: "Congratulations Angel! Wishing you continued success!", 
      avatar: NANCY
    },
  ]
};

export default function WorkAnnivAngel() {
  return <WorkAnniversary celebrant={ANGEL_CELEBRANT_DATA} />;
}