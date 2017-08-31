<template>
   <header class="pageHead">
            <ul>
                <li class="active">项目身份证</li>
                <li>项目概括</li>
                <li>项目驾驶仓</li>
                <li>团队资源</li>
            </ul>
            <p><a href="javascript:;" class="btn-adjust active">调整</a><a class="btn-approve" href="javascript:;">审批过程</a></p>
        </header>
</template>
<script>
export default {
      name:"issheader"
}
</script>
<style lang="less" scoped>
/* 通用头 */
@bg:#ecedf0;
@list:#31395d;
@listH:#282f4c;
@color:#31395d;
@font:#9d9d9d;
@sj:#fff solid 10px;
@sj1:transparent solid 5px;
@border:#ccc solid 1px;
@img:"/content/image/";
.pageHead{ margin-bottom:30px;overflow: hidden;
    ul{
        padding-top:10px;float:left;
        li{ display: inline-block;padding:5px 2px; font-size:14px;border-bottom:#fff solid 3px;color:@font;margin-left:40px;cursor:pointer;
            &.active,&:hover{ border-bottom:@color solid 3px;color:@color;}

        }
    }
    p{ float:right;margin-right:167px;padding-top:15px;
        a{ display: inline-block;font-size:14px;padding-left:20px;margin-left:20px;text-decoration: none;opacity:0.4;
            &:hover{ text-decoration: none; opacity:1 }
        }
        a.active{ opacity:1}
        a.btn-adjust{ background:url("@{img}tz.png")no-repeat 0 50%}
        a.btn-approve{background:url("@{img}sp.png")no-repeat 2px 50%}
    }
   
}
</style>
