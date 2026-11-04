import type Lenis from 'lenis';

let smoothScroller: Lenis | null = null;

export function setSmoothScroller(scroller: Lenis | null) {
  smoothScroller = scroller;
}

export function scrollToElement(element: HTMLElement) {
  if (smoothScroller) {
    smoothScroller.scrollTo(element, { offset: -80 });
    return;
  }

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  element.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' });
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) scrollToElement(element);
}

export function scrollToTop() {
  if (smoothScroller) {
    smoothScroller.scrollTo(0);
    return;
  }

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
}
