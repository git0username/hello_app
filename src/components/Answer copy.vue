<template>
  <div class="alert alert-info">
    <button ref="button"  v-if="count%2===0" class="btn btn-info mt-2" v-on:click="doAction">
      {{ title }}
    </button>
    <button ref="button" v-else class="btn btn-info mt-2" v-on:click="doAction">
      {{ans}}
    </button>
     
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: {
    title: String,    
    ans:  String,     
  },
  data() {
    return {
      count: 0
    };
  },

  methods: {
    doAction() {
      if (this.title === "赤色") {
        console.log("正解");
      }else{
        console.log("不正解");
      }

      this.count++;
      console.log(this.count);
      //this.$refs.button.innerHTML = this.ans;
    },
  },
  //この下にJSみたいにコード書けるのか
  //ifを使用してクリックflagを立てて、ボタンの表示を切り替えるとか→doAcitonの中にかく
};
</script>
