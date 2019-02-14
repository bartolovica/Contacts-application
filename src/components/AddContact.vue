<template>
  <div class="add container">
    <h1 class="page-header">Add contact</h1>
            <h4>Please insert contact information:</h4>
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
                <button type="button" class="btn btn-primary" @click="addMail">Add new e-mail</button>
                <br>
                <br>
                <div v-for="(item, index) in contact.Emails" :key="index">
                     <label>Email</label>
                    <input type="text" class="form-control" placeholder="Enter new e-mail" v-model="item.Email">
                </div>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="addNumber">Add new Phone number</button>
                <br>
                <br>
                <div v-for="(item, index) in contact.Numbers" :key="index">
                    <label>Phone number</label>
                    <input type="text" class="form-control" placeholder="Enter new Phone number" v-model="item.Number">
                </div>
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
        <button type="submit" @click="addContact" class="btn btn-primary">Submit</button>
      </div>
</template>

<script> 
    export default {
    name: 'addContact',
    data () {
        return {
        contact: {
            Emails: [],
            Numbers: [],
        }      
        }
    },
    methods: {
        addContact(){
            if(!this.contact.Name && !this.contact.Surname && !this.contact.Email && !this.contact.PhoneNumber){
              alert('You have to fill required fields:name i surname');
            } else {
                this.$http.post('http://localhost:63271/api/addContact', this.contact)
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
    }
    }
</script>