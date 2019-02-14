<template>
  <div class="contacts container">
    <h1 class="page-header">Manage contacts</h1>
    <input class="form-control" placeholder="Search (by surname,name,tag):" v-model="searchInput"><button class="btn btn-default" v-on:click="searchContacts(searchInput)">Search</button>
    <button class="btn btn-default" v-show="cancelSearchButtonShow" v-on:click="cancelSearch()">Cancel search</button>
    <br/>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.ContactID">
            <td>{{contact.Name}}</td>
            <td>{{contact.Surname}}</td>
            <td>{{contact.Tag}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/contactDetails/'+contact.ContactId">Details</router-link></td>
            <td><router-link class="btn btn-default" v-bind:to="'/editContact/'+contact.ContactId">Edit</router-link></td>
            <td><button class="btn btn-danger" v-on:click="deleteContact(contact.ContactId)">Delete</button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'contacts',
    data () {
      return {
        contacts: [],
        searchInput:'',
        cancelSearchButtonShow:false
      }
    },
    methods: {
      getContacts(){
        this.$http.get('http://localhost:63271/api/getAllContacts')
          .then(function(response){
           this.contacts = response.body;
          });
      },
      searchContacts(searchInput)
      { 
        this.cancelSearchButtonShow=true;
        this.$http.get('http://localhost:63271/api/searchContacts/' + searchInput)
          .then(function(response){
            if(response) { 
              this.contacts = response.body;
              }
              else {
                alert("No search results!")
              }
          
          });
      },
      cancelSearch() {
         this.$router.go(0);
         this.cancelSearchButtonShow=false;
      },
      deleteContact(id){
          this.$http.delete('http://localhost:63271/api/deleteContact/'+id)
          .then(function(response){
            alert("Contact deleted")
            this.$router.go(0);
          });
      }
    },
    created: function(){
      this.getContacts();
    }
  }
</script>
<style scoped>
</style>