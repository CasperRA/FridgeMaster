import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";


const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

console.log(database)


createApp(App).use(router).mount('#app')