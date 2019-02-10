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
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="contact.Email">
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="Phone Number" v-model="contact.PhoneNumber">
            </div>
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
        contact: {},
        }
    },
    methods: {

        getContact(ContactId){
          console.log(ContactId);
          this.$http.get('http://localhost:63271/api/ContactsGeneral/'+ContactId)
          .then(function(response){
            this.contact = response.body;
          });
      },
        updateContact(){
            if(!this.contact.Name && !this.contact.Surname && !this.contact.Email && !this.contact.PhoneNumber){
              console.log(this.contact.Name);
                alert('clicked',this.contact.Name);
            } else {
                let updateContact = {
                    ContactId:this.ContactId,
                    Name: this.contact.Name,
                    Surname: this.contact.Surname,
                    PhoneNumber: this.contact.PhoneNumber,
                    Email: this.contact.Email,
                    Adress: this.contact.Adress,
                    PostalCode: this.contact.PostalCode,
                    City: this.contact.City,
                    Country: this.contact.Country,
                    Tag: this.contact.Tag
                }
                console.log(updateContact);
                this.$http.put('http://localhost:63271/api/ContactsGeneral/'+this.$route.params.ContactId, updateContact)
                    .then(function(response){
                        //console.log(updateContact)
                       this.$router.push({path: '/'});
                    });
            }
        },
    },
     created: function(){
      this.getContact(this.$route.params.ContactId);
  }  
    }
</script>