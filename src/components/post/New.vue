<template>
  <div>
      <h1>New Post</h1>
    <form @submit.prevent="savePost">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" class="form-control">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <quill-editor id="content" v-model="content"></quill-editor>
      </div>
      <button class="btn btn-primary">Save Post</button>
    </form>
  </div>
</template>

<script>
  export default {
      data() {
          return {
            title: '',
            content: ''
          }
      },
    methods: {
      savePost() {
        firebase.database().ref().child('posts').push({
          title: this.title,
          content: this.content,
          post_picture : 'http://balabla.com'
        }).key
        this.title = ''
        this.content = ''
        this.$router.push('/admin/posts')
      }
    }
  }
</script>
