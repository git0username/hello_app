
<template>
  <div class="alert alert-primary">
    <h1 style="color: red">{{ title }}</h1> 
    <p v-on:click="clear">{{message}}</p> 
    <button class="btn btn-primary m-3" v-on:click="doAction">
      {{btn}}
    </button>
    <transition name="transit">
          <p v-if="flg" class="trans">
        Transition context!  
      </p>
    </transition>
  </div>
  </template>

   

<script>
export default {
  name: "HelloWorld", 
 
  
   data() {
    return {    
      title:'Trans&Anim',  
      message:'This is Transition sample', 
      flg:true,
      btn:'Hide'     
    }    
   },

   methods:{  
     doAction(){
       this.flg= !this.flg
     },
   },
       }     
      
</script>

 <style>
   .trans{
     background-color:black;
     color:white;
     padding:10px;
     font-size:20pt;
   }

   .transit-enter-active{
     animation: anim 2.5s reverse;
   }

   .transit-leave-active{
     animation: anim 5.0s;
    
   }

   @keyframes anim{
     0%{
       transform:translateX(0px) translateY(0px) rotateZ(0deg);
       opacity: 1.0;
       background-color: #ddf;
     }

     25%{
       transform:translateX(250px) translateY(0px) rotateZ(0deg);
       opacity: 1.0;
       background-color: #fdd;
     }
     50%{
       transform:translateX(0px) translateY(-100px) rotateZ(540deg);
       opacity: 1.0;
       background-color: #dfd;
     }
     75%{
       transform:translateX(250px) translateY(-100px) rotateZ(540deg);
       opacity: 1.0;
       background-color: #fdf;
     }
     100%{
       transform:translateX(0px) translateY(-200px) rotateZ(1080deg);
       opacity: 0;
       background-color: #ffd;
     }
   }

 
   
   </style>

    