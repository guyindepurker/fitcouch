'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Image from 'next/image';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  // const byShaulHahamRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    window.addEventListener('wheel', (e) => {
      if (containerRef.current) {
        e.preventDefault();
        const scrollAmount = e.deltaY;
        gsap.to(window, {
          scrollTo: { y: '+=' + scrollAmount, autoKill: false },
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    }, { passive: false });

    // Animation timeline
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' },
      0
    );

    // Title animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.2
    );

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.4
    );

    // Icon animation
    tl.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.5)' },
      0.6
    );

       tl.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.5)' },
      0.6
    );
    // Bottom section animation
    tl.fromTo(
      bottomSectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      1.2
    );

    // Floating animation for icon
    gsap.to(iconRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Pulse animation for social icons
    gsap.to(socialIconsRef.current?.querySelectorAll('a'), {
      scale: 1.1,
      duration: 0.6,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      window.removeEventListener('wheel', () => {});
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-fit text-foreground flex items-center justify-center px-4 overflow-hidden"
    >
      <main className="w-full max-w-2xl text-center">
   

        <div ref={titleRef}>
          <h1 className="text-5xl space-letter-bg main-text md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Coming Soon
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-16 text-container-by">
          <p className="text-lg by-text color-white space-letter md:text-2xl text-muted-foreground font-light main-text ">
            By Shaul Haham
          </p>
        </div>


       
        <div
          ref={bottomSectionRef}
          className="border-t border-border pt-12 space-y-8"
        >
          <div>
            <p className="text-base space-letter-sm md:text-lg text-foreground font-medium mb-2">
              Keep Updated on Social Media
            </p>
            <p className="text-sm main-text space-letter-sm text-muted-foreground">
              Follow us for exclusive updates and fitness tips
            </p>
          </div>

          <div
            ref={socialIconsRef}
            className="flex justify-center gap-8 md:gap-12"
          >
            <a
              href="https://tiktok.fit-couch.com"
              className="hover:opacity-75 transition-opacity duration-300 transform hover:scale-110"
              aria-label="Follow us on TikTok"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1-.1A6.15 6.15 0 0 0 5 20.1a6.61 6.61 0 0 0 5.88 1.12q.52-.11 1.02-.32a6.05 6.05 0 0 0 1.89-6.8l-.65-1.12a5.94 5.94 0 0 0 1.25-3.09c1.3.02 2.6-.16 3.6-1.3a4.84 4.84 0 0 0 1-3.34z" />
              </svg>
            </a>

            <a
              href="https://instagram.fit-couch.com" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity duration-300 transform hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>

            <a
              href="mailto:fitcouch10@gmail.com"
              className="hover:opacity-75 transition-opacity duration-300 transform hover:scale-110"
              aria-label="Email us"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
                <polyline points="22 6 12 13 2 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-xs color-white space-letter-bg main-text md:text-sm text-muted-foreground tracking-widest uppercase">
              Coming Soon
            </p>
          </div>
            <div  className="mb-20 logo flex justify-center">
            <Image
            
              src="/icon.png"
              alt="FitCouch Icon"
              width={80}
              height={100}
              className="h-auto"
            />
        </div> 
        </div>
      </main>
    </div>
  );
}
