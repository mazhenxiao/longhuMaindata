<template>
    <article class="HomePage">
        <issheader title="自定义组件-头部" />
        <section class="HomePage-Project">
            <header class="PageTitle">
                <p class="Left">
                    <span>项目总图</span>
                </p>
                <p class="Right">
                    <a href="javascript:;" class="btn-project active">项目总图</a>
                    <a href="javascript:;" class="btn-stage mgL20">分期总图</a>
                </p>
            </header>
            <div>
                <div class="ImageBox">
                    加载中请稍后。。。
                </div>
            </div>
        </section>
        <section class="HomePage-Project mgT20">
            <header class="PageTitle">
                <p class="Left">
                    <span>项目分期图</span>
                </p>
                <p class="Right">
                    <a href="javascript:;" class="btn-project active">项目总图</a>
                    <a href="javascript:;" class="btn-stage mgL20">分期总图</a>
                </p>
            </header>
            <div>
                <div class="ImageBox">
                    加载中请稍后。。。
                </div>
            </div>
        </section>
        <section class="HomePage-Project mgT20">
            <header class="PageTitle">
                <p class="Left">
                    <span>项目计划</span>
                    <span>（数据来源运营全景计划）</span>
                </p>
                <p class="Right">
                    <a href="javascript:;" class="btn-adjust active">组团调整</a>
                </p>
            </header>
            <div class="h400">
                <table id="projectTable"></table>
            </div>
        </section>
           <section class="HomePage-Project mgT20">
            <header class="PageTitle">
                <p class="Left">
                    <span>项目计划</span>
                    <span>（数据来源运营全景计划）</span>
                </p>
                <p class="Right">
                    <a href="javascript:;" class="btn-adjust active">组团调整</a>
                </p>
            </header>
            <div class="h400">
                <table id="projectTableEdit"></table>
            </div>
        </section>
    </article>
</template>

<script>
import issheader from "../component/issheader.vue";
Vue.component(issheader.name, issheader); //绑定组件为全局组件

let $$home;
class HomeClass {
    constructor() {

    }
    BIND_GUILDTABLE_PROJECT() {  //绑定锁定表格数据
        
        var projectTable = $('#projectTable')
        projectTable.datagrid({
            //url: 'datagrid_data.json',
            width: "auto",
            height: 400,
            fitColumns: true,
            singleSelect: true,
            data: [
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20" }, 

            ],
            frozenColumns:[
                 [
                    { field:"title",title:"时间节点",rowspan:1,width:200,align:"center",fixed:true}
                 ]
            ],
            columns: [
                [
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" },
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center" }
                ], 
                [
                    { field: 'n1', title: '状态',colspan:1,width:100,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:100,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:100,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:100,align:"center"}
                ]
            ]
        });

        
    }
    BIND_GUILDTABLE_PROJECTEDIT(){
let  _format=(arg)=>{
      return `<input type="text" value="${arg}" />`
 }
 var projectTable = $('#projectTableEdit')
        projectTable.datagrid({
            //url: 'datagrid_data.json',
            width: "auto",
            height: 400,
            fitColumns: true,
            nowrap:true,
            singleSelect: true,
            data: [
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 
                 { "title":"土地获取时间","code": "20", "name": "name", "price": "20","n1":"","n2":"","n3":"","n4":""}, 

            ],
            frozenColumns:[
                 [
                    { field:"title",title:"时间节点",rowspan:1,width:200,align:"center",fixed:true},
                    { field: 'code', title: '1组团',rowspan:1,align:"center"},
                    { field: 'name', title: '2组团',rowspan:1,align:"center"}
                 ]
            ],
            columns: [
                [
                   
                    { field: 'code', title: '1组团',colspan:2,align:"center",width:250,formatter:_format},
                    { field: 'name', title: '2组团',colspan:2,align:"center",width:250,formatter:_format},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"},
                    { field: 'code', title: '1组团',colspan:2,align:"center"},
                    { field: 'name', title: '2组团',colspan:2,align:"center"}
                ],
                [
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center",formatter:_format},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center",formatter:_format},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center",formatter:_format},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center",formatter:_format},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n1', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n2', title: '时间',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n3', title: '状态',colspan:1,width:200,fixed:true,align:"center"},
                    { field: 'n4', title: '时间',colspan:1,width:200,fixed:true,align:"center"}
                ]
            ]
        });
    }

}
$$home = new HomeClass();



export default {
    name: "Home",
    mounted() {
        $$home.BIND_GUILDTABLE_PROJECT();//绑定锁定表头数据
        $$home.BIND_GUILDTABLE_PROJECTEDIT();//编辑数据
    },
    computed: {},
    watch() {

    },
    methods() {

    }

}



</script>
<style lang="less" >
@bd:#fdfeff;
.h400 {
    min-height: 400px;
}

.datagrid-view1{
    background:@bd;
}
</style>
