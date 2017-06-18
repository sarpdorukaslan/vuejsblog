import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Post from '@/components/post/Post.vue'
import NewPost from '@/components/post/New.vue'
import EditPost from '@/components/post/Edit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/post', name: 'Post', component: Post },
    { path: '/admin/post/new', name: 'NewPost', component: NewPost },
    { path: '/admin/post/edit/:id', name: 'EditPost', component: EditPost }
  ]
})
