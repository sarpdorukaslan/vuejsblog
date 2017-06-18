import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'

import Post from '@/components/post/Post.vue'
import Posts from '@/components/post/Posts.vue'
import NewPost from '@/components/post/New.vue'
import EditPost from '@/components/post/Edit.vue'
import DeletePost from '@/components/post/Delete.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/post', name: 'Post', component: Post },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },

    { path: '/admin/posts', name: 'Posts', component: Posts, meta: { requiresAuth: true} },
    { path: '/admin/posts/new', name: 'NewPost', component: NewPost, meta: { requiresAuth: true} },
    { path: '/admin/posts/edit/:id', name: 'EditPost', component: EditPost, meta: { requiresAuth: true} },
    { path: '/admin/posts/delete/:id', name: 'DeletePost', component: DeletePost, meta: { requiresAuth: true} }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (!user) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
