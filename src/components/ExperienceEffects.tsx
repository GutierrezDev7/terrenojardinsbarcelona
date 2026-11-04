"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { setSmoothScroller } from '../lib/smoothScroll';

export function ExperienceEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.075,
      smoothWheel: true,
      anchors: { offset: -80 },
    });
    setSmoothScroller(lenis);

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);

    lenis.on('scroll', updateScrollTrigger);
    gsap.ticker.add(updateLenis);

    const context = gsap.context(() => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'max',
              scrub: 0.25,
            },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]').forEach((group) => {
        const items = Array.from(group.children);
        if (items.length === 0) return;

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-gsap-parallax]').forEach((element) => {
        const trigger = element.closest<HTMLElement>('[data-gsap-parallax-section]');
        if (!trigger) return;

        gsap.to(element, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });
    });

    return () => {
      context.revert();
      gsap.ticker.remove(updateLenis);
      lenis.off('scroll', updateScrollTrigger);
      setSmoothScroller(null);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-emerald-400 via-amber-400 to-amber-200"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
