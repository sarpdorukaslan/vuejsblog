<template>
  <div>
    <div v-for="post in posts">
      <img :src="post.post_picture" :alt="post.title">
      <h1>{{ post.title }}</h1>
      <p v-html="post.content"></p>
    </div>
  </div>
</template>
<script>
  export default {
    data()
    {
      return {posts: {}}
    },
    created() {
      let _this = this
      firebase.database().ref('/posts').on("value", function (snapshot) {
        _this.posts = snapshot.val()
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }
  }
</script>
