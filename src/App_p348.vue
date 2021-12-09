<template>
  <div id="app">
    <div>
      <router-link to="/index/taro" class="btn btn-primary mx-2">Go To Top</router-link>
      <router-link to="/jsx/hanako" class="btn btn-warning">Go To jsx</router-link>
    </div>
    <hr />    
    <router-view></router-view>   
  </div>  
</template>
<script>
  export default {
    name: 'app',
    created() {
      console.log("**** App Created! *****")
    },
    mounted() {
      console.log("---- App Mounted! ----")
    },
    data() {
        return {
          title: 'Router'
        }
      }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>