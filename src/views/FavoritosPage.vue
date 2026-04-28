<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="favoriteEvents.length === 0" class="empty-state ion-padding">
        <ion-icon :icon="heartOutline" size="large" color="medium"></ion-icon>
        <p>Você ainda não favoritou nenhum evento.</p>
      </div>
      
      <ion-list v-else>
        <ion-item v-for="event in favoriteEvents" :key="event.id" :router-link="'/eventos/' + event.id">
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
  IonIcon 
} from '@ionic/vue';
import { heartOutline } from 'ionicons/icons';
import { useEvents } from '@/composables/useEvents';

const { favoriteEvents } = useEvents();
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #666;
}
</style>