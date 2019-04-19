<template>
  <div id="app">
    <router-view/>
    <FooterBar v-if="isShow"/>
    <section>
      <div>
        <h3>全国通讯录</h3>
        <span @click="invokePushItems('test')">加入收藏列</span>
      </div>
    </section>
    <ul>
      <li v-for="(val, index) in arrList" :key="index">
        <h5>{{val}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import FooterBar from "./components/FooterBar";
  import footerStatus from "./store/modules/footerStatus";

  export default {
    name: 'App',
    components: {
      FooterBar,
    },
    data() {
      return {
        // isShow: true,
      }
    },
    computed: {
      // 这里的...是超引用，ES6的语法，意思是state有多少属性值我可以在这里放多少属性值
      // 注意区别就是state.footerStatus，里面定义的showFooter是指footerStatus.js里state的showFooter
      ...mapState({ isShow: state => state.footerStatus.showFooter }),
      // 以下mapGetters直接获取store里的state，无法修改state，而mapState是触发的store里的mutations引起state的改变并拿到最新值，
      // ...mapGetters('footerStatus', {
      //   isShow: 'isShow',
      // }),

      // 获取collections.js里的getters
      ...mapGetters('collection', { arrList: 'renderCollects' })
    },
    mounted() {
      console.log(this.$store.state.footerStatus)
    },
    methods: {
      // collection是指modules文件夹下的collection.js， invokePushItems为该文件下actions里的方法
      ...mapActions('collection', [ 'invokePushItems' ])
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
