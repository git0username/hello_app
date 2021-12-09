p450
<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
    <div class="text-left"> 
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="data.email" class="form-control">
    </div>
    <div class="form-group">
      <label>Name</label>
      <input type="text" v-model="data.username" class="form-control">
    </div>
    <div class="form-group">
      <label>Age</label>
      <input type="number" v-model="data.age" class="form-control">
    </div>
    <div class="form-group">
      <label>Tel</label>
      <input type="text" v-model="data.tel" class="form-control">
    </div>
      <button @click="addData" class="btn btn-primary">Click</button>
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

let url = "https://test-23479-default-rtdb.firebaseio.com/person"

export default {  
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Firebase',  
      message:'This is Firebase sample.',
      email:'',
      username:'', 
      tel:'', 
      age:0,             
      fire_data:{},         
    })

    const addData = ()=>{
      if(data.username==''){
        console.log('no-username')
        return
      }
      let add_url =url + '/' + data.email + '.json'
      let item ={
        'name':data.username,
        'age':data.age,
        'tel':data.tel,
      }

      axios.put(add_url,item).then(()=>{
        data.email=''
        data.username=''
        data.age=0
        data.tel=''
        getData()
      })
    }

 //asyncの書き方
    const getData =()=>{
      let all_url = url + ".json"
      axios.get(all_url).then((result)=>{
        data.message='get all data.'
        data.fire_data=result.data
      }).catch((error)=>{
        data.message="ERROR";
        data.fire_data={};
        console.log(error)
      })
    }
      
    onMounted(()=>{
      getData()
    })
    return {data,addData,getData}
  },
  
}
</script>

<style>

</style>