<template>
  <div class="details container">
    <h1 class="page-header">More details about contact:{{contact.Name}} {{contact.Surname}}
        <span class="pull-right">
            </span>
    </h1>
    <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>&nbsp;{{contact.PhoneNumber}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;{{contact.Email}}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Tag:&nbsp;{{contact.Tag}}</li>
            <li class="list-group-item">Adress:&nbsp; {{contact.Adress}}</li>
            <li class="list-group-item">City:&nbsp;{{contact.City}}</li>
            <li class="list-group-item">Country:&nbsp;{{contact.Country}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'contactdetails',
  data () {
    return {
      contact: ''
    }
  },
  methods:{
      getContact(ContactId){
          console.log(ContactId);
          this.$http.get('http://localhost:63271/api/ContactsGeneral/'+ContactId)
          .then(function(response){
            this.contact = response.body;
          });
      },
  },
  created: function(){
      this.getContact(this.$route.params.ContactId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>