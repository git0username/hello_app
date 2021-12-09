<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p class="h5">{{ data.msg }}</p>
    <div>
      <input type="number" v-model="data.num" min="0" class="form-control" />
    </div>
    <button class="btn btn-primary m-3" v-on:click="action">Click</button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    title: String,
  },
  setup() {
    const data = reactive({
      msg: "This is ref-value!",
      num: 0,
    });
    const action = () => {
      let total = 0
      for(let i = 1;i <= data.num;i++) {
        total += i
      }
      data.msg = "Total:" + total
    };
    return {
      data,
      action,
    };
  },
};
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
/* pre {
  font-size: 16pt;
  line-height: 1.25;
}
div.out {
  padding: 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 0px;
  background-color: #ddd;
  width: 200px;
  height: 170px;
}
div.in {
  padding: 0px;
  background-color: #ccc;
  width: 100px;
  height: 140px;
} */
</style>