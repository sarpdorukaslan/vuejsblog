<template>
  <div>
    <ul>
      <li v-for="post in posts">
          {{post.title}}
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    data()
    {
      return { posts : {}}
    },
    created() {
      let _this = this
      firebase.database().ref('/posts').on("value", function(snapshot) {
        _this.posts = snapshot.val()
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }
  }
</script>