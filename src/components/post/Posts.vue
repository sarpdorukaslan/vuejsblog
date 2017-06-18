<template>
  <div>
    <h1>All Admin Posts</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Title</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" (post, postId ) in posts">
        <td><a :href="'/post/' + postId">{{ post.title }}</a></td>
        <td><a href="#"><i class="fa fa-trash-o"></i></a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data()
    {
      return { posts : {} }
    },
    created() {
      let _this = this
      firebase.database().ref('/posts').on("value", function(snapshot) {
        _this.posts = snapshot.val()
        console.log(snapshot.val())
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
  }
</script>
