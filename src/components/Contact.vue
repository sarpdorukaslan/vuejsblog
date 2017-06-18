<template>
  <div>
    <h1>Contact</h1>
      <ul>
          <li>
                {{ contact.content }}
          </li>
          <li> {{ contact.facebook }}</li>
      </ul>
  </div>
</template>
<script>
  export default {
    data()
    {
      return { contact : {}}
    },
    created() {
      let _this = this
      firebase.database().ref('/contact/').once('value').then(function(snapshot) {
        _this.contact = snapshot.val()
      });

    }
  }
</script>
