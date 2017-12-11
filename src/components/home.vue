<template>
  <div class="hacker-news-list">
    <router-view></router-view>
  <div class="hacker-news-item" v-for="(item, key) in list">
    <span class="num" v-text="key + 1"></span>
    <p>
      <a target="_blank" :href="item.url" v-text="item.title"></a>
    </p>
    <p>
      <small>
        <span v-text="item.points"></span>
        points by
        <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
           v-text="item.author"></a>
        |
        <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
           v-text="item.num_comments + ' comments'"></a>
      </small>
    </p>
  </div>
  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
  <span slot="no-more">
    There is no more Hacker News :(
  </span>
  </infinite-loading>
  <div style="width: 100%;height: 50px"></div>
</div>
</template>

<script type="text/ecmascript-6">
  import InfiniteLoading from 'vue-infinite-loading';
  import axios from 'axios';
  const api = 'http://hn.algolia.com/api/v1/search_by_date';
  export default {
    data() {
      return {
        list: [],
        tag: 'story'
      };
    },
    methods: {
      onInfinite() {
        axios.get(api, {
          params: {
            tags: this.tag,
            page: this.list.length / 20 + 1
          }
        }).then((res) => {
          if (res.data.hits.length) {
            this.list = this.list.concat(res.data.hits);
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            if (this.list.length / 20 === 10) {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        });
      },
//      changeFilter() {
//        this.list = [];
//        this.$nextTick(() => {
//          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
//        });
//      }
    },
    components: {
      InfiniteLoading
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100px;
  height: 100px;
  background: red;
}
.demo-inner {
  margin-left: 20px;
  width: 261px;
  height: 455px;
  border: 1px solid #ccc;
  overflow: auto;
}
.hacker-news-list .hacker-news-header {
  padding: 2px;
  line-height: 14px;
  background-color: #f60;
}
.hacker-news-list {
  min-height: 455px;
  background-color: #f6f6ef;
}
.hacker-news-list .hacker-news-header select {
  float: right;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
}
</style>
