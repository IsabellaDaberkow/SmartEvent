import { ref, computed } from 'vue';

export interface Event {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  local: string;
  categoria: string;
  imagem: string;
  favorito: boolean;
}

const events = ref<Event[]>([
  {
    id: 1,
    titulo: 'Show de Rock Local',
    descricao: 'Uma noite incrível com as melhores bandas da região.',
    data: '15 de Abril, 20:00',
    local: 'Arena Central',
    categoria: 'Música',
    imagem: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=400',
    favorito: false
  },
  {
    id: 2,
    titulo: 'Workshop de Vue.js',
    descricao: 'Aprenda as novidades do Vue 3 e Composition API.',
    data: '20 de Abril, 09:00',
    local: 'Hub de Tecnologia',
    categoria: 'Workshop',
    imagem: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400',
    favorito: false
  },
  {
    id: 3,
    titulo: 'Campeonato de Skate',
    descricao: 'Competição regional com grandes talentos.',
    data: '25 de Abril, 14:00',
    local: 'Parque Radical',
    categoria: 'Esportes',
    imagem: 'https://images.unsplash.com/photo-1520156584141-24ad2300b442?auto=format&fit=crop&w=400',
    favorito: false
  },
  {
    id: 4,
    titulo: 'Palestra: Futuro da IA',
    descricao: 'Discussão sobre os impactos da Inteligência Artificial.',
    data: '30 de Abril, 19:00',
    local: 'Auditório Municipal',
    categoria: 'Palestra',
    imagem: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400',
    favorito: false
  }
] );

export function useEvents() {
  const allEvents = computed(() => events.value);
  const favoriteEvents = computed(() => events.value.filter(e => e.favorito));

  const toggleFavorite = (id: number) => {
    const event = events.value.find(e => e.id === id);
    if (event) {
      event.favorito = !event.favorito;
    }
  };

  const getEventById = (id: number) => {
    return events.value.find(e => e.id === id);
  };

  return {
    allEvents,
    favoriteEvents,
    toggleFavorite,
    getEventById
  };
}