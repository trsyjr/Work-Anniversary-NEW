import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaXmark } from "react-icons/fa6";

export default function Catalog({ employees, currentSelected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      {/* Catalog Dropup Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-72 max-h-[380px] overflow-y-auto overflow-x-hidden scrollbar-none"
          >
            <div className="text-xs font-black text-white/50 tracking-widest uppercase mb-3 px-1">
              Team Anniversaries
            </div>
            
            <div className="flex flex-col gap-2">
              {employees.map((emp) => {
                const isSelected = currentSelected === emp.id;
                return (
                  <button
                    key={emp.id}
                    onClick={() => {
                      onSelect(emp.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 border group ${
                      isSelected
                        ? "bg-white text-slate-950 border-white font-bold"
                        : "bg-white/5 hover:bg-white/10 text-white border-transparent"
                    }`}
                  >
                    <img
                      src={emp.avatar}
                      alt={emp.nickname}
                      className={`w-10 h-10 rounded-full object-cover border ${
                        isSelected ? "border-slate-950/20" : "border-white/10"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-black truncate leading-tight">
                        {emp.nickname}
                      </div>
                      <div className={`text-[11px] font-medium tracking-wide ${
                        isSelected ? "text-slate-600" : "text-white/60"
                      }`}>
                        {emp.anniversaryNumber} Year Milestone
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer transition-all duration-300 border border-white/20 bg-gradient-to-tr ${
          isOpen ? "from-rose-600 to-pink-500 rotate-90" : "from-emerald-600 to-teal-500"
        }`}
      >
        {isOpen ? <FaXmark className="text-xl" /> : <FaUsers className="text-xl" />}
      </motion.button>
    </div>
  );
}