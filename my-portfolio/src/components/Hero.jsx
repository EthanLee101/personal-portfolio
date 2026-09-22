import { MapPin, Calendar, Download, ArrowDown } from 'lucide-react';
import { Reveal, RevealItem } from './Reveal';
import CornerMarks from './CornerMarks';
import { hero } from '../data/content';

export default function Hero({ onViewWork, onScrollNext }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 sm:py-0">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <Reveal viewport={false} className="text-center lg:text-left order-2 lg:order-1">
            <RevealItem className="font-label text-xs sm:text-sm tracking-[0.3em] text-blueprint-accent mb-4">
              ⊕ FIG. 00 — INDEX
            </RevealItem>

            <RevealItem as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-blueprint-line">
              I'm {hero.name}
            </RevealItem>

            <RevealItem as="h2" className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blueprint-muted mb-6 sm:mb-8 font-display">
              {hero.role}
            </RevealItem>

            <RevealItem as="p" className="text-base sm:text-lg md:text-xl text-blueprint-line/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              {hero.subhead}
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 my-8 sm:my-12 font-label text-xs sm:text-sm text-blueprint-muted px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blueprint-accent" />
                <span>{hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blueprint-accent" />
                <span>{hero.availability}</span>
              </div>
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button
                onClick={onViewWork}
                className="bg-blueprint-accent hover:brightness-110 text-blueprint-bg px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-display font-bold transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <a
                href={hero.resumeFile}
                download="Ethan_Lee_Resume.pdf"
                className="border bp-hairline hover:border-blueprint-accent text-blueprint-line hover:text-blueprint-accent px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-display font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
              >
                <Download size={18} />
                Resume
              </a>
            </RevealItem>
          </Reveal>

          <Reveal viewport={false} className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <RevealItem className="relative border bp-hairline p-3">
              <CornerMarks />
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden">
                <img
                  src="/profile-image.jpg"
                  alt="Ethan Lee"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </div>

      <button
        onClick={onScrollNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-blueprint-muted hover:text-blueprint-accent transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
