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
  // {
  //   title: 'AI & Content Writing',
  //   brands: [
  //     { label: 'ChatGPT Plus', src: ai2 }, { label: 'WordAI', src: ai7 }, { label: 'CreaitorAI', src: ai1 },
  //     { label: 'Designs.ai', src: ai3 }, { label: 'QuillBot', src: ai6 }, { label: 'Grammarly', src: ai4 },
  //     { label: 'Ollie', src: ai5 }, { label: 'Wordtune', src: ai8 },
  //   ],
  // },
  // {
  //   title: 'Asset Platforms',
  //   brands: [
  //     { label: 'Envato', src: asset6 }, { label: 'Freepik', src: asset3 }, { label: 'Motion Array', src: asset4 },
  //     { label: 'Flaticon', src: asset2 }, { label: 'Epidemic Sound', src: asset1 }, { label: 'rawpixel', src: asset5 },
  //   ],
  // },
  // {
  //   title: 'Graphic & Video Creation',
  //   brands: [
  //     { label: 'Canva', src: graphic1 }, { label: 'PicsArt', src: graphic2 }, { label: 'VistaCreate', src: graphic8 },
  //     { label: 'Renderforest', src: graphic6 }, { label: 'Placeit', src: graphic4 }, { label: 'Snapied', src: graphic7 },
  //     { label: 'Postermywall', src: graphic5 }, { label: 'Pixlr', src: graphic3 },
  //   ],
  // },
  // {
  //   title: 'Learning Platforms',
  //   brands: [
  //     { label: 'Skillshare', src: learning10 }, { label: 'Curiosity', src: learning3 }, { label: 'Curiosity U', src: learning4 },
  //     { label: 'Bookmate', src: learning1 }, { label: 'Everand', src: learning6 }, { label: 'Perlego', src: learning7 },
  //     { label: 'Scribd', src: learning9 }, { label: 'Udemy', src: learning12 }, { label: 'Skills', src: learning11 },
  //     { label: 'Brilliant', src: learning2 }, { label: 'Quizlet', src: learning8 }, { label: 'IXL', src: learning5 },
  //   ],
  // },
  {
    title: 'SEO & Marketing',
    brands: [
      { label: 'SE Ranking', src: seo1 }, { label: 'Mangools', src: seo3 }, { label: 'Seobility', src: seo2 }, { label: 'StoryBase', src: seo4 },
    ],
  },
  // {
  //   title: 'Streaming & Entertainment',
  //   brands: [
  //     { label: 'Prime Video', src: stream5 }, { label: 'MUBI', src: stream4 }, { label: 'Crunchyroll', src: stream1 },
  //     { label: 'Somm TV', src: stream6 }, { label: 'Da Vinci', src: stream2 }, { label: 'Kidstream', src: stream3 }, { label: 'Tastemade', src: stream7 },
  //   ],
  // },
];

/* ...your existing imports & sections stay the same... */

export default function Brand() {
  return (
    <section id="brand" className="relative isolate overflow-hidden pt-20 sm:pt-28 lg:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* ...header stuff... */}

        <div className="mt-14 space-y-14">
          {sections.map((group, gIdx) => (
            <div key={group.title} className="relative">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">{group.title}</h3>
                <div className="h-px flex-1 ml-6 bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
              </div>

              {/* MOBILE: infinite marquee */}
              <div className="sm:hidden">
                <MarqueeRow brands={group.brands} reverse={gIdx % 2 === 1} speed={18} />
              </div>

              {/* DESKTOP: grid (unchanged) */}
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

      {/* keep your existing styles... */}

      {/* ⬇️ Add these global styles for the marquee */}
      <style jsx global>{`
        @keyframes brand-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* duplicated once => -50% loops perfectly */
        }
        .m-row {
          position: relative;
          overflow: hidden;
          /* nice edge fade */
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .m-track {
          display: flex;
          gap: 16px;
          width: max-content;
          padding: 8px 0;
          animation: brand-marquee var(--speed, 18s) linear infinite;
          will-change: transform;
        }
        .m-track.reverse { animation-direction: reverse; }
        @media (prefers-reduced-motion: reduce) {
          .m-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

/* ===== marquee component for mobile ===== */
function MarqueeRow({
  brands,
  speed = 18,          // seconds; lower = faster
  reverse = false,     // alternate direction per section
}) {
  // duplicate once to create a seamless loop
  const reel = [...brands, ...brands];

  return (
    <div className="m-row -mx-6 px-6">
      <div
        className={`m-track ${reverse ? 'reverse' : ''}`}
        style={{ '--speed': `${speed}s` }}
      >
        {reel.map((app, i) => (
          <a
            key={app.label + i}
            href="#"
            className="group relative overflow-hidden rounded-2xl conic-border border border-transparent animate-border bg-white/[.05] ring-1 ring-white/10 backdrop-blur-sm min-w-[168px]"
          >
            <div className="relative grid h-28 place-items-center rounded-2xl text-[#0b1020] shadow-[inset_0_1px_0_rgba(0,0,0,.02),0_10px_30px_rgba(0,0,0,.25)] m-3 overflow-hidden">
              <Image
                src={app.src}
                alt={app.label}
                width={140}
                height={140}
                className="w-auto h-24 object-contain rounded-xl"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 translate-y-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent blur-xl" />
          </a>
        ))}
      </div>
    </div>
  );
}

