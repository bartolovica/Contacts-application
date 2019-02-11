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
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="contact.Email">
                <button type="button" class="btn btn-primary" @click="addMail">Add another Mail</button>
                <br>
                <br>
                <input type="text" v-show="addAnotherMail" class="form-control" placeholder="Another Email" v-model="contact.NewEmail">

            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="Phone Number" v-model="contact.PhoneNumber">
                <button type="button" class="btn btn-primary" @click="addNumber">Add another Number</button>
                <br>
                <br>
                <input type="text" v-show="addAnotherNumber" class="form-control" placeholder="Another Phone number" v-model="contact.Email">
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
        addAnotherMail:false,
        addAnotherNumber:false,
        contact: {},
      
        }
    },
    methods: {
        addContact(){
            if(!this.contact.Name && !this.contact.Surname && !this.contact.Email && !this.contact.PhoneNumber){
              console.log(this.contact.Name);
                alert('clicked',this.contact.Name);
            } else {
                let newContact = {
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
                //console.log(newContact);
                this.$http.post('http://localhost:63271/api/addContact', newContact)
                    .then(function(response){
                        response.body.ContactId=newID
                        /* console.log(response)
                        if(response) */
                        
                 
                /* if(this.addAnotherNumber)
                {
                    let newNumber = {
                        PhoneNumber: this.contact.PhoneNumber,
                        ContactId: this.contact.ContactId
                    }
                    this.$http.post('http://localhost:63271/api/Numbers', newNumber)
                    .then(function(response){
                    });
                } */
                        
                       this.$router.push({path: '/'});
                    });

                               if(this.addAnotherMail)
                {
                    let newMail = {
                        Email: this.contact.NewEmail,
                        ContactId: newID,
                        ContactsTable: newContact
                    }
                    this.$http.post('http://localhost:63271/api/Emails', newMail)
                    .then(function(response){
                        this.addAnotherMail=false;
                    });
                }
                    
            }
        },
        addMail() {
            //console.log(this.addAnotherMail)
            this.addAnotherMail=true;
            

        },
        addNumber() {
            this.addAnotherNumber=true;
            
        }
    },
    }
</script>