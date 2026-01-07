
import React from 'react';
import { Tour } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Pôr do Sol Mágico',
    description: 'Navegue em direção ao horizonte enquanto o sol se põe, pintando o céu com tons de fogo e ouro. Inclui drinks e música ao vivo.',
    price: 'R$ 180',
    duration: '3 Horas',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    category: 'Sunset'
  },
  {
    id: '2',
    title: 'Expedição Ilha Secreta',
    description: 'Descubra praias desertas e águas cristalinas em uma jornada de aventura pelas ilhas mais preservadas da região.',
    price: 'R$ 250',
    duration: '6 Horas',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Charter Exclusivo',
    description: 'A embarcação inteira para você e seus convidados. Roteiro personalizado e serviço de bordo premium.',
    price: 'Sob Consulta',
    duration: 'Personalizado',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800',
    category: 'Private'
  }
];

export const SYSTEM_PROMPT = `Você é o Concierge Virtual da 'Circuito do Sol - Passeios Turísticos'. 
Seu objetivo é ajudar os clientes a escolher o melhor passeio de barco.
Seja elegante, prestativo e evoque a sensação de relaxamento e aventura no mar.
As opções de passeios são:
1. Pôr do Sol Mágico (R$ 180, 3h, relaxante, romântico).
2. Expedição Ilha Secreta (R$ 250, 6h, aventura, snorkel, natureza).
3. Charter Exclusivo (Preço sob consulta, personalizado para grupos).

Sempre mencione que somos especialistas em criar memórias inesquecíveis sob o sol.
Se perguntarem sobre preços, seja transparente. Se perguntarem sobre reservas, diga que podem clicar no botão de reservas no site.`;
