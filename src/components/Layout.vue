<style>
    html,body{margin: 0;padding: 0;}
    html,body,#app,.layout,.el-container,.el-menu{height: 100%}
</style>
<style scoped>
    .el-header{border-bottom: solid 1px #e6e6e6;}
</style>
<template>
    <div class="layout">
        <el-container>
            <el-header style="padding: 0">
                <!--<el-image style="float: left;height: 58px" :src="loginImageUrl"></el-image>-->
                <div style="float:left;display:block;height:60px;font-size: 1.2em;">
                    <img src="../assets/logo.png"  style="height: 100%;vertical-align:middle">
                    开发运维管理平台（运维系统）
                </div>
                <el-menu class="el-menu-demo" mode="horizontal" style="float: right;">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></el-menu-item>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            :collapse="isCollapse">
                        <el-menu-item index="4" style="text-align: center;background-color: #efefef;height: 40px;line-height: 40px;">
                            <i :class="collapseClass" @click="isCollapseClick"></i>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data(){
            return {
                isCollapse: false,
                collapseClass: 'el-icon-s-fold'
            }
        },
        methods: {
            isCollapseClick(){
                this.isCollapse = !this.isCollapse
                this.collapseClass = this.isCollapse?'el-icon-s-unfold':'el-icon-s-fold'

            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>
