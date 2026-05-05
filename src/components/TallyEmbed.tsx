"use client";

import Script from "next/script";

type Props = {
  src: string;
  height?: number;
};

// Embed do Tally — carrega script oficial + iframe dynamic-height.
export default function TallyEmbed({ src, height = 600 }: Props) {
  return (
    <>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Aura Energy — Calculadora"
        style={{
          background: "transparent",
          width: "100%",
          minHeight: `${height}px`,
        }}
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error — Tally global injetado
          if (typeof Tally !== "undefined") Tally.loadEmbeds();
        }}
      />
    </>
  );
}
