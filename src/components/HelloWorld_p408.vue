<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ data.message }}</p> 
    <textarea v-model="data.mydata" rows="5" class="form-control"></textarea>
    </section>  
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from "vue";

// const url = "/data.txt"

export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Axios',  
      message:'This is axios sample.',
      mydata:'',    
    })

    // const getData = async()=>{
    //   let result = await axios.get(url)
    //   data.mydata = result.data
    // }

    const getData = async()=>{
      const url ="/data.txt";
      axios.get(url).then((result)=>{
        data.mydata = result.data
      })      
    };

    onMounted(()=>{
      getData()
    })

    return {data,getData}
  },
  
}
</script>

<style>

</style>