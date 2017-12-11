<template>
  <div class="">
    <!-- tabcontainer -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="首页">
        <index-home></index-home>
      </mt-tab-container-item>
      <mt-tab-container-item id="达人">
        <index-master></index-master>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <index-my></index-my>
      </mt-tab-container-item>
    </mt-tab-container>

  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <img slot="icon" v-bind:src="selected === '首页'?require('../image/homeactive.png'):require('../image/home.png')">
      首页
    </mt-tab-item>
    <mt-tab-item id="达人">
      <img slot="icon" src="../image/master.png">
      达人
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../image/my.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
  import indexHome from './home'
  import indexMaster from './master'
  import indexMy from './my'
  export default {
    name: 'index',
    components: {
      indexHome,
      indexMaster,
      indexMy
    },
    data () {
      return {
        selected: '首页',
        active: '',
        msg: 'Welcome to Your Vue.js App'
      }
    },
    watch: {
      selected: function (e) {
        console.log(e)
        if (e === '首页') {

        }
      }
    },
    methods: {
      changeState () {
        console.log(123)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
}
.mint-tabbar > .mint-tab-item.is-selected{
  color:#f87E00
}
.mint-tabbar > .mint-tab-item{
  color:#666666;
}
a {
  color: #42b983;
}
</style>
