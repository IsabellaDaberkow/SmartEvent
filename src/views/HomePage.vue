<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>SmartEvent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="welcome-container">
        <ion-icon :icon="calendar" size="large" color="primary"></ion-icon>
        <h1>Bem-vindo ao SmartEvent</h1>
        <p>Descubra os melhores eventos locais em um só lugar.</p>
        <ion-button expand="block" router-link="/eventos">
          Ver Lista de Eventos
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { calendar } from 'ionicons/icons';
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

h1 {
  margin-top: 20px;
  font-weight: bold;
}

p {
  color: #666;
  margin-bottom: 30px;
}
</style>