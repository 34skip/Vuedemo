<template>
  <div>
    <div>
      <canvas id="clock" height="200px" width="200px"></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    components: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
      text-align: center;
      margin-top: 250px;
    }
  #clock{
    border: 1px solid #ccc;
  }
</style>
