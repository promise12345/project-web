import Home from '../view/Home'
import About from '../view/About'
import Mine from '../view/Mine'

export const Routes = [
  {
    path: '/home',
    component: Home,
    content: '首页'
  },
  {
    path: '/about',
    component: About,
    content: '关于',
    routes: [
      {
        path: '/mine',
        component: Mine,
      }
    ]
  },
  {
    path: '/mine',
    component: Mine,
    content: '我的'
  }
]