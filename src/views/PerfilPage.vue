<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil / Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="profile-header">
        <ion-avatar>
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <h2>Usuário Exemplo</h2>
      </div>

      <ion-list>
        <ion-item>
          <ion-label position="stacked">Seu Nome</ion-label>
          <ion-input v-model="userName" placeholder="Digite seu nome"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label>
            <h3>Sobre o SmartEvent</h3>
            <p>Versão 1.0.0</p>
            <p>Desenvolvido para consulta de eventos locais.</p>
          </ion-label>
        </ion-item>
      </ion-list>
      
      <p v-if="saveMessage" class="save-message">{{ saveMessage }}</p>
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
  IonLabel, 
  IonInput, 
  IonAvatar 
} from '@ionic/vue';
import { ref, watch } from 'vue';

const userName = ref('Usuário Exemplo' );
const saveMessage = ref('');

watch(userName, (newValue) => {
  console.log('Nome alterado para:', newValue);
  saveMessage.value = 'Alteração salva com sucesso!';
  
  // Limpa a mensagem após 3 segundos
  setTimeout(() => {
    saveMessage.value = '';
  }, 3000);
});
</script>

<style scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

ion-avatar {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.save-message {
  color: var(--ion-color-success);
  text-align: center;
  margin-top: 10px;
  font-size: 0.9em;
}
</style>