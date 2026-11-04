"use client";

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { PlaneGeometry, ShaderMaterial, Vector2 } from 'three';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform float uAspect;
  uniform float uScroll;
  uniform vec2 uPointer;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 4; i++) {
      value += noise(p) * amplitude;
      p = p * 2.03 + vec2(11.7, 7.3);
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 point = vec2(uv.x * uAspect, uv.y);
    point.x += (uPointer.x - 0.5) * 0.025;
    point.x += uScroll * 0.012;

    float time = uTime * 0.018;
    float terrain = fbm(vec2(point.x * 2.0, 1.2 + time));
    float ridge = 0.34 + terrain * 0.24 + uScroll * 0.018;
    float ground = 1.0 - smoothstep(ridge - 0.004, ridge + 0.018, uv.y);

    vec3 sky = mix(
      vec3(0.075, 0.125, 0.095),
      vec3(0.34, 0.255, 0.155),
      smoothstep(0.12, 0.76, uv.y)
    );
    sky = mix(sky, vec3(0.58, 0.38, 0.19), smoothstep(0.28, 0.57, uv.y) * 0.35);

    vec2 sunPosition = vec2(
      0.76 * uAspect + (uPointer.x - 0.5) * 0.03,
      0.66 - uScroll * 0.05
    );
    float sunDistance = length(point - sunPosition);
    float sunGlow = exp(-sunDistance * 5.5) * 0.44;
    float sunDisc = 1.0 - smoothstep(0.035, 0.043, sunDistance);
    sky += vec3(0.72, 0.49, 0.24) * sunGlow;
    sky += vec3(0.88, 0.68, 0.39) * sunDisc;

    float contours = 1.0 - smoothstep(
      0.0,
      0.026,
      abs(fract((terrain + uv.y * 0.22) * 42.0) - 0.5)
    );
    vec3 earth = mix(vec3(0.055, 0.09, 0.064), vec3(0.14, 0.16, 0.10), terrain);
    earth += vec3(0.58, 0.41, 0.22) * contours * ground * 0.18;

    float starCell = hash(floor(point * vec2(110.0, 58.0)));
    float stars = step(0.997, starCell) * smoothstep(0.43, 0.87, uv.y);
    sky += vec3(0.85, 0.77, 0.59) * stars * (0.25 + 0.2 * sin(uTime * 0.6 + starCell * 40.0));

    vec3 color = mix(sky, earth, ground);
    float vignette = 1.0 - smoothstep(0.42, 0.92, length((uv - 0.5) * vec2(0.78, 0.9)));
    color *= 0.72 + vignette * 0.28;

    gl_FragColor = vec4(color, 0.9);
  }
`;

function LandscapeShader({ reducedMotion }: { reducedMotion: boolean }) {
  const { size } = useThree();
  const materialRef = useRef<ShaderMaterial>(null);
  const pointer = useRef(new Vector2(0.5, 0.5));

  const geometry = useMemo(
    () => new PlaneGeometry(2 * (size.width / Math.max(size.height, 1)), 2),
    [size.height, size.width],
  );
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uScroll: { value: 0 },
      uPointer: { value: new Vector2(0.5, 0.5) },
    }),
    [],
  );

  useEffect(() => {
    if (reducedMotion) return;

    const updatePointer = (event: PointerEvent) => {
      pointer.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => window.removeEventListener('pointermove', updatePointer);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    const { uAspect, uPointer, uScroll, uTime } = materialRef.current.uniforms;
    uAspect.value = state.size.width / Math.max(state.size.height, 1);
    uPointer.value.lerp(pointer.current, Math.min(delta * 2, 1));
    uScroll.value = Math.min(
      window.scrollY / Math.max(window.innerHeight, 1),
      2,
    );

    if (!reducedMotion) {
      uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function PauseWhenOffscreen({
  visibleFrameLoop,
}: {
  visibleFrameLoop: 'always' | 'demand';
}) {
  const { gl, setFrameloop } = useThree();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFrameloop(entry.isIntersecting ? visibleFrameLoop : 'never');
      },
      { rootMargin: '100px' },
    );

    observer.observe(gl.domElement);
    return () => observer.disconnect();
  }, [gl, setFrameloop, visibleFrameLoop]);

  return null;
}

function WebGLFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_40%,rgba(210,173,102,0.28),transparent_38%),linear-gradient(160deg,#28362a,#18231c_62%,#111812)]"
    />
  );
}

export function CinematicLandscape() {
  const reducedMotion = useReducedMotion();
  const visibleFrameLoop = reducedMotion ? 'demand' : 'always';

  if (reducedMotion) return <WebGLFallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 53.1301 }}
      frameloop={visibleFrameLoop}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      fallback={<WebGLFallback />}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <PauseWhenOffscreen visibleFrameLoop={visibleFrameLoop} />
      <LandscapeShader reducedMotion={false} />
    </Canvas>
  );
}
