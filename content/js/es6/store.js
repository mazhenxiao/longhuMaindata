
import Vuex,{Store} from "Vuex"

Vue.use(VueRouter);
Vue.use(Vuex);

let Home = {
    state:{
        title:"mazhenxiao"
    },
    mutations:{

    },
    actions:{

    }
}

 let store = new Vuex.Store({
    state:{
        title:"mazhenxiao"
    }
}); 

export {store,Vue,VueRouter,Vuex}