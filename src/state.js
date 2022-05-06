import Vue from 'vue';
// Questo metodo, parte della global api, é quello che dietro le quinte permette a vue di monitorare il cambiamento dei dati dentro `data` e di notificare eventuali componenti che i dati sono appunto stati mutati.

// creo un oggetto usando .observable
const state = Vue.observable({
    searchDisk: ''
})

export default state