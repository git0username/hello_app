<template>
  <div id="app">
    <hello-world title="slot" >
      <p>***this is sample text***</p>
    </hello-world>
  </div>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "app",
  components: {
    HelloWorld    
  },
  
  data() {
    return {
      message: 'validate',
      num:120,      
    }
  }  
}
</script>

