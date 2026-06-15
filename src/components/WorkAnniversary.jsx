import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa6";
import celebMusic from "../assets/Celeb.mp3";

export default function WorkAnniversary({ celebrant }) {
  const [stage, setStage] = useState(1);
  const [activeMessages, setActiveMessages] = useState([]);
  
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  const {
    name = "Employee",
    nickname = "Team Member",
    anniversaryNumber = "1st",
    avatar = "",
    theme = { 
      gradient: "from-slate-900 to-slate-950", 
      accent: "text-white",
      btn: "bg-white text-black hover:bg-gray-100"
    },
    shortPraise = "A celebration of dedication, passion, and excellence at work.",
    longDedication = "",
    carouselImagesRow1 = [],
    carouselImagesRow2 = [],
    messages = []
  } = celebrant || {};

  const partyColors = useMemo(() => [
    "#FF0055", "#00FFCC", "#9900FF", "#FFCC00", 
    "#FF5E00", "#FF00FF", "#00FF66", "#0099FF"
  ], []);

  const decorativeElements = useMemo(() => {
    const confettis = Array.from({ length: 20 }).map((_, i) => ({
      id: `c-${i}`,
      left: `${(i * 5) + Math.random() * 2}%`, 
      size: Math.random() * 5 + 6,
      color: partyColors[i % partyColors.length],
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 3,
    }));

    const balloons = Array.from({ length: 6 }).map((_, i) => ({
      id: `b-${i}`,
      left: `${(i * 16) + 5}%`,
      size: Math.random() * 15 + 45,
      color: partyColors[Math.floor(Math.random() * partyColors.length)],
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 9,
    }));

    return { confettis, balloons };
  }, [partyColors]);

  const handleGoToStage2 = useCallback(() => {
    setStage(2);
    if (!audioRef.current) {
      audioRef.current = new Audio(celebMusic);
      audioRef.current.loop = true;
    }
    audioRef.current.play().catch((err) => {
      console.warn("Audio play blocked:", err);
    });
  }, []);

  const handleGoToStage1 = useCallback(() => {
    setStage(1);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // NON-OVERLAPPING FLOATING ENGINE (SCATTERED EDGE-TO-EDGE)
  useEffect(() => {
    if (stage !== 2 || messages.length === 0) return;
    
    let index = 0;

    const triggerNextSMS = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = 550; 

      const cardWidth = window.innerWidth < 640 ? 290 : 360; 
      const cardHeight = window.innerWidth < 640 ? 200 : 170;

      const maxX = Math.max(24, containerWidth - cardWidth - 24);
      const maxY = Math.max(10, containerHeight - cardHeight - 10);

      let finalX = 24;
      let finalY = 10;
      let collisionDetected = true;
      let attempts = 0;

      setActiveMessages((currentActive) => {
        while (collisionDetected && attempts < 60) {
          finalX = Math.floor(Math.random() * (maxX - 24 + 1)) + 24;
          finalY = Math.floor(Math.random() * maxY);
          collisionDetected = false;
          attempts++;

          for (let item of currentActive) {
            const isOverlapping = 
              finalX < item.rawX + cardWidth + 30 && 
              finalX + cardWidth + 30 > item.rawX && 
              finalY < item.rawY + cardHeight + 30 && 
              finalY + cardHeight + 30 > item.rawY;

            if (isOverlapping) {
              collisionDetected = true;
              break; 
            }
          }
        }

        const currentMsg = messages[index];
        const uniqueId = `${currentMsg.from}-${Date.now()}`;

        const newSms = { 
          ...currentMsg, 
          id: uniqueId, 
          rawX: finalX,
          rawY: finalY
        };

        const updated = [...currentActive, newSms];
        if (updated.length > 4) {
          updated.shift();
        }
        return updated;
      });

      index = (index + 1) % messages.length;
    };

    triggerNextSMS();
    const interval = setInterval(triggerNextSMS, 3200);
    
    return () => {
      clearInterval(interval);
      setActiveMessages([]);
    };
  }, [stage, messages]);

  return (
    <div className={`w-full min-h-screen relative font-sans bg-gradient-to-tr ${theme.gradient || 'from-slate-900 to-slate-950'}`}>
      
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {stage === 1 && (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-40">
          {decorativeElements.balloons.map((balloon) => (
            <motion.div
              key={balloon.id}
              initial={{ y: "115vh", opacity: 0 }}
              animate={{ y: "-25vh", opacity: [0, 0.7, 0.7, 0] }}
              transition={{ duration: balloon.duration, delay: balloon.delay, repeat: Infinity, ease: "linear" }}
              className="absolute flex flex-col items-center select-none will-change-transform"
              style={{ left: balloon.left }}
            >
              <div 
                className="rounded-full relative shadow-xl"
                style={{ width: balloon.size, height: balloon.size * 1.25, backgroundColor: balloon.color, opacity: 0.65 }}
              >
                <div className="absolute top-[15%] left-[15%] w-[22%] h-[22%] bg-white/40 rounded-full blur-[0.5px]" />
              </div>
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[9px] -mt-[1px]" style={{ borderBottomColor: balloon.color }} />
            </motion.div>
          ))}

          {decorativeElements.confettis.map((confetti) => (
            <motion.div
              key={confetti.id}
              initial={{ y: "-10vh", rotate: 0, opacity: 1 }}
              animate={{ y: "110vh", rotate: 360, x: [0, Math.random() * 40 - 20, 0] }}
              transition={{ duration: confetti.duration, delay: confetti.delay, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-sm shadow-md will-change-transform"
              style={{ left: confetti.left, width: confetti.size, height: confetti.size * 1.4, backgroundColor: confetti.color }}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {stage === 1 ? (
          <motion.section 
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center text-center p-6 z-10 overflow-hidden touch-none"
          >
            <div className="w-full max-w-4xl px-4 flex flex-col items-center">
              <h1 className="text-[1.5rem] sm:text-[2.2rem] md:text-[2.8rem] font-black text-white tracking-tight leading-none uppercase w-full overflow-hidden text-ellipsis drop-shadow-sm">
                HAPPY WORK ANNIVERSARY,
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-[3.2rem] font-black text-white tracking-tight leading-none uppercase mt-2 drop-shadow-md">
                {name}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200/90 mt-4 mb-8 font-normal tracking-wide max-w-2xl leading-relaxed">
                {shortPraise}
              </p>
              <button 
                onClick={handleGoToStage2}
                className={`w-full sm:w-[320px] py-3.5 text-white font-black rounded-full shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex justify-center items-center gap-3 text-sm md:text-base tracking-widest uppercase bg-gradient-to-r ${theme.btn || 'bg-white text-black'}`}
              >
                Celebrate with {nickname} <FaChevronRight className="text-xs" />
              </button>
            </div>
          </motion.section>
        ) : (
          <motion.section 
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full min-h-screen flex flex-col items-center pt-24 pb-12 z-10 overflow-y-auto overflow-x-hidden scrollbar-hidden"
          >
            <div className="fixed top-6 left-6 z-50">
              <button 
                onClick={handleGoToStage1} 
                className="group flex items-center gap-2.5 bg-white text-slate-950 px-5 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
              >
                <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Home</span>
              </button>
            </div>

            {/* Avatar Profile */}
            {avatar && (
              <div className="relative mb-8 group">
                <div className="absolute -inset-6 bg-white/5 rounded-full blur-3xl opacity-75 pointer-events-none" />
                <img src={avatar} className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-[10px] border-white/10 shadow-2xl" alt={name} />
              </div>
            )}

            {/* Profile Banner */}
            <div className="text-center px-6 max-w-5xl mb-10">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">{name}</h2>
              <p className="text-white text-sm md:text-base font-semibold mt-3 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full inline-block border border-white/20">
                Celebrating {anniversaryNumber} years of excellence
              </p>
            </div>

            {/* Long Dedication Card */}
            {longDedication && (
              <div className="bg-black/20 backdrop-blur-xl mx-6 p-8 md:p-12 rounded-[2rem] max-w-5xl text-center mb-16 shadow-2xl border border-white/10 relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">Happy Work Anniversary, {nickname}!</h3>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal">{longDedication}</p>
              </div>
            )}

            {/* Image Marquees */}
            {(carouselImagesRow1.length > 0 || carouselImagesRow2.length > 0) && (
              <div className="w-full mb-14 origin-center -rotate-1 scale-101 select-none pointer-events-none relative z-10 overflow-x-clip">
                {carouselImagesRow1.length > 0 && (
                  <div className="animate-marquee-big-left gap-6 py-2 bg-white/5 backdrop-blur-sm border-y border-white/5 flex">
                    {[...carouselImagesRow1, ...carouselImagesRow1].map((img, i) => (
                      <img key={i} src={img} alt="Gallery item" className="h-44 w-72 md:h-52 md:w-[340px] object-cover rounded-2xl border-2 border-white/10 shadow-xl flex-shrink-0" />
                    ))}
                  </div>
                )}
                {carouselImagesRow2.length > 0 && (
                  <div className="animate-marquee-big-right gap-6 py-2 bg-white/5 backdrop-blur-sm border-b border-white/5 mt-4 flex">
                    {[...carouselImagesRow2, ...carouselImagesRow2].map((img, i) => (
                      <img key={i} src={img} alt="Gallery item" className="h-44 w-72 md:h-52 md:w-[340px] object-cover rounded-2xl border-2 border-white/10 shadow-xl flex-shrink-0" />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ❤️ AUTO-EXPANDING COLLISION-FREE FLOATING MESSAGES ARENA */}
            <div className="w-full pt-12 pb-20 bg-white/5 backdrop-blur-xl border-t border-white/10 flex flex-col items-center z-10 mt-auto overflow-visible relative">
              <div className="text-center max-w-5xl px-6 mb-8">
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase">
                  HAPPY WORK ANNIVERSARY!
                </h2>
              </div>

              {/* The full viewport width container allows edge-to-edge scattering */}
              <div 
                ref={containerRef}
                className="relative w-screen min-h-[550px] mx-auto overflow-visible"
              >
                <AnimatePresence>
                  {activeMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ scale: 0.6, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.8, opacity: 0, y: -30 }}
                      transition={{ type: "spring", stiffness: 140, damping: 18 }}
                      className="absolute z-40 drop-shadow-2xl will-change-transform"
                      style={{ left: `${msg.rawX}px`, top: `${msg.rawY}px` }}
                    >
                      <div className="bg-white pt-5 px-5 pb-7 rounded-3xl rounded-bl-none shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex items-start gap-4 w-[290px] sm:w-[360px] border border-gray-100 h-auto">
                        <img 
                          src={msg.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"} 
                          alt={msg.from}
                          className="w-11 h-11 rounded-full object-cover shadow-inner border-2 border-slate-100 flex-shrink-0 mt-0.5"
                        />
                        <div className="flex flex-col min-w-0 flex-1 justify-start h-auto">
                          <span className="text-[11px] font-black uppercase tracking-wider mb-1 truncate text-slate-500">
                            {msg.from}
                          </span>
                          <p className="text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed break-words whitespace-normal pr-1 h-auto">
                            "{msg.text}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}