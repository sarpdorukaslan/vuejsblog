import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'

import Login from '@/components/Login'
import Post from '@/components/post/Post.vue'
import Posts from '@/components/post/Posts.vue'
import NewPost from '@/components/post/New.vue'
import EditPost from '@/components/post/Edit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/post', name: 'Post', component: Post },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },

    { path: '/admin/posts', name: 'Posts', component: Posts },
    { path: '/admin/posts/new', name: 'NewPost', component: NewPost },
    { path: '/admin/posts/edit/:id', name: 'EditPost', component: EditPost }
  ]
})
