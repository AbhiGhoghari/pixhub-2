'use client';
import Image from 'next/image';
import React from 'react';

// ===== your logo imports (unchanged) =====
import ai1 from '../../../public/image/brand/ai/creaitor.webp'
import ai2 from '../../../public/image/brand/ai/gpt.webp'
import ai3 from '../../../public/image/brand/ai/designs.webp'
import ai4 from '../../../public/image/brand/ai/grammarly.webp'
import ai5 from '../../../public/image/brand/ai/oll.webp'
import ai6 from '../../../public/image/brand/ai/quillbot.webp'
import ai7 from '../../../public/image/brand/ai/word.webp'
import ai8 from '../../../public/image/brand/ai/wordtune.webp'
import asset1 from '../../../public/image/brand/asset/epidemic.webp'
import asset2 from '../../../public/image/brand/asset/flaticon.webp'
import asset3 from '../../../public/image/brand/asset/freepik.webp'
import asset4 from '../../../public/image/brand/asset/motion.webp'
import asset5 from '../../../public/image/brand/asset/rowpixel.webp'
import asset6 from '../../../public/image/brand/asset/envato.webp'
import graphic1 from '../../../public/image/brand/graphic/canva.webp'
import graphic2 from '../../../public/image/brand/graphic/picsart.webp'
import graphic3 from '../../../public/image/brand/graphic/pixlr.webp'
import graphic4 from '../../../public/image/brand/graphic/placeit.webp'
import graphic5 from '../../../public/image/brand/graphic/poster.webp'
import graphic6 from '../../../public/image/brand/graphic/renderforest.webp'
import graphic7 from '../../../public/image/brand/graphic/snapied.webp'
import graphic8 from '../../../public/image/brand/graphic/vista.webp'
import learning1 from '../../../public/image/brand/learning/bookmate.webp'
import learning2 from '../../../public/image/brand/learning/brilliant.webp'
import learning3 from '../../../public/image/brand/learning/curiosity.webp'
import learning4 from '../../../public/image/brand/learning/curiosity-u.webp'
import learning5 from '../../../public/image/brand/learning/everand.webp'
import learning6 from '../../../public/image/brand/learning/learning.webp'
import learning7 from '../../../public/image/brand/learning/perlego.webp'
import learning8 from '../../../public/image/brand/learning/quislet.webp'
import learning9 from '../../../public/image/brand/learning/scribd.webp'
import learning10 from '../../../public/image/brand/learning/skill.webp'
import learning11 from '../../../public/image/brand/learning/skills.webp'
import learning12 from '../../../public/image/brand/learning/udemy.webp'
import seo1 from '../../../public/image/brand/seo/ranking.webp'
import seo2 from '../../../public/image/brand/seo/seobility.webp'
import seo3 from '../../../public/image/brand/seo/site chackup.webp'
import seo4 from '../../../public/image/brand/seo/storybase.webp'
import stream1 from '../../../public/image/brand/streaming/crunchyrol.webp'
import stream2 from '../../../public/image/brand/streaming/da vinsi.webp'
import stream3 from '../../../public/image/brand/streaming/kidstream.webp'
import stream4 from '../../../public/image/brand/streaming/mubi.webp'
import stream5 from '../../../public/image/brand/streaming/prime.webp'
import stream6 from '../../../public/image/brand/streaming/somm.webp'
import stream7 from '../../../public/image/brand/streaming/tastemade.webp'

// ===== data (kept in sections but no titles shown) =====
const sections = [
  {
    brands: [
      { label: 'ChatGPT Plus', src: ai2 },
      { label: 'WordAI', src: ai7 },
      { label: 'CreaitorAI', src: ai1 },
      { label: 'Designs.ai', src: ai3 },
      { label: 'QuillBot', src: ai6 },
      { label: 'Grammarly', src: ai4 },
      { label: 'Ollie', src: ai5 },
      { label: 'Wordtune', src: ai8 },
    ],
  },
  {
    brands: [
      { label: 'Envato', src: asset6 },
      { label: 'Freepik', src: asset3 },
      { label: 'Motion Array', src: asset4 },
      { label: 'Flaticon', src: asset2 },
      { label: 'Epidemic Sound', src: asset1 },
      { label: 'rawpixel', src: asset5 },
    ],
  },
  {
    brands: [
      { label: 'Canva', src: graphic1 },
      { label: 'PicsArt', src: graphic2 },
      { label: 'VistaCreate', src: graphic8 },
      { label: 'Renderforest', src: graphic6 },
      { label: 'Placeit', src: graphic4 },
      { label: 'Snapied', src: graphic7 },
      { label: 'Postermywall', src: graphic5 },
      { label: 'Pixlr', src: graphic3 },
    ],
  },
  {
    brands: [
      { label: 'Skillshare', src: learning10 },
      { label: 'Curiosity', src: learning3 },
      { label: 'Curiosity U', src: learning4 },
      { label: 'Bookmate', src: learning1 },
      { label: 'Everand', src: learning6 },
      { label: 'Perlego', src: learning7 },
      { label: 'Scribd', src: learning9 },
      { label: 'Udemy', src: learning12 },
      { label: 'Skills', src: learning11 },
      { label: 'Brilliant', src: learning2 },
      { label: 'Quizlet', src: learning8 },
      { label: 'IXL', src: learning5 },
    ],
  },
  {
    brands: [
      { label: 'SE Ranking', src: seo1 },
      { label: 'Mangools', src: seo3 },
      { label: 'Seobility', src: seo2 },
      { label: 'StoryBase', src: seo4 },
    ],
  },
  {
    brands: [
      { label: 'Prime Video', src: stream5 },
      { label: 'MUBI', src: stream4 },
      { label: 'Crunchyroll', src: stream1 },
      { label: 'Soap (?)', src: stream6 },
      { label: 'Da Vinci', src: stream2 },
      { label: 'Kidstream', src: stream3 },
      { label: 'Tastemade', src: stream7 },
    ],
  },
];

export default function Brand() {
  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* just the grids, no headers/titles */}
        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="grid gap-5 sm:gap-6 xl:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10"
            >
              {sec.brands.map((b) => (
                <BrandTile key={b.label} src={b.src} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ Tile ------------ */
function BrandTile({ src }) {
  return (
    <div className="tile">
      <div className="tile-inner">
        <div className="slab">
          <Image
            src={src}
            alt=""
            width={200}
            height={200}
            className="h-16 w-auto md:h-20 object-contain"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
