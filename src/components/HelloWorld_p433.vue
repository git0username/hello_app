<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p> 
    <table class="table table-light table-striped">
      <thead class="table-dark text-center">
        <tr><th>Name</th><th>Age</th><th>Mail</th></tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="(item, key) in data.fire_data" v-bind:key="key">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{key}}</td>
        </tr>         
      </tbody>
    </table>
    </section>  
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from "vue";

let url = "https://test-23479-default-rtdb.firebaseio.com/person.json"

export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Firebase',  
      message:'This is Firebase sample.',      
      fire_data:null,         
    })

 //asyncの書き方
    const getData = async()=>{
      const result = await axios.get(url);
      data.fire_data = result.data
    }
 //thenの書き方
    // const getData = ()=>{        
    //   axios.get(url).then((result)=>{
    //     data.fire_data = result.data
    //   })}

      // }).catch((error)=>{
      //   data.message='ERROR!'
      //   data.json_data = null
      //   console.og(error)
      // })      
    
    onMounted(()=>{
      getData()
    })
    return {data}
  },
  
}
</script>

<style>

</style>