<template>
  <div class="alert alert-primary">
    <h1>{{ data.title + '[' + name + ']' }}</h1>
    <p class="h5">{{ data.msg }}</p>
    
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name:'HelloWorld',
  props: {
    name:String,
  },
  //propsの内容を使って処理を行うときは、propsを引数に書く
  setup() {
    //値の定義
    const data = reactive({
      title:'Router',
      msg: "This is HelloWorls component.",     
    })
    
    return {
      data     
    }
  }
}
</script>
<style>
.trans {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20px;
}
.transit-leave-active {
  animation: anim 5s;
}
.transit-enter-active {
  animation: anim 2.5 reverse;
}
@keyframes anim {
  0% {
    transform: translateX(0px) translateY(0px) rotateZ(0deg);
    opacity: 1;
    background-color: #ddf;
  }
  25% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity: 1;
    background-color: #fdd;
  }
  50% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity: 1;
    background-color: #fdd;
  }
  25% {
    transform: translateX(0px) translateY(-100px) rotateZ(540deg);
    opacity: 1;
    background-color: #dfd;
  }
  75% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity: 1;
    background-color: #fdf;
  }
  100% {
    transform: translateX(0px) translateY(-200px) rotateZ(1080deg);
    opacity: 0;
    background-color: #ffd;
  }
}
.transit-enter,
.transit-leave-to {
  transform: rotateZ(360deg);
  opacity: 0.1;
}

</style>