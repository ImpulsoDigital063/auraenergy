// Casos por segmento para HeroCarrosselCasos.
// Briefing V3.1 Renato (22/05) cravou:
//   - Comercio: caso REAL Mercado 25 kWp R$3000→R$155
//   - Rural: caso-tipo Hero pivo+granja 80 kWp R$14.500→R$1.800
//   - Industria: caso-tipo planta 200 kWp R$38.000→R$4.200
// Demais casos sao caso-tipo (badge "tipo") · projecoes plausiveis para o segmento.
// Quando Renato cravar mais cases reais com numeros confirmados, atualizar
// e mudar badge de "tipo" para "real".

import type { Caso } from "./HeroCarrosselCasos";

export const CASOS_COMERCIO: Caso[] = [
  {
    tipo: "Mercado",
    cidade: "Palmas-TO",
    kwp: 25,
    contaAntes: 3000,
    contaDepois: 155,
    payback: "3,0 anos",
    metricaExtra: { label: "Margem liberada", valor: "+18%" },
    badge: "real",
  },
  {
    tipo: "Lanchonete",
    cidade: "Palmas-TO",
    kwp: 22,
    contaAntes: 2850,
    contaDepois: 285,
    payback: "3,1 anos",
    metricaExtra: { label: "Margem liberada", valor: "+15%" },
    badge: "tipo",
  },
  {
    tipo: "Padaria",
    cidade: "Paraiso-TO",
    kwp: 18,
    contaAntes: 2200,
    contaDepois: 240,
    payback: "3,4 anos",
    metricaExtra: { label: "Margem liberada", valor: "+12%" },
    badge: "tipo",
  },
];

export const CASOS_INDUSTRIA: Caso[] = [
  {
    tipo: "Galpao metalurgico",
    cidade: "Palmas-TO",
    kwp: 200,
    contaAntes: 38000,
    contaDepois: 4200,
    payback: "4,5 anos",
    metricaExtra: { label: "TIR a.a.", valor: "22%" },
    badge: "tipo",
  },
  {
    tipo: "Frigorifico",
    cidade: "Gurupi-TO",
    kwp: 350,
    contaAntes: 62000,
    contaDepois: 7500,
    payback: "4,8 anos",
    metricaExtra: { label: "TIR a.a.", valor: "20%" },
    badge: "tipo",
  },
  {
    tipo: "Beneficiamento de graos",
    cidade: "Paraiso-TO",
    kwp: 500,
    contaAntes: 95000,
    contaDepois: 11000,
    payback: "4,2 anos",
    metricaExtra: { label: "TIR a.a.", valor: "23%" },
    badge: "tipo",
  },
];

export const CASOS_RURAL: Caso[] = [
  {
    tipo: "Pivo + granja",
    cidade: "Palmas-TO",
    kwp: 80,
    contaAntes: 14500,
    contaDepois: 1800,
    payback: "Pronaf 3,8 anos",
    metricaExtra: { label: "Pronaf", valor: "0,5% a.m." },
    badge: "tipo",
  },
  {
    tipo: "Bombeamento + irrigacao",
    cidade: "Paraiso-TO",
    kwp: 60,
    contaAntes: 11000,
    contaDepois: 1300,
    payback: "Pronaf 3,5 anos",
    metricaExtra: { label: "Pronaf", valor: "0,5% a.m." },
    badge: "tipo",
  },
  {
    tipo: "Aviario de corte",
    cidade: "Gurupi-TO",
    kwp: 100,
    contaAntes: 18000,
    contaDepois: 2200,
    payback: "Pronaf 4,0 anos",
    metricaExtra: { label: "Pronaf", valor: "0,5% a.m." },
    badge: "tipo",
  },
];
