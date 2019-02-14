<template>
  <div class="details container">
    <h1 class="page-header">More details about contact:{{contact.Name}} {{contact.Surname}}
        <span class="pull-right">
            </span>
    </h1>
    <ul class="list-group">
      <div v-for="(item, index) in contact.Numbers" :key="index">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>&nbsp;{{item.Number}}</li>
      </div>
      <div v-for="(item, index) in contact.Emails" :key="index">  
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;{{item.Email}}</li>
      </div>
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
          this.$http.get('http://localhost:63271/api/Contacts/'+ContactId)
          .then(function(response){
            this.contact = response.body;
            console.log(response);
          });
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
<style scoped>
</style>