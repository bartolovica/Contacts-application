import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import contacts from './components/Contacts'
import addContact from './components/AddContact'
import contactDetails from './components/ContactDetails'
import editContact from './components/EditContact'

Vue.config.productionTip = false
Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter ({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: contacts
    },
    {
      path: '/addContact', component: addContact
    },
    {
      path: '/contactDetails/:ContactId', component: contactDetails
    },
    {
      path: '/editContact/:ContactId', component: editContact
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template:`<div id =app>
  <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Manage contacts app</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Contacts</router-link></li>
        <li><router-link to="/addContact">Add Contact</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>
  <router-view></router-view>
  </div>
  `
 
}).$mount('#app')
