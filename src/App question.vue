<template>
  <div id="app1">
    <Question v-bind:message="mondai" />

    <Answer v-bind:title="kotae.A" v-bind:ans="kotae1.B" />
    <Answer v-bind:title="kotae.B" v-bind:ans="kotae1.B" />
    <Answer v-bind:title="kotae.C" v-bind:ans="kotae1.B" />
    <Answer v-bind:title="kotae.D" v-bind:ans="kotae1.A" />
  </div>
</template>

<script>
import Question from "./components/Question.vue";
import Answer from "./components/marubatsu.vue";

export default {
  name: "App",
  components: {
    Question,
    Answer,
  },
  data() {
    return {
      mondai: "赤色は何色？",
      kotae: {
        A: "青色",
        B: "黄色",
        C: "緑色",
        D: "赤色",
      },
      kotae1: {
        A: "正解",
        B: "不正解",
      }
    };
  }
};
</script>

