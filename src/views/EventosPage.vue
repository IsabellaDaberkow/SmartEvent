<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Eventos Locais</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="event in allEvents" :key="event.id" :router-link="'/eventos/' + event.id">
          <ion-thumbnail slot="start">
            <img :src="event.imagem" />
          </ion-thumbnail>
          <ion-label>
            <h2>{{ event.titulo }}</h2>
            <p>{{ event.data }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
  IonList, 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonButtons, 
  IonBackButton 
} from '@ionic/vue';
import { useEvents } from '@/composables/useEvents';

const { allEvents } = useEvents();
</script>