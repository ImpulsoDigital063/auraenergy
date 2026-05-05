// Icons SVG inline — stroke 1.75, vibe técnica + premium.
// Tudo configurável via prop size + className. Nunca emoji.

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const baseProps = (size: number, sw: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconSun({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function IconBolt({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function IconLeaf({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2c1 1.5.5 5.5-1.7 7.7-2.04 2.04-3.4 2.4-5.5 2.6-1.5.13-3 .8-4 2.7-.6 1.3 0 3 1 5z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export function IconHome({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M3 12 12 3l9 9" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9 21V14h6v7" />
    </svg>
  );
}

export function IconClock({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconShield({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconWallet({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
      <path d="M21 12v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2z" />
      <circle cx="14" cy="14" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function IconChart({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </svg>
  );
}

export function IconCheck({ size = 24, className = "", strokeWidth = 2.25 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function IconChevronDown({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrowRight({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconWhatsApp({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.6 6.4A8 8 0 0 0 4.13 14.96L3 21l6.18-1.62A8 8 0 1 0 17.6 6.4ZM12 19.3a7.3 7.3 0 0 1-3.72-1.02l-.27-.16-3.66.96.98-3.57-.18-.28a7.3 7.3 0 1 1 6.85 4.07Zm4-5.46c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.14.22-.57.71-.7.86-.13.14-.26.16-.48.05a6 6 0 0 1-1.76-1.09 6.6 6.6 0 0 1-1.22-1.51c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.14-.22.22-.36.07-.14.04-.27-.02-.38-.05-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.14 0-.38.05-.58.27a2.45 2.45 0 0 0-.78 1.83 4.27 4.27 0 0 0 .9 2.27 9.84 9.84 0 0 0 3.74 3.31c.52.23.93.36 1.25.46.52.17 1 .14 1.38.09.42-.06 1.3-.53 1.49-1.05.18-.51.18-.95.13-1.04-.05-.1-.2-.16-.42-.27Z" />
    </svg>
  );
}

export function IconMapPin({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconSparkles({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M9.94 14.34 12 20l2.06-5.66L20 12.5l-5.94-1.84L12 5l-2.06 5.66L4 12.5l5.94 1.84z" />
      <path d="M19 4 18 7l-3 1 3 1 1 3 1-3 3-1-3-1z" opacity="0.6" />
    </svg>
  );
}

export function IconPanelGrid({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  // Icone painel solar estilizado
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M3 13.5h18" />
      <path d="M9 4v14" />
      <path d="M15 4v14" />
      <path d="M10 22h4" />
      <path d="M12 18v4" />
    </svg>
  );
}

export function IconTrending({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function IconUsers({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconAward({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="m15.5 14-1.5 7L12 19l-2 2-1.5-7" />
    </svg>
  );
}

export function IconArrowUpRight({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function IconSpark({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m5.6 18.4 2.1-2.1" />
      <path d="m16.3 7.7 2.1-2.1" />
    </svg>
  );
}

export function IconStar({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="m12 2 3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15l-5-5 7-1z" fill="currentColor" />
    </svg>
  );
}

export function IconStore({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M3 9 4.5 4h15L21 9" />
      <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
      <path d="M9 21v-6h6v6" />
      <path d="M3 9c0 1.66 1.34 3 3 3s3-1.34 3-3" />
      <path d="M9 9c0 1.66 1.34 3 3 3s3-1.34 3-3" />
      <path d="M15 9c0 1.66 1.34 3 3 3s3-1.34 3-3" />
    </svg>
  );
}

export function IconFactory({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M2 21V11l5 3V11l5 3V11l5 3V7l3-2v16Z" />
      <path d="M7 17h2" />
      <path d="M12 17h2" />
      <path d="M17 17h2" />
    </svg>
  );
}

export function IconTractor({ size = 24, className = "", strokeWidth = 1.75 }: IconProps) {
  return (
    <svg {...baseProps(size, strokeWidth)} className={className}>
      <path d="M3 4h9l1 6h6a2 2 0 0 1 2 2v4" />
      <path d="M3 10v4" />
      <circle cx="7" cy="17" r="3" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10 17h5" />
    </svg>
  );
}
