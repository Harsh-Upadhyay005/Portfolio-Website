"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Signature() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (!supabase) {
      alert("Guestbook is temporarily unavailable. Supabase environment variables are not configured.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: name.trim(), message: message.trim() }]);
        
      if (error) {
        console.error('Error inserting data:', error);
        alert(`Failed to send message: ${error.message}. Please check your browser console for more details.`);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="guestbook" className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-black/5 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4 ring-1 ring-orange-500/20">
            <MessageSquare size={16} />
            <span>Digital Guestbook</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
            Leave Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Thoughts</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Were you here? Drop a comment, share your feedback, or just say hi before you go!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg"
        >
          <div className="bg-white/10 dark:bg-zinc-900/30 rounded-3xl border border-white/20 dark:border-white/10 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl shadow-orange-500/5 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 backdrop-blur-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Loved the portfolio! The 3D carousel is really cool..."
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none backdrop-blur-md"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
                    <Send size={18} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-orange-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
                    Thanks for stopping by and leaving your thoughts. I appreciate the feedback!
                  </p>
                  <button 
                    onClick={handleReset}
                    className="px-6 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-full transition-colors font-medium border border-zinc-300 dark:border-zinc-700"
                  >
                    Write another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
