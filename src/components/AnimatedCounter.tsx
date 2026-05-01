"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "br" | "raw"; // br = locale R$, raw = puro
  className?: string;
};

// Conta de 0 até `value` quando entra na tela. Com easing.
export default function AnimatedCounter({
  value,
  duration = 1400,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = "br",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const lastValueRef = useRef(0);

  // Recalcula sempre que `value` muda (slider/input mudou).
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const trigger = () => {
      const startVal = lastValueRef.current;
      const endVal = value;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = startVal + (endVal - startVal) * eased;
        setDisplay(current);
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          lastValueRef.current = endVal;
        }
      };

      requestAnimationFrame(tick);
    };

    if (startedRef.current) {
      // Já apareceu na tela uma vez — anima sempre que value mudar.
      trigger();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            startedRef.current = true;
            trigger();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted =
    format === "br"
      ? display.toLocaleString("pt-BR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : display.toFixed(decimals);

  return (
    <span ref={ref} className={`counter-tabular ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
