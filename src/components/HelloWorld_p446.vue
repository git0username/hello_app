p446
<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p> 
    <div class="form-inline my-2">
      <input type="text" v-model="data.find" class="form-control">
      <button @click="getData" class="btn btn-primary">Click</button>
    </div>
    <ul v-for="(item,key) in data.fire_data" v-bind:key="key" class="list-group">
      <li class="list-group-item text-left">
        <strong>{{key}}</strong><br>{{item}}</li>
    </ul>    
    </section>  
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from "vue";

let url = "https://test-23479-default-rtdb.firebaseio.com/person.json?orderBy=%22age%22"

export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Firebase',  
      message:'This is Firebase sample.', 
      find:'',     
      fire_data:{},         
    })

 //asyncの書き方
    const getData = async()=>{
      let range = data.find.split(',')
      const age_url = url + "&startAt=" + range[0] + "&endAt=" + range[1];

      const result = await axios.get(age_url).catch(()=>{
        data.message="ERROR";
        // data.fire_data={};
      });
      data.message = "get ID" + data.find;
      data.fire_data = await result.data != null ? result.data : "no data found";

      // data.fire_data = (await result.data) ?? "no data found";
  }
   

 //thenの書き方
    // const getData = ()=>{ 
    //   let id_url=url+data.find+'%22'
    //   console.log(id_url)       
    //   axios.get(id_url).then((result)=>{
    //     data.message='get ID=' + data.find
    //     if(result.data !=null){
    //       data.fire_data = result.data
    //     }else{
    //       data.fire_data ='no data found...'
    //     }        
    //   }).catch((error)=>{
    //     data.message='ERROR!'
    //     data.fire_data={}
    //     console.log(error)
    //   })
    //   }
         
    
    onMounted(()=>{
      getData()
    })
    return {data,getData}
  },
  
}
</script>

<style>

</style>