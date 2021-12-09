<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p> 
    <table class="table table-light table-striped">
      <tbody class="text-left">
        <tr>
          <th style="width:200px">User ID </th>
          <td>{{data.json_data ? data.json_data.userId : '-'}}</td> 
        </tr>
        <tr>
          <th>ID</th>
          <td>{{data.json_data ? data.json_data.id : '-'}}</td>
        </tr>
         <tr>
          <th>Title</th>
          <td>{{data.json_data ? data.json_data.title : '-'}}</td>
        </tr>
         <tr>
          <th>Body</th>
          <td>{{data.json_data ? data.json_data.body : '-'}}</td>
        </tr>
      </tbody>
    </table>
    </section>  
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from "vue";

let url = "https://jsonplaceholder.typicode.com/posts/"

export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Axios',  
      message:'This is axios sample.',
      json_data:null,         
    })

    // const getData = async()=>{
    //   let result = await axios.get(url)
    //   data.mydata = result.data
    // }

    const getData = ()=>{
      let id = 1 //id番号      
      axios.get(url+id).then((result)=>{
        data.json_data = result.data
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