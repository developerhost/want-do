import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBQ_QL7Xj9kHr8AUJU-4k2hEzmKmGxZftI",
  authDomain: "want-do.firebaseapp.com",
  projectId: "want-do",
  storageBucket: "want-do.appspot.com",
  messagingSenderId: "118442981768",
  appId: "1:118442981768:web:7184f5c68727855397e23d",
  measurementId: "G-LM5MM0HH8Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
