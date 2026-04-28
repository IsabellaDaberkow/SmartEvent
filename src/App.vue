<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Início</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/eventos">
          <ion-icon :icon="listOutline"></ion-icon>
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoritos" href="/favoritos">
          <ion-icon :icon="heartOutline"></ion-icon>
          <ion-label>Favoritos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/perfil">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script setup lang="ts">
import { 
  IonApp, 
  IonRouterOutlet, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/vue';
import { 
  homeOutline, 
  listOutline, 
  heartOutline, 
  personOutline 
} from 'ionicons/icons';
</script>