//滚动控件api http://www.360doc.com/content/14/0724/11/16276861_396699901.shtml
import router from "./route.js";
import iss from "../iss.js";

let main = new Vue({
   router
}).$mount("#contentView");


let tree = new Vue({
    el:".contLeftList",
    components:{
        isssearch:callback=>require.ensure([],require=>callback(require('../component/isssearch.vue').default),"tree")
    }
})

/* 独立js */
class Index{
   constructor(){
       var th =this;
        $(function(){
            th.bindminHeight();
    
        })
   }
   bindminHeight(){
   var h =  iss.minHeight(".contLeftMenu,.contLeftList"),$rb =$(".contentRightBoxTen"),$rb2 = $(".contentRightBox");
       h = Math.max(h,640,$rb.height())
      $rb.css({"min-height":h-10});
      //console.log(h);
      
      document.body.onresize = this.resize;
      window.onresize = this.resize;
      window.onscroll = this.resize;
   }
   resize(){
    var $rb =$(".contLeftMenu,.contLeftList"),$rb2 = $(".contentRightBox"),h=$(window).height()-60;
    var  _h = Math.max(h,640,$rb2.height());
   $rb.css({"min-height":_h-10});
        
         var h2 = $rb2.height();
        
   }
   

   //
   

}
let ClassIndex = new Index();
export default ClassIndex;