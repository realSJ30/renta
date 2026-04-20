"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import useSearchModal from "../hooks/useSearchModal";
import useRentModal from "../hooks/useRentModal";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";

interface HeroProps {
  currentUser?: SafeUser | null;
}

const SLIDES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

const AUTOPLAY_MS = 6000;

const Hero: React.FC<HeroProps> = ({ currentUser }) => {
  const searchModal = useSearchModal();
  const rentModal = useRentModal();
  const loginModal = useLoginModal();
  const [active, setActive] = useState(0);

  const onRent = () => {
    if (!currentUser) return loginModal.onOpen();
    rentModal.onOpen();
  };

  const goTo = useCallback((i: number) => {
    setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 isolate shadow-sm">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
      />

      <div className="relative px-6 sm:px-10 md:px-14 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-semibold text-white backdrop-blur-md">
            <HiSparkles size={14} />
            Trusted by thousands of travelers
          </div>

          <h1
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}
          >
            Find a place that feels like{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
              home anywhere.
            </span>
          </h1>

          <p
            className="mt-5 text-base md:text-lg text-white/90 max-w-2xl"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            Book stays from verified hosts across 190+ countries. Explore
            destinations, save your favorites, and travel with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={searchModal.onOpen}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition"
            >
              <BiSearch size={18} />
              Start exploring
            </button>
            <button
              onClick={onRent}
              className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl backdrop-blur-sm transition shadow-lg shadow-black/10"
            >
              Become a host
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat value="12k+" label="Stays" />
            <Stat value="190+" label="Countries" />
            <Stat value="4.9" label="Avg rating" />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div>
    <div
      className="text-xl md:text-2xl font-bold text-white"
      style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
    >
      {value}
    </div>
    <div
      className="text-xs md:text-sm text-white/80"
      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
    >
      {label}
    </div>
  </div>
);

export default Hero;
