<template>
  <div id="app">
    <hello-world>
            <p>Bigin!...</p>
            <template v-slot:first>
              ***First message***
            </template>
            <p>..Middle..</p>
            <template v-slot:second>
              ***Second message***
            </template>
            <p>..End</p>
            <template v-slot:third>
              ***Third message***
            </template>
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

