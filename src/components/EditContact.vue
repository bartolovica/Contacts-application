<template>
  <div class="add container">
    <h1 class="page-header">Edit contact</h1>
            <h4>Please update contact information:</h4>
            <br>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="contact.Name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="contact.Surname">
            </div>
           <div class="form-group" v-for="(item, index) in contact.Emails" :key="index">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="item.Email">
            </div>
                <button type="button" class="btn btn-primary" @click="addMail">Add a new e-mail</button>
            <br>
             <br>
            <div class="form-group" v-for="(item, index) in contact.Numbers" :key="index">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="Phone Number" v-model="item.Number">
            </div>
                <button type="button" class="btn btn-primary" @click="addNumber">Add a new Phone number</button>
            <br>
             <br>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="contact.Adress">
            </div>
            <div class="form-group">
                <label>Postal Code</label>
                <input type="text" class="form-control" placeholder="Postal Code" v-model="contact.PostalCode">
            </div>
             <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="contact.City">
            </div>
            <div class="form-group">
                <label>Country</label>
                <input type="text" class="form-control" placeholder="Country" v-model="contact.Country">
            </div>
            <div class="form-group">
                <label>Tag</label>
                <input type="text" class="form-control" placeholder="Tag" v-model="contact.Tag">
            </div>
        <button type="submit" @click="updateContact" class="btn btn-primary">Update</button>
  </div>
</template>

<script> 
    export default {
    name: 'updateContact',
    data () {
        return {
        contact: {
            Emails: [],
            Numbers: [],
        },
        }
    },
    methods: {
        getContact(ContactId){
          this.$http.get('http://localhost:63271/api/Contacts/'+ContactId)
          .then(function(response){
            this.contact = response.body;
          });
      },
        updateContact(){
            if(!this.contact.Name && !this.contact.Surname){
                alert('You have to fill required fields:name i surname');
            } else {
                console.log(this.contact);
                this.$http.put('http://localhost:63271/api/updateContacts/' + this.$route.params.ContactId , this.contact)
                    .then(function(response){
                       this.$router.push({path: '/'});
                    });
            }
        },
         addMail() {
            this.contact.Emails.push({});
        },
        addNumber() {
            this.contact.Numbers.push({});
        }
    },
     created: function(){
      this.getContact(this.$route.params.ContactId);
  }  
    }
</script>