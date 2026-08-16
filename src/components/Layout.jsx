import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);

  // Handle ambient soundscape toggle with Web Audio API fallback for 100% reliability
  useEffect(() => {
    if (soundEnabled) {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            startWebAudioAmbient();
          });
        }
      } else {
        startWebAudioAmbient();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopWebAudioAmbient();
    }
  }, [soundEnabled]);

  const startWebAudioAmbient = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.15, ctx.currentTime);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noiseNodeRef.current = { noise, gain };
    } catch (e) {
      console.log('Web Audio API error', e);
    }
  };

  const stopWebAudioAmbient = () => {
    if (noiseNodeRef.current) {
      try {
        noiseNodeRef.current.noise.stop();
        noiseNodeRef.current.noise.disconnect();
      } catch (e) {}
      noiseNodeRef.current = null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4F0E8] text-[#1F1813] font-sans selection:bg-[#A67844] selection:text-white flex flex-col justify-between">
      {/* HIDDEN LOFI COFFEE SOUND GENERATOR */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
      />

      <ScrollToTop />
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
