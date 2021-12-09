<template>
  <div class="alert alert-info">
    <h2 style="color:red">{{ title }}</h2>
    <p  style="color:blue">{{message}}</p>    
  </div>
  </template>   

<script>
export default {
  name: 'Question',
  props: {
    title:String,
    message: String  
  }
}
</script>
