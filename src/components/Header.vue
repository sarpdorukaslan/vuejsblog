<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Sarp Doruk ASLAN Blog</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link to="/" activeClass="active" tag="li" exact><a>Home</a></router-link>
            <router-link to="/about" activeClass="active" tag="li"><a>About</a></router-link>
            <router-link to="/contact" activeClass="active" tag="li"><a>Contact</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!--<router-link to="/login" activeClass="active" tag="li"><a data-toggle="modal" data-target="#loginModal">Login</a></router-link>-->
            <li v-if="isLogged">
              <a href="#"  @click="signOut()">Logout</a>
            </li>
            <li v-else>
              <a href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Sign In</h4>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
            email: '',
            password: '',
            isLogged: false
          }
      },
      created() {
        let _this = this
//        firebase.auth().onAuthStateChanged(function (user) {
//          if (user) {
//            _this.isLogged = true
//            console.log('kullanıcı var')
//          } else {
//            _this.isLogged = false
//            console.log('kullanıcı yok')
//          }
//        });
      },
    methods: {
          signOut() {
            let _this = this
            console.log("deneme")
            firebase.auth().signOut().then(function() {
              _this.isLogged = false
            }).catch(function(error) {
              console.log('Sign out error : ' + error)
            });
          },
      signIn() {
        let _this = this

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(function (error) {
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          })
          .then(function (user) {
            $("#loginModal").modal("hide")

            _this.isLogged = true
            console.log(user)
          });
      }
    }
  }
</script>
