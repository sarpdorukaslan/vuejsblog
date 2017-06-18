<template>
  <div>
    <h1>The post</h1>
    {{ post }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: '',
        postId: this.$route.params.id
      }
    },
    created() {
      let _this = this
      firebase.database().ref('/posts/' + _this.postId).once('value').then(function (snapshot) {
        _this.post = snapshot.val();
      })
    }
  }
</script>
