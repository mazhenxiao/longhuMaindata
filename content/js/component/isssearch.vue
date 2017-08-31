<template>
    <header>
        <h5>地产项目</h5>
        <p><input type="text" class="searchBox" id="J_searchBox" v-model="searchBoxText" v-on:keypress="EVENT_KEYPRESS()" placeholder="请输入地区或项目名称" /></p>
        <div class="treeBox mgT30" id="treeBox">
            <ul class="treeList"></ul>
        </div>
    </header>
</template>
<script>
import iss from "../iss.js";
import { iScroll } from "../../source/iscroll-4/src/iscroll.js"
class TreeBox {
    constructor() {
        this.data = [];//存放私有数据
        this.tree = "";
    }
    bindTree(url) {
        var th = this;
        th.tree = $('.treeList')
        var da = iss.ajax({
            url: iss.getAPI("menu/getMenuList"),  //菜单接口
            sucess(d) {

                if (d["data"]) {
                    th.data = [d.data];
                    th.tree.tree({
                        data: [d["data"]],
                        loadFilter: function(data) {
                            return data;
                        }
                    });
                    setTimeout(function() {
                        //treeBox

                        var myscroll = new iScroll("treeBox", {
                            hScrollbar: false,
                            vScrollbar: true,
                            checkDOMChanges: true
                        });
                    })
                }

            },
            error(da) {
                console.log(da);
            }
        })

    }
}
let $$TreeBox = new TreeBox(), time;
export default {
    "name": "isssearch",
    data() {
        return {
            searchBoxText: ""
        }
    },
    mounted() {

        $$TreeBox.bindTree();
    },
    watch: {
        "searchBoxText": function(n) {

        }
    },
    methods: {
        EVENT_KEYPRESS() {
            var th = this;
            if (time) { clearTimeout(time) }
            time = setTimeout(() => {
                iss.ajax
            }, 500)
        }
    }


}


</script>
<style lang="less">
@img: "/content/image/";
.tree-node {
    min-height: 40px;
    span {
        height: 40px;
        line-height: 40px;
    }
    span.tree-collapse {
        background:url("@{img}zc4.png") no-repeat left center;
    }
    span.tree-expanded {
        background:url("@{img}zc3.png") no-repeat left center;
    }
}
</style>
