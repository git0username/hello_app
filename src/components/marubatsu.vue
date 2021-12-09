<template>
  <div v-on:click="doAction" v-bind:class="click">{{ title }}</div>  
</template>

<script>
export default {
  name: "marubatsu",
  props: {
    // title: String,
    count1: Number,
    key1: Number,
   
  },
  data() {
    return {      
       title: "",
       click:""     
    };
  },

  methods: {
    doAction() {    
      if(this.count1%2==0){
        this.title="〇"; 
        this.$emit("result-event",this.key1-1,"〇");
      }else{
        this.title="×";
        this.$emit("result-event",this.key1-1,"×");        
      }     
      console.log(this.count1);  
      console.log("key1="+this.key1-1);
      this.click="no-click";

    },
  },
  
};

</script>
<style>
.no-click{
  pointer-events:none;
}

</style>
