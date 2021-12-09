<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ $store.state.message }}</p> 
    <hr>
    <div class="alert alert-dark"
    @click.exact="$store.commit({type:'count', message:'add 1!', add:1})"
    @click.shift="$store.commit({type:'count', message:'add 5!', add:5})"
    @click.ctrl="$store.commit({type:'count', message:'add 10!', add:10})"
    >
    <!-- @click.ctrl="$store.commit('reset')"> -->
    <a class="h5"
    @click.stop="$store.commit('reset')">
      clicked: {{$store.state.counter}}   
    </a>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Vuex',      
    })
    
    return {
      data     
    }
  }
}
</script>

<style>

</style>