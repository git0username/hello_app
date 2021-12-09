<template>
  <div class="alert alert-primary">
    <h2 style="color: red">{{ title }}</h2>    
    <p ref="msg" style="color: blue">{{ message }}</p>
    <hr />
    <p>Number: {{num}}</p>
  </div>
</template>   

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    num:{
      type:Number,
      defalut:100,
      validator:(value)=>{
        return value==parseInt(value)
        && value >= 0 && value <= 100
      },
  },
  },
   data() {
    return {      
      message:'バリデーション・チェック',
    }
   },
   }  
</script>
