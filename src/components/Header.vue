<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">VueJs Blog</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <router-link :to="{name: 'Home'}" tag="li" exact><a>Home</a></router-link>
          <router-link :to="{name: 'About'}" tag="li"><a>About</a></router-link>
          <router-link :to="{name: 'Contact'}" tag="li"><a>Contact</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="../navbar/">Default</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>
