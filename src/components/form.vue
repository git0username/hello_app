<template>
  <div class="alert alert-primary">
    <h1 style="color: red">{{ title }}</h1> 
    <p v-on:click="clear">{{message}}</p>   
    
    <hr>

    <div class="alert alert-light">
      <h3>Inner Slot</h3>
      <ol class="list-group-text-left">      
      <slot />
      </ol>
    </div>
  </div>
    
  </template>

   

<script>
export default {
  name: "HelloWorld",  
  
   data() {
    return {    
      title:'Slot',  
      message:'This is message',      
    }    
   },

   methods:{     
       type(event){
         console.log(event)
         
         if(event.key=="Enter"){return}
                    this.message += event.key + ''
                    event.target.value =''
         },
        
       clear(){
         this.message = ''
       },
       space(){
         this.message = '_ '
       },
       enter(event){
         var res = this.message.split(' ').join('')
         this.message =res.split('_').join(' ')
         event.target.value=''
       }
       },
}
</script>

 <style>
   pre{
     font-size: 16pt;
     line-height: 1.25;
   } 
   div.out{
     padding: 0px;
     background-color: #eee;
     width: 300px;
     height: 200px;
   }   
   div.mid{
      padding: 0px;
     background-color: #ddd;
     width: 200px;
     height: 170px;
   }
   div.in{
      padding: 0px;
     background-color: #ccc;
     width: 100px;
     height: 140px;
   }
   </style>

    