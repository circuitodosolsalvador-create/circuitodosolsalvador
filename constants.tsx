
import { Tour } from './types';

export const ASSETS_BASE_URL = "https://raw.githubusercontent.com/circuitodosolsalvador-create/circuitodosolsalvador/main/assets/";

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Morro de São Paulo VIP',
    description: 'Travessia rápida e confortável de lancha privativa ou semiprivativa para um dos destinos mais cobiçados da Bahia.',
    price: 'A consultar',
    duration: 'Dia Inteiro',
    image: `${ASSETS_BASE_URL}tour-morro.jpg`,
  },
  {
    id: '2',
    title: 'Escuna pelas Ilhas',
    description: 'Um passeio clássico e animado pela Baía de Todos os Santos, visitando Ilha dos Frades e Itaparica com total conforto.',
    price: 'A consultar',
    duration: '7 Horas',
    image: `${ASSETS_BASE_URL}tour-escuna.jpg`,
  }
];

export const DESTINATIONS_GALLERY = [
  { id: 'neves', title: 'Praia das Neves', prefix: 'neves' },
  { id: 'prainha', title: 'Prainha (Aratu)', prefix: 'prainha' },
  { id: 'loreto', title: 'Loreto', prefix: 'loreto' },
  { id: 'frades', title: 'Ilha dos Frades', prefix: 'frades' }
];

export const SYSTEM_PROMPT = `Você é o Concierge Virtual da 'Circuito do Sol'. Ajude clientes com passeios de Escuna, Lancha e Catamarã na Bahia. WhatsApp: (71) 99657-8592.`;
