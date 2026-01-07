
import React from 'react';
import { Tour } from './types';

// INSTRUÇÃO PARA O USUÁRIO: 
// Substitua o link abaixo pelo link do seu repositório GitHub (caminho RAW)
// Exemplo: https://raw.githubusercontent.com/seu-usuario/seu-repositorio/main/
export const ASSETS_BASE_URL = "https://raw.githubusercontent.com/seu-usuario/seu-repositorio/main/assets/";

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Morro de São Paulo VIP',
    description: 'Travessia rápida e confortável de lancha privativa ou semiprivativa para um dos destinos mais cobiçados da Bahia.',
    price: 'R$ 220',
    duration: 'Dia Inteiro',
    image: `${ASSETS_BASE_URL}tour-morro.jpg`,
    category: 'Adventure'
  },
  {
    id: '2',
    title: 'Escuna pelas Ilhas',
    description: 'Um passeio clássico e animado pela Baía de Todos os Santos, visitando Ilha dos Frades e Itaparica com total conforto.',
    price: 'R$ 120',
    duration: '7 Horas',
    image: `${ASSETS_BASE_URL}tour-escuna.jpg`,
    category: 'Sunset'
  },
  {
    id: '3',
    title: 'Catamarã Praia do Forte',
    description: 'Navegação estável e luxuosa para observação de baleias (na temporada) ou visita às piscinas naturais da Praia do Forte.',
    price: 'R$ 180',
    duration: '4 Horas',
    image: `${ASSETS_BASE_URL}tour-catamara.jpg`,
    category: 'Private'
  }
];

export const SYSTEM_PROMPT = `Você é o Concierge Virtual da 'Circuito do Sol - Passeios Turísticos na Bahia'. 
Seu objetivo é ajudar os clientes a escolher o melhor passeio pelo litoral baiano.
A empresa é especializada em: Escuna, Lancha e Catamarã.
Os destinos principais são: Morro de São Paulo, Praia do Forte e as Ilhas da região.
Seja elegante, prestativo e destaque os valores da empresa: Conforto, Segurança e Organização.
Temos embarcações bem equipadas e equipe qualificada para momentos inesquecíveis.
Se perguntarem sobre preços ou reservas, oriente-os a entrar em contato pelo WhatsApp (71) 99657-8592 ou e-mail circuitodosolsalvador@gmail.com.`;
