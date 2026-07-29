import React from 'react';
import WorkAnniversary from '../components/WorkAnniversary';

// Profile Images
import ProfileAki from '../assets/aki/ProfileAki.JPG';
import ProfileCj from '../assets/cj/ProfileCj.JPG';

import A1 from '../assets/aki/A1.jpeg';
import A2 from '../assets/aki/A2.jpg';
import A3 from '../assets/aki/A3.jpg';
import A4 from '../assets/aki/A4.jpeg';
import A5 from '../assets/aki/A5.jpg';
import A6 from '../assets/aki/A6.jpg';
import A7 from '../assets/aki/A7.jpg';
import A8 from '../assets/aki/A8.jpg';
import A9 from '../assets/aki/A9.jpg';
import A10 from '../assets/aki/A10.jpg';
import A11 from '../assets/aki/A11.JPG';
import A12 from '../assets/aki/A12.JPG';
import A13 from '../assets/aki/A13.JPG';
import A14 from '../assets/aki/A14.JPG';
import A15 from '../assets/aki/A15.JPG';
import A16 from '../assets/aki/A16.JPG';
import A17 from '../assets/aki/A17.JPG';
import A18 from '../assets/aki/A18.jpg';
import A19 from '../assets/aki/A19.jpg';
import A20 from '../assets/aki/A20.jpg';
import A21 from '../assets/aki/A21.jpg';
import A22 from '../assets/aki/A22.jpg';
import A23 from '../assets/aki/A23.jpg';
import A24 from '../assets/aki/A24.jpg';

import C1 from '../assets/cj/C1.jpg';
import C2 from '../assets/cj/C2.jpg';
import C3 from '../assets/cj/C3.jpg';
import C4 from '../assets/cj/C4.jpg';
import C5 from '../assets/cj/C5.jpg';
import C6 from '../assets/cj/C6.jpg';
import C7 from '../assets/cj/C7.jpg';
import C8 from '../assets/cj/C8.jpg';
import C9 from '../assets/cj/C9.jpg';
import C10 from '../assets/cj/C10.jpg';
import C11 from '../assets/cj/C11.jpg';

// Comment Avatars
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

const CJ_CELEBRANT_DATA = {
  name: "Tonghie R. Sy Jr.", 
  nickname: "CJ",
  gender: "male", 
  anniversaryNumber: "1st",
  avatar: ProfileCj, 
  
  theme: {
    // Pure vibrant Orange to Amber gradient (No black)
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    accent: "text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    btn: "from-amber-400 to-orange-600 text-white font-bold shadow-lg hover:from-amber-500 hover:to-orange-700"
  },

  shortPraise: "Today, we celebrate our two amazing angels—our Art Angel, Ruby, and our Angel in the Red Vest, CJ! Happy 1st Work Anniversary! May this be the first of many more meaningful years with the DSWD Academy. Wishing you continued success, fulfillment, and countless more milestones ahead!",

  longDedication: "❤️ Happy 1st Work Anniversary, CJ! To our Angel in the Red Vest (ARV)—you have an incredible way of making even the most challenging tasks look effortless. Whenever we encounter a technical concern or need a digital solution, we know we can always count on you. Thank you for your countless innovations, your expertise, and your dedication to helping our section continuously improve. Your contributions behind the scenes have made a significant impact and have helped our section stand out in so many ways. We deeply appreciate your patience, reliability, and willingness to support everyone. Thank you for making things possible and for always going the extra mile. We are grateful to have you as part of our team!",

  carouselImagesRow1: [
    C1, C2, C3, C4, C5,
  ],
  carouselImagesRow2: [
    C6, C7, C8, C9, C10, C11
  ],

  messages: [
    { 
      from: "Joy", 
      text: "Hello, Sir CJ! It was nice meeting you po. I hope we get along well, and I’m looking forward to learning a lot from you throughout my journey here at the Academy. Wishing you all the best in life, and I hope you continue to enjoy what you do. May God bless you always, as well as your family. God bless po!", 
      avatar: JOY 
    },
    { 
      from: "Nic", 
      text: "哪裡也不去——如果 Cj 先生不親自主持培訓或課程，我就不想參加。祝你入職週年快樂，期待未來迎來更多個週年紀念。", 
      avatar: NIC 
    },
    { 
      from: "LJ", 
      text: "CJ is SuperTechie. I think no need to explain na ito haha. Ang galing e!", 
      avatar: LJ 
    },
    { 
      from: "Mina", 
      text: "One of CJ's greatest strengths is his reliability. That sense of dependability brings positivity and encouragement to the team because you always know there is someone you can count on. His foresight, especially in the areas where he excels, gives everyone confidence that challenges can be anticipated and handled well. It is reassuring to work alongside someone who consistently thinks ahead and helps keep the team on track. \n\nOn a personal note, si CJ ay isa sa mga quietest people in the office, but when he smiles or laughs, it is genuinely contagious. His calm presence, paired with those moments of warmth and humor, has a way of lifting the mood and making the workplace feel lighter. \n\nCongratulations on your work anniversary, CJ! Thank you for your awesomesauceness, reliability, and the quiet positivity you bring to the team every day. Wishing you continued success, good health, and many more years of meaningful contributions and shared milestones with the Academy. Happy work anniversary, our ONE TRUE ARV!", 
      avatar: MINA 
    },
    { 
      from: "Perrine", 
      text: "Unstoppable by Sia. Sir CJ has that powerful, reliable energy where no problem is too complex for him to solve. Just like the song, his drive is continuous—whether it’s supporting colleagues daily or single-handedly building an entire agency-wide system, he delivers excellence effortlessly and never stops pushing for innovation.", 
      avatar: PERRINE 
    },
    { 
      from: "Eddniel", 
      text: "📎 The paperclip. Because he keeps ideas, people, and technology connected. Innovative and resourceful, Sir CJ always finds smart solutions to challenges and makes even the most technical tasks look effortless. Husay palagi! Happy 1st Work Anniversary, Sir CJ! Thank you for your reliability, kindness, and steady support to the team, Sir. Noong first day ko, ikaw ang unang nagpahiram sa akin ng AD para ma-open PC for work HAHAHAH! I will always remember your kindness and salute all the innovations that you do for our team. Deserve talaga ang ARV!  May this year bring you greater opportunities, meaningful achievements, and even more reasons to smile. Here's to many more years of growth, success, and making a positive impact. Padayon! 🌻💚", 
      avatar: EDD 
    },
    { 
      from: "Jena", 
      text: "Di ko pa siya nakawork as in naging magkasama kami sa team pero madami na ako mga requests sa kanya. If natutunan I think hindi yung mga work-related kasi CJ yun eh?? di ko kaya yung mga ginagawa nya kahit i-explain nya pa sakin??? hahaha Pero ang masasabi ko lang is hanga ako sa galing nya and wala pa siya 1 year pero dami nya na conributions hindi lang sa division pero sa Academy. Lodi ko talaga siya!! Happy Work Anniv, CJ!! pa-chowking ka naman dyan!! ", 
      avatar: JENA 
    },
    { 
      from: "Jops", 
      text: "Batman, as Bruce Wayne syempre sa apilyedo palang yayamanin na samahan pa ng pagiging ARV, baka CJ yarn!", 
      avatar: JOPS 
    },
    { 
      from: "Kelly", 
      text: "Happy 1st Work Anniversary Sir CJ!! My advice po in life is to always trust in God's plan because He knows what is the best for you :)) ", 
      avatar: KELLY 
    },
    { 
      from: "Pao", 
      text: "WALA INUUTUSAN AKO NIYAN PINAPAGALITAN PA KO PAGKA MALI GRABE YANG TAONG YAN ARV KASI AAAAAAH CJ's passion for coding serves as a remarkable example of how dedication and continuous learning can lead to personal and professional growth. His ability to approach complex programming challenges with analytical thinking, creativity, and perseverance demonstrates the importance of maintaining a solution-oriented mindset. Observing his commitment to improving his technical skills has inspired me to embrace lifelong learning and develop greater confidence in exploring unfamiliar fields. His journey highlights that success is achieved not only through talent but also through consistency, resilience, and the willingness to adapt to new technologies and opportunities. Overall, CJ's coding journey has motivated me to pursue self-improvement with the same level of determination and enthusiasm.", 
      avatar: PAO 
    },
    { 
      from: "Jes", 
      text: "Always going above and beyond, always taking the extra mile, always willing to help and always doing things exemplarily!!! kaya nagsshine sya at nakkita nang lahat at kaya nag ARV! Si CJ! Maraming salamat sayo, super blessed kami na nandito ka sa team - grabe ang contribution mo not just sa work pero pati sa personality ng team! Salamat CJ for always being one chat away then for always delivering beyond expectation! Thank you AyeRV! ", 
      avatar: JES 
    },
    { 
      from: "DC Joesa", 
      text: "Hello Sir ARV CJ, what a wonderful year with you around! You've done so much for the Division, for the Bureau and for the whole DSWD. In a short span of time, you shared your talents. Ang damiiii! Salamat for your generosity, for your kindness, for all the 'ready to assist anyone' who needs you. Thank you and may you continue to work with joy in DA-CBD-PLDS. Continue learning, loving and growing! May Godbless you always! ", 
      avatar: DC 
    },
    { 
      from: "Noreen", 
      text: "Siguro, ‘yung naging ARV na lang sha kasi alam kong memorable din ‘yun for him. Sobrang layo na ng narating mo, Sir CJ! and super duper proud kaming lahat sa’yoooo! Isang karangalan sa amin na makatrabaho ang isang ARV! Lodi ka naming lahat pagdating sa mga IT-related thingz eh hahaha thank you rin kasi super laking help mo sa buong section and sa WBT! Actually, nag-iisip kami kung paano pag work anniv mo, sino gagawa ng website, syempre… ikaw ulit? charot HAHAHA pero kidding aside, looking forward akong makita ka pang mag grow personally and professionally. I hope that you continue to be happy and fulfilled sa lahat ng mga ginagawa mooo. Happy first work anniversary, Sir CJ!", 
      avatar: NOREEN 
    },
    { 
      from: "Merl", 
      text: "Sir CJ makes even the busiest and most stressful workdays feel lighter through his calm and reassuring presence. Hindi man siya maingay, pero kapag may hiningi ka sa kanya na data or in-assign na task he delivers- yung simpleng “Okay na ito, Ms.” at “Kaya ito, Ms.” niya somehow make things feel more manageable. His willingness to respond, support, and help—even when he was not feeling well—shows how dedicated and responsible he is. Simple lang umatake si CJ, pero booooommm—ramdam mo talaga ang support! XD My prayer for you is that you continue to find joy and fulfillment in all your endeavors in life. May blessings always overflow for you and your whole family, and may you all remain healthy—because health is the greatest wealth! XD Happy 1st Work Anniversary, CJ!!! 🎉", 
      avatar: MERL 
    },
    { 
      from: "Angel", 
      text: "Kapag sa mga tv shows, ang role ng IT ay parang mysterious, loner, introvert ang atake pero ibang iba ang CJ na ito. Si Sir CJ namin ay tunay na mahusay sa kanyang ginagawa, plus sha ay nakakatawa and always willing to help. Whenever na need namin ng anything online and computer na assistance, u are always willing to help. Thank u CJ sa pagshare mo sa amin ng iyong kahusayan. congrats sa work anniv mo. kabog ka arv wow na wow!", 
      avatar: ANGEL 
    },
    { 
      from: "Kent", 
      text: "Para kay Sir CJ bibigyan ko siya ng The Code Wizard Award, dahil siya ang go-to developer kapag may kailangang i-build o i-automate. Sobrang innovative at tech-savvy niya, at parang may magic touch ka siya sa codes. Salamat sa paggawa ng solutions na nagpapadali ng buhay namin. Sana laging bug-free ang code at smooth ang deployments! at sana di mawala ang passion mo sa pag develop mo kasi that's really a million dollar skill!!! 🚀 Happy Anniversary Sir CJ!", 
      avatar: KENT 
    },
    { 
      from: "Cla", 
      text: "Yes, I agree na si Sir CJ ay brilliant at approchable at the same time. Brilliant dahil sya ay hinirang na ARV so I think this answer his brilliance. In terms of being approachable, madali syang kausap pag tinatanong about IT stuff na minsan di ko gets. Haha. Thank you for sharing your knowledge and skills sir CJ. Sobrang laking bagay. Happy work anniv to you!", 
      avatar: CLA 
    },
    { 
      from: "Lyka", 
      text: "Happy Work Anniversaryyyyyyyyyyy ARV Ceeeejay!!!!!! Mabuhay ka hangga't gusto mo. Salamat sa bohay mo at kahusayan mo. Excited ako na makawork ka soon sa mga trainingsssss. ", 
      avatar: LYKA 
    },
    { 
      from: "Meann", 
      text: "The salute emoji that he always use; if it's that I know it's him", 
      avatar: MEANN 
    },
    { 
      from: "Kleng", 
      text: "Huy ang hirap. Sa work kasi nacocomplimment naman ang galing niya. Kaya nga sya ARV Junjun rooyytt. Hmmm. Ang bilis bilis mag work ni CJ kapag available siya. Always ready to help, ang laking tulong na kapag may mga error sa E-LMS ay nato-troubleshoot agad. Salamat sa iyo Jeyyy. Happy work anniv sa imong tanan! XD 恭喜恭喜！祝你成功", 
      avatar: JOY 
    },
    { 
      from: "Thea", 
      text: "Si CJ, tahimik lang yan palagi pero kapag kinausap mo tungkol sa mga gawain nya, napakatalinong bata. Maaasahan din sya sa lahat ng bagay, kahit nga walang kinalaman sa IT, pag pinakisuyuan mo sya na tumulong, gagawin nya at gagawin nya nang maayos. Napaka humble din in general-- pero syempre kapag kabardagulan nya mga katropa nya, hindi rin naman sya papahuli sa pambabarda. hahaha. Salamat sa pagsshare ng talino at kabaitan mo, CJ. Happy ako kasi nakaadjust ka na sa mga tao at sa trabaho.Sa pagttiyaga sa mga ugali namin (hahaha alam kong ibang tao ang tinatiyaga mo ang ugali at hindi kame pero kunwari nalang humble kame hahaha). Nawa hindi ka magsawa sa environment natin! Happy 1st work anniv, CJ!", 
      avatar: THEA 
    },
    { 
      from: "Nancy", 
      text: "Wise, Humble, Encouraging", 
      avatar: NANCY 
    },
  ]
};

const AKI_CELEBRANT_DATA = {
  name: "Ma. Erica Ruby F. Fernandez", 
  nickname: "Ruby",
  gender: "Female", 
  anniversaryNumber: "1st",
  avatar: ProfileAki, 
  
  theme: {
    // Pure vibrant Red to Rose gradient (No black)
    gradient: "from-red-600 via-rose-600 to-red-700",
    accent: "text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    btn: "from-rose-500 to-red-600 text-white font-bold shadow-lg hover:from-rose-600 hover:to-red-700"
  },

  shortPraise: "Today, we celebrate our two amazing angels—our Art Angel, Ruby, and our Angel in the Red Vest, CJ! Happy 1st Work Anniversary! May this be the first of many more meaningful years with the DSWD Academy. Wishing you continued success, fulfillment, and countless more milestones ahead!",

  longDedication: "🎨 Happy 1st Work Anniversary, Ms. Ruby! To our Art Angel Ruby—your creativity, wit, humor, and unwavering dependability have been such a gift to our section. From your beautiful artworks to your clever ideas (and those unforgettable GIFs that never fail to make us laugh), you bring color and joy to everything you do. Your incredible talents continue to amaze us—you truly seem to have a gift for everything you set your mind to. Beyond your skills, your willingness to lend a helping hand and your positive spirit make you an invaluable member of our team. Thank you for making our workplace brighter, more creative, and more enjoyable. We are truly blessed to have you with us. Here's to many more years of creating, inspiring, and making people smile! 💙",

  carouselImagesRow1: [
    A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12,
  ],
  carouselImagesRow2: [
    A13, A14, A15, A16, A17, A18, A19, A20, A21, A22, A23, A24,
  ],

  messages: [
    { 
      from: "Joy", 
      text: "Hello, Sir CJ! It was nice meeting you po. I hope we get along well, and I’m looking forward to learning a lot from you throughout my journey here at the Academy. Wishing you all the best in life, and I hope you continue to enjoy what you do. May God bless you always, as well as your family. God bless po!", 
      avatar: JOY 
    },
    { 
      from: "Nic", 
      text: "Wala akong memorable or inspiring moment na nakita kay Ruby, pero I know that she is the Grab Superintendent of the DSWD Academy. Happy Work Anniversary , Art Angel, matutong gumalang sa senior mo. Thanks.", 
      avatar: NIC 
    },
    { 
      from: "LJ", 
      text: "Ruby is another word for Grab. hahahah! Joking aside, GRAB-e din kasi ang talent ng batang ito, di ko kinakaya hahaha dahil sobrang creative. I hope you continue to shine, Ms Ruby! :) :) ", 
      avatar: LJ 
    },
    { 
      from: "Eddniel", 
      text: "Because she brings together creativity, warmth, wisdom, and quiet strength in everything she does. Like the color purple, she has a way of making every space brighter and every person around her feel valued. 💜 Happy 1st Work Anniversary, Ms. Ruby!  Thank you for simply being you and for all the dedication, kindness, and effort you pour into your work and the people around you. I'm truly grateful to have you not only as a workmate but also as a friend. You're one of the first people who welcomed and approached me, and I'll always appreciate those thoughtful gestures. Your creativity adds so much color to our workplace and to the lives of the people you meet. Keep dreaming, creating, and inspiring—you're capable of so much more, and I'll always be proud of you. Here's to many more years of making a difference! Salamat sa buhay mo, teh! PintaEdd always got you! Padayon! 🌻", 
      avatar: EDD 
    },
    { 
      from: "Perrine", 
      text: "The Creative Synergy & Tech Vanguard Award Ms. Ruby is a multi-talented powerhouse—a skilled dancer, a tech-savvy problem solver, and an amazing colleague! Her creative energy truly shone when she collaborated with Sir CJ to design and build an outstanding division-wide system. She effortlessly blends artistic flair with technical expertise to elevate our entire team's workflow.", 
      avatar: PERRINE 
    },
    { 
      from: "Mina", 
      text: "One of the things Ruby has taught me, both directly and indirectly, is that you don't always have to be the loudest person in the room to make a meaningful impact. Si Ruby ay isang silent worker, napaka humble, composed, at focused pero she consistently delivers quality work in everything entrusted to her. Her dedication and reliability speak louder than words. Working with Ruby has shown me the value of humility, professionalism, and letting your work reflect your commitment. She reminds me that excellence is built through consistency and that true competence doesn't need constant recognition to be appreciated. Happy work anniversary, our Art Angel Ruby! Thank you for being a wonderful example of quiet excellence and unwavering dedication. Your hard work, humility, and positive influence do not go unnoticed. Wishing you continued success, good health, and many more fulfilling years ahead. Congratulations on your work anniversary! YEWWWW!", 
      avatar: MINA 
    },
    { 
      from: "Jops", 
      text: "Her positive energy and approachable attitude. She brings a calm, supportive mindset to every task, making the entire team’s workflow smoother and more enjoyable:-D", 
      avatar: JOPS 
    },
    { 
      from: "Jena", 
      text: "siguro kung paano gumastos hahaha eme since budol/grab kween talaga siya. Also, feeling ko pati yung gym life kasi papaturo ako sa kanya?? hahhaha. Happy Work Anniv, sis Ruby!! need natin to icelebrate kaya mag send ka na ng grab link. yay! ", 
      avatar: JENA 
    },
    { 
      from: "Kelly", 
      text: "Happy 1st Work Anniversary Ms. Ruby!! Three words that suits you are pretty, genuine and assiduous :)) I know I don't really know you well as a person but when I first saw you these are the words that came into my mind :))", 
      avatar: KELLY 
    },
    { 
      from: "Noreen", 
      text: "kahit saan siguro maliban sa NV?? eme HAHAHAHA Since nakalagay naman na anywhere in the world, siguro sa Singapore na lang hahaha para after training, diretso kami sa Universal Studios given na mahilig din siya sa harry potter hahahaha Happy first work anniversaryyyy, Ms. Rubygurl!!! More orders to come?! hahahaha pero kidding aside, looking forward ako na makasama ulit ikaw sa mga trainings and activities kasi alam ko na marami pa tayong matututunan sa isa't isa, saka super lodi rin kita pagdating sa designing and art talaga! To more travel and gala rin pala! hmmm HAHAHAHAHA save the date? chariz HAHAHAHAHA May God bless u alwaysssss! <3", 
      avatar: NOREEN 
    },
    { 
      from: "Pao", 
      text: "Ewan. Smile? Geng geng hip hop ganern", 
      avatar: PAO 
    },
    { 
      from: "Jes", 
      text: "There's something about her that makes you want to be her friend! She's genuine, thoughtful, funny, artsy, meticulous, adorably introverted pero super kulit, smart, dancer, and the list goes on Kaya ang dami daming nagmamahal sa kanya sa work!!! Ang superpower nya - she can make simple things turn into something flashy, classy, artsy! Super galing ng pitik ng kamay sa arts haha plus super fast learner sya! Ruby, Ruby, Ruby! maraming salamt sa buhay mo, sa lahat  ng ginagawa mo for the team! Please know na super appreciated ka namin, hndi lang dahil sa dami ng contribution mo,  but by just being you! Ive seen you grow and how you left ur comfort zone, nasa growth zone ka na!! You have sooooo much potential! Keep on shining, Rubyghorl!", 
      avatar: JES 
    },
    { 
      from: "DC Joesa", 
      text: "Hello hello Ms. Ruby!! Wowieee, ikaw na talaga! Super bigay todo ang talents and commitment sa work whatever is given to you. Thank you for the gift of you sa CBD-PLDS and to the whole Academy! You've work and contributed a lot in the Section/Division and I will not enumerate it here. I just want to congratulate you. For a year, you've performed that far and that's why you deserved the 2 promotions  agad. That's because you've shown who you are and shared generously what you can give to everyone. Thank you and continue achieving your dreams. Proud me here and I'll keep praying for you. Happy Work Anniversary and Godbless!", 
      avatar: DC 
    },
    { 
      from: "Jo", 
      text: "🎨 Artist Palette – Dedicated specifically to Ms. Ruby’s love for art, creativity, and the rich palette of inspiration she brings to the office every day.", 
      avatar: JO 
    },
    { 
      from: "Thea", 
      text: "If there's one thing I hope Ms. Ruby never changes about herself, yun ay ang kanyang pagiging mysterious, quiet yet full of surprises na demeanor. Gusto ko yung lagi nya kaming sinusurprise sa mga potensyal nya-- tahimik pero creative. Tahimik pero organized sa data. Tahimik pero maangas sa pagdesign ng website. Tahimik pero magaling sumayaw. Tahimik pero maasahan. Tahimik pero magaling mag presen. Tahimik pero matalino. Tahimik pero kumpleto at maayos gumawa. Hindi sya nauubusan ng mga paraan para hangaan namin sya. Salamat sa humility mo, Ruby! Alam ko ikaw ang go-to person ng mga kasamahan natin hindi lang kapag need nila ng iyong creativity kundi pati kapag kailangan nila ng warm body na maaasahan nila sa mga oras ng pangangailangan. Salamat at kahit extra work ito for you, ineensure mong hindi naiiwanan ang mga core functions mo. Mabuhay ang SWEAP nalang siguro ang closing statement ko??? HAHAHAHAHA", 
      avatar: THEA 
    },
    { 
      from: "Merl", 
      text: "Ms. Ruby is naturally brilliant, but what makes her approachable is her charming and relatable personality. She may not look approachable at first glance, but once you get to know her, her booming energy and unique “gangsterism” make conversations with her fun and easy. She carries her brilliance confidently without making others feel intimidated—and that is what makes her both impressive and approachable. Indeed brilliant, relatable, and effortlessly charming. Happy 1st Work Anniversary, Rubyyy!", 
      avatar: MERL 
    },
    { 
      from: "Angel", 
      text: "Ms. Ruby is a ray of sunshine sa CBD. Always nakasmile and willing to help. All may remember her as the Grab Unli girl but I'll remember her as the cutesy fun little girl. May mga antics sha na super havey lalo ang bangayan nila sa RuToNic. Thank u sa paghelp sa bawat isa sa amin. I am looking forward sa pagkakasama natins a training. Mwuah sister and congrats sa work anniv mo!", 
      avatar: ANGEL 
    },
    { 
      from: "Kent", 
      text: "Ms Ruby? she reminds me of Ruby Moon sa Cardcaptor talaga, For me isa siyang walking energy drink sa office. Ang lakas ng good vibes niya, gaan ng aura, energetic at parang may unlimited battery. Super approachable din, hindi ka mahihiyang lumapit kasi feeling mo matagal na kayong magkakilala kahit kakastart niyo pa lang mag-usap. Isa pa, sobrang dali niyang pakisamahan I experience this nung nag shoshoot kami for GA. Walang ka-drama-drama, chill lang, kaya ang gaan ng atmosphere kapag kasama siya. Bonus na lang na nakakahawa yung energy niya, minsan mapapasmile ka na lang kahit pagod ka na as in kasi malakas din boses nya lol Sana hindi ma-lowbat ang pagiging energetic mo, Ms. Ruby! Happy Anniversaryyyy", 
      avatar: KENT 
    },
    { 
      from: "Cla", 
      text: "Si Ms. Ruby madali ka work kaya kung busy sa work, gumagaan. Efficient na teammate din sya. As an individual, masaya rin sya ka-kwentuhan at kasama. Happy work anniv sa iyo! ", 
      avatar: CLA 
    },
    { 
      from: "Nancy", 
      text: "Never underestimate the impact of the small acts of kindness and encouragement you extend to others—they often leave the deepest and most lasting impression. Continue to invest in your own growth, embrace new opportunities to learn, and remember to care for yourself as wholeheartedly as you care for those around you. Happy anniversary..", 
      avatar: NANCY 
    },
    { 
      from: "CJ", 
      text: "我和 Aki 从刚进公司起就在一起工作了。我真的很喜欢也很佩服她的艺术才能，一直希望能把她的数字设计 100% 完美地还原到网站上。Aki，工作一周年快乐！太厉害了你，先是工作周年，接着又是生日，今年真的属于你！时间过得太快了，谁能想到你都干满一年了，结果接下来就要去跳槽申请新工作了，真有你的啊！工作一周年快乐！", 
      avatar: CJ 
    },
    { 
      from: "Lyka", 
      text: "Happy na! Work Anniversary mo pa!!!!!! Happy na Work Anniversary mo pa!!!! Happy Work Anniversary Art Angeeeeeel Ruby. Sa napaka creative at napakahusay na ferson. Di pa tayo ganun nagkakasama sa training pero excited ako na makasama ka sa mga trainings soon ng mabiyayaan mo ako ng creativeness mo ate koooo. Mabuhay ka at salamat sa bohaaaay mo. ", 
      avatar: LYKA 
    },
    { 
      from: "Kleng", 
      text: "Siguro ano sha,,,, hahahaha, di ako maka imbento ng titile pero si Ruby ang naiisip ko rito sa book na 'The Renaissance Soul' self-help book ito para sa mga multipotentialite kagaya ni Ruby. Ang laman ng book ay mga strategies papaanong ma-enrich o ma-keep ang mga interests/passion sabay sabay ganern. Nakakatuwa si Ruby, apaka sipag at apaka creative sa work. More work to come??? Chariisss hahhaahah. Happy Work Anniv! Keep it up Rubyroseeee <3", 
      avatar: JOY 
    },
    { 
      from: "Meann", 
      text: "not just one time but all those times that she was in-charge of greetings for our co-workers; recently, when she messaged me to inform me of my bday buddy, she even shared with me a list of apps that are easy to use :)", 
      avatar: MEANN 
    },

  ]
};

export default function WorkAnnivCjAki({ initialSelected }) {
  const celebrants = [CJ_CELEBRANT_DATA, AKI_CELEBRANT_DATA];
  const initialIndex = initialSelected === "aki" ? 1 : 0;

  return (
    <WorkAnniversary 
      celebrants={celebrants} 
      initialIndex={initialIndex}
    />
  );
}