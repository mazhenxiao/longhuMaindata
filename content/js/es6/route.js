/**
 * 页面路由功能获取右侧内容，最后名称为页面生成chunk切割文件名称
 */
import "babel-polyfill";  //兼容ie
Vue.use(VueRouter);
  let Home =callback=>require.ensure([],require=>callback(require('../view/Home.vue').default),"home"); 
const routes = [
    {
        name:"index",path:"/",component:Home
    }]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })
  window["router"] = router;
  export default router;