<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/eventos"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalhe do Evento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content v-if="event">
      <event-card :event="event" @favoritar="toggleFavorite"></event-card>
      
      <div class="ion-padding">
        <h3>Localização</h3>
        <p>{{ event.local }}</p>
        
        <h3>Sobre o Evento</h3>
        <p>{{ event.descricao }}</p>
      </div>
    </ion-content>
    
    <ion-content v-else class="ion-padding">
      <p>Evento não encontrado.</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonBackButton 
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useEvents } from '@/composables/useEvents';
import EventCard from '@/components/EventCard.vue';

const route = useRoute();
const { getEventById, toggleFavorite } = useEvents();

const eventId = computed(() => parseInt(route.params.id as string));
const event = computed(() => getEventById(eventId.value));
</script>