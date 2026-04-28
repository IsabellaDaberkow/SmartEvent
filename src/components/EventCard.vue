<template>
  <ion-card>
    <img :src="event.imagem" :alt="event.titulo" />
    <ion-card-header>
      <ion-card-subtitle>{{ event.categoria }} - {{ event.data }}</ion-card-subtitle>
      <ion-card-title>{{ event.titulo }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{ event.descricao }}</p>
      <ion-button fill="clear" @click="$emit('favoritar', event.id)">
        <ion-icon slot="start" :icon="event.favorito ? heart : heartOutline"></ion-icon>
        {{ event.favorito ? 'Favoritado' : 'Favoritar' }}
      </ion-button>
      <ion-button fill="clear" :router-link="'/eventos/' + event.id">
        Ver Detalhes
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonIcon 
} from '@ionic/vue';
import { heart, heartOutline } from 'ionicons/icons';
import { defineProps, defineEmits } from 'vue';

interface Event {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  local: string;
  categoria: string;
  imagem: string;
  favorito: boolean;
}

const props = defineProps<{
  event: Event;
}>();

const emit = defineEmits(['favoritar']);
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>