<template>
  <div>
    <div v-if="isLogged">
      Logged in
    </div>
    <div v-else class="col-md-4 col-md-offset-4">
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" name="email" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" name="password" class="form-control"/>
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    </div>

  </div>
</template>

<script>

</script>

<style scope>

</style>
