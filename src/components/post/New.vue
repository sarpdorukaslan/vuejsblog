<template>
  <div>

  </div>
</template>

<script>
  export default {
      data() {
          return {
            msg: ''
          }
      },
      created (){
        firebase.database().ref().child('posts').push({
          title: 'İlk Başlık',
          content: 'İlk Content',
          post_picture : 'http://balabla.com'
        }).key
      }
  }
</script>
