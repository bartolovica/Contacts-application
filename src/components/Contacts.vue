<template>
  <div class="contacts container">
    <h1 class="page-header">Manage contacts</h1>
    <input class="form-control" placeholder="Search (by surname,name,tag):" v-model="filterInput">
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.ContactID">
            <td>{{contact.Name}}</td>
            <td>{{contact.Surname}}</td>
            <td>{{contact.PhoneNumber}}</td>
            <td>{{contact.Email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/contactDetails/'+contact.ContactId">Details</router-link></td>
            <td><router-link class="btn btn-default" v-bind:to="'/editContact/'+contact.ContactId">Edit</router-link></td>
            <td><button class="btn btn-danger" v-on:click="deleteContact(contact.ContactId)">Delete</button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
 import axios from "axios";
  export default {
    name: 'contacts',
    data () {
      return {
        contacts: [],
        filterInput:''
      }
    },
    methods: {
      getContacts(){
        this.$http.get('http://localhost:63271/api/getAllContacts')
          .then(function(response){
           this.contacts = response.body;
            //console.log(response.body);
          });
            //console.log(response);
            /* axios({ method: "GET", "url": "http://localhost:63271/Contacts" }).then(result => {
                this.contacts = result.data;
                  //console.log(result.data);
            }, error => {
                console.error(error);
          }); */
      },
      deleteContact(id){
          this.$http.delete('http://localhost:63271/api/ContactsGeneral/'+id)
          .then(function(response){
            this.$router.go(0);
          });
      }
    },
    created: function(){
    
      this.getContacts();
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>