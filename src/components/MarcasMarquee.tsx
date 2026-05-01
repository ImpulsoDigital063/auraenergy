// Marquee horizontal com marcas dos equipamentos. Texto puro premium, sem logo
// (logos das marcas precisam licença). Tipografia tabular grande dá vibe stripe.

const MARCAS = [
  "TRINA SOLAR",
  "CANADIAN SOLAR",
  "JINKO",
  "JA SOLAR",
  "LONGI",
  "GROWATT",
  "SUNGROW",
  "HUAWEI",
  "FRONIUS",
  "GOODWE",
  "DEYE",
];

export default function MarcasMarquee() {
  return (
    <section className="py-12 sm:py-16 section-soft border-y border-[var(--aura-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--aura-text-muted)]">
          Trabalhamos com equipamentos das marcas mais confiáveis do mercado
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {MARCAS.map((marca) => (
            <MarcaItem key={marca} nome={marca} />
          ))}
          {/* duplicado pra loop infinito */}
          {MARCAS.map((marca) => (
            <MarcaItem key={`${marca}-2`} nome={marca} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarcaItem({ nome }: { nome: string }) {
  return (
    <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.15em] text-[var(--aura-text-muted)] whitespace-nowrap select-none hover:text-[var(--aura-blue)] transition-colors cursor-default">
      {nome}
    </span>
  );
}
