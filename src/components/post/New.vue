<template>
  <div>

  </div>
</template>

<script>
  export default {
      created: {
        firebase.database().ref('posts/' + null).set({
          title: 'İlk Başlık',
          content: 'İlk Content',
          post_picture : 'http://balabla.com'
        })
      },
  }
</script>
