'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import robot from '../../../public/image/png/robot1.webp';

// Logos
import ai1 from '../../../public/image/brand/ai/creaitor.webp';
import ai2 from '../../../public/image/brand/ai/gpt.webp';
import ai3 from '../../../public/image/brand/ai/designs.webp';
import ai4 from '../../../public/image/brand/ai/grammarly.webp';
import ai5 from '../../../public/image/brand/ai/oll.webp';
import ai6 from '../../../public/image/brand/ai/quillbot.webp';
import ai7 from '../../../public/image/brand/ai/word.webp';
import ai8 from '../../../public/image/brand/ai/wordtune.webp';
import asset1 from '../../../public/image/brand/asset/epidemic.webp';
import asset2 from '../../../public/image/brand/asset/flaticon.webp';
import asset3 from '../../../public/image/brand/asset/freepik.webp';
import asset4 from '../../../public/image/brand/asset/motion.webp';
import asset5 from '../../../public/image/brand/asset/rowpixel.webp';
import asset6 from '../../../public/image/brand/asset/envato.webp';
import graphic1 from '../../../public/image/brand/graphic/canva.webp';
import graphic2 from '../../../public/image/brand/graphic/picsart.webp';
import graphic3 from '../../../public/image/brand/graphic/pixlr.webp';
import graphic4 from '../../../public/image/brand/graphic/placeit.webp';
import graphic5 from '../../../public/image/brand/graphic/poster.webp';
import graphic6 from '../../../public/image/brand/graphic/renderforest.webp';
import graphic7 from '../../../public/image/brand/graphic/snapied.webp';
import graphic8 from '../../../public/image/brand/graphic/vista.webp';
import learning1 from '../../../public/image/brand/learning/bookmate.webp';
import learning2 from '../../../public/image/brand/learning/brilliant.webp';
import learning3 from '../../../public/image/brand/learning/curiosity.webp';
import learning4 from '../../../public/image/brand/learning/curiosity-u.webp';
import learning5 from '../../../public/image/brand/learning/learning.webp';
import learning6 from '../../../public/image/brand/learning/everand.webp';
import learning7 from '../../../public/image/brand/learning/perlego.webp';
import learning8 from '../../../public/image/brand/learning/quislet.webp';
import learning9 from '../../../public/image/brand/learning/scribd.webp';
import learning10 from '../../../public/image/brand/learning/skill.webp';
import learning11 from '../../../public/image/brand/learning/skills.webp';
import learning12 from '../../../public/image/brand/learning/udemy.webp';
import seo1 from '../../../public/image/brand/seo/ranking.webp';
import seo2 from '../../../public/image/brand/seo/seobility.webp';
import seo3 from '../../../public/image/brand/seo/site chackup.webp';
import seo4 from '../../../public/image/brand/seo/storybase.webp';
import stream1 from '../../../public/image/brand/streaming/crunchyrol.webp';
import stream2 from '../../../public/image/brand/streaming/da vinsi.webp';
import stream3 from '../../../public/image/brand/streaming/kidstream.webp';
import stream4 from '../../../public/image/brand/streaming/mubi.webp';
import stream5 from '../../../public/image/brand/streaming/prime.webp';
import stream6 from '../../../public/image/brand/streaming/somm.webp';
import stream7 from '../../../public/image/brand/streaming/tastemade.webp';

const sections = [
  {
    title: 'AI & Content Writing',
    brands: [
      { label: 'ChatGPT Plus', src: ai2 }, { label: 'WordAI', src: ai7 }, { label: 'CreaitorAI', src: ai1 },
      { label: 'Designs.ai', src: ai3 }, { label: 'QuillBot', src: ai6 }, { label: 'Grammarly', src: ai4 },
      { label: 'Ollie', src: ai5 }, { label: 'Wordtune', src: ai8 },
    ],
  },
  {
    title: 'Asset Platforms',
    brands: [
      { label: 'Envato', src: asset6 }, { label: 'Freepik', src: asset3 }, { label: 'Motion Array', src: asset4 },
      { label: 'Flaticon', src: asset2 }, { label: 'Epidemic Sound', src: asset1 }, { label: 'rawpixel', src: asset5 },
    ],
  },
  {
    title: 'Graphic & Video Creation',
    brands: [
      { label: 'Canva', src: graphic1 }, { label: 'PicsArt', src: graphic2 }, { label: 'VistaCreate', src: graphic8 },
      { label: 'Renderforest', src: graphic6 }, { label: 'Placeit', src: graphic4 }, { label: 'Snapied', src: graphic7 },
      { label: 'Postermywall', src: graphic5 }, { label: 'Pixlr', src: graphic3 },
    ],
  },
  {
    title: 'Learning Platforms',
    brands: [
      { label: 'Skillshare', src: learning10 }, { label: 'Curiosity', src: learning3 }, { label: 'Curiosity U', src: learning4 },
      { label: 'Bookmate', src: learning1 }, { label: 'Everand', src: learning6 }, { label: 'Perlego', src: learning7 },
      { label: 'Scribd', src: learning9 }, { label: 'Udemy', src: learning12 }, { label: 'Skills', src: learning11 },
      { label: 'Brilliant', src: learning2 }, { label: 'Quizlet', src: learning8 }, { label: 'IXL', src: learning5 },
    ],
  },
  {
    title: 'SEO & Marketing',
    brands: [
      { label: 'SE Ranking', src: seo1 }, { label: 'Mangools', src: seo3 }, { label: 'Seobility', src: seo2 }, { label: 'StoryBase', src: seo4 },
    ],
  },
  {
    title: 'Streaming & Entertainment',
    brands: [
      { label: 'Prime Video', src: stream5 }, { label: 'MUBI', src: stream4 }, { label: 'Crunchyroll', src: stream1 },
      { label: 'Somm TV', src: stream6 }, { label: 'Da Vinci', src: stream2 }, { label: 'Kidstream', src: stream3 }, { label: 'Tastemade', src: stream7 },
    ],
  },
];

export default function Brand() {
  return (
    <section id="brand" className="relative isolate overflow-hidden pt-20 sm:pt-28 lg:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header with robot halo */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto flex items-center justify-center">
            <div className="robot-wrap">
              <span className="halo" aria-hidden />
              <span className="stars stars--a" aria-hidden />
              <span className="stars stars--b" aria-hidden />
              <Image src={robot} width={100} height={100} alt="robot" className="robot-float" />
            </div>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white sm:text-5xl">
            Your favorite <span className="text-gradient-blue drop-shadow-[0_0_28px_rgba(79,134,255,.55)]">platforms</span>, <br />in <span className="text-gradient-blue drop-shadow-[0_0_28px_rgba(79,134,255,.55)]">one</span> place
          </h2>
        </div>

        {/* Groups */}
        <div className="mt-14 space-y-14">
          {sections.map((group, gIdx) => (
            <div key={group.title} className="relative">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">{group.title}</h3>
                <div className="h-px flex-1 ml-6 bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
              </div>

              {/* MOBILE: horizontal scroller */}
              <div className="-mx-6 sm:hidden overflow-x-auto overflow-y-hidden no-scrollbar px-6">
                <div className="flex gap-4 snap-x snap-mandatory">
                  {group.brands.map((app, i) => (
                    <motion.a
                      key={app.label + i}
                      href="#"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
                      transition={{ delay: (i % 10) * 0.03, ease: 'easeOut' }}
                      className="group relative overflow-hidden rounded-2xl conic-border border border-transparent animate-border bg-white/[.05] ring-1 ring-white/10 backdrop-blur-sm min-w-[168px] snap-start transition-transform duration-300 ease-out"
                    >
                      <div className="relative grid h-28 place-items-center rounded-2xl text-[#0b1020] shadow-[inset_0_1px_0_rgba(0,0,0,.02),0_10px_30px_rgba(0,0,0,.25)] m-3 overflow-hidden">
                        <Image
                          src={app.src}
                          alt={app.label}
                          width={140}
                          height={140}
                          className="w-auto h-24 object-contain rounded-xl transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] will-change-transform"
                          priority={gIdx < 1}
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 translate-y-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent blur-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>


              {/* DESKTOP: grid */}
              <div className="hidden sm:grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
                {group.brands.map((app, i) => (
                  <motion.a
                    key={app.label + i}
                    href="#"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
                    transition={{ delay: (i % 10) * 0.03, ease: 'easeOut' }}
                    className="group relative overflow-hidden rounded-2xl conic-border border border-transparent animate-border bg-white/[.05] ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-300 ease-out will-change-transform sm:hover:-translate-y-1 sm:hover:shadow-[0_18px_60px_rgba(34,211,238,.18)]"
                  >
                    <div className="relative grid h-28 place-items-center rounded-2xl text-[#0b1020] shadow-[inset_0_1px_0_rgba(0,0,0,.02),0_10px_30px_rgba(0,0,0,.25)] m-3 overflow-hidden">
                      <Image
                        src={app.src}
                        alt={app.label}
                        width={140}
                        height={140}
                        className="w-auto h-24 object-contain rounded-xl transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] sm:group-hover:-translate-y-1.5 md:group-hover:-translate-y-2 will-change-transform"
                        priority={gIdx < 1}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 translate-y-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent blur-xl" />
                  </motion.a>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Scoped + tiny global styles */}
      <style jsx>{`
        .text-gradient-blue{background:linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
        .robot-wrap{position:relative;display:inline-block}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .robot-float{display:block;animation:float 4.6s ease-in-out infinite}
        /* blue halo (subtle, same pattern as earlier) */
        .halo{position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);width:108%;height:38px;border-radius:9999px;pointer-events:none;background:radial-gradient(closest-side,rgba(96,165,250,.70) 0%,rgba(59,130,246,.48) 55%,rgba(37,99,235,.30) 75%,transparent 86%);filter:blur(18px);opacity:.96}
        .halo::before{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:138%;height:160%;border-radius:9999px;background:radial-gradient(closest-side,rgba(147,197,253,.30) 0%,rgba(59,130,246,.20) 55%,rgba(2,6,23,0) 86%);filter:blur(26px);opacity:.85}
        /* stars around robot */
        .stars{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);width:140%;height:140%;pointer-events:none;mix-blend:screen;background-repeat:no-repeat;opacity:.8;filter:drop-shadow(0 0 6px rgba(96,165,250,.45))}
        .stars--a{background-image:radial-gradient(1.2px 1.2px at 18% 78%, rgba(255,255,255,.95) 99%, transparent 100%),radial-gradient(1.3px 1.3px at 64% 82%, rgba(255,255,255,.8) 99%, transparent 100%),radial-gradient(1px 1px at 32% 62%, rgba(255,255,255,.9) 99%, transparent 100%),radial-gradient(1.4px 1.4px at 78% 58%, rgba(255,255,255,.85) 99%, transparent 100%)}
        .stars--b{background-image:radial-gradient(1.2px 1.2px at 26% 36%, rgba(255,255,255,.9) 99%, transparent 100%),radial-gradient(1px 1px at 72% 28%, rgba(255,255,255,.75) 99%, transparent 100%),radial-gradient(1.3px 1.3px at 52% 14%, rgba(255,255,255,.9) 99%, transparent 100%)}
      `}</style>
      <style jsx global>{`
        /* hide mobile scrollbars for brand carousels */
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
    </section>
  );
}
