<template>
  <div class="masu">
    <marubatsu
      class="marubatsu"
      v-for="n in 9"
      v-bind:key="n"
      v-bind:key1="n"
      v-bind:count1="count"
      v-on:result-event="appAction"
    />
  </div>
  <hr />
  <p>{{ result }}</p>
</template>

<script>
import marubatsu from "./components/marubatsu.vue";

export default {
  name: "App",
  components: {
    marubatsu,
  },
  props: {
    key: Number,
  },
  data() {
    return {
      message: "a",
      result: "no event.",
      count: 0,
      hantei: [],
      
    };
  },
  methods: {  
    hanteifncyoko(n, m) {
      for (let i = n; i < m; i++) {
        if (this.hantei[i] !== "〇") {
          break;
        } else if (i == m - 1) {
          this.result = "勝ち";
        }
      }
    },

    hanteifnctate(n) {
      let flag=0;      
      for (let i = 0; i < 9; i++) {        
        if (i % 3 == n) {
          if (this.hantei[i] == "〇") {
            flag++;
            console.log("flag=" + flag);
            if (flag == 3) {
              this.result = "勝ち";
            }
          } else {
            break;
          }
        }
      }
    },

    hanteifncyoko1() {
      this.hanteifncyoko(0, 3);
      this.hanteifncyoko(3, 6);
      this.hanteifncyoko(6, 9);
    },

    hanteifnctate1() {
      for (let i = 0; i < 3; i++) {
        this.hanteifnctate(i);
      }
    },

    // hanteinaname() {
    //   diagonalA =
    //   if(this.hantei[0]==this.hantei[4]==this.hantei[8]=="〇"
    //   ||this.hantei[0]==this.hantei[4]==this.hantei[8]=="×")
    //   {
    //     this.result ="勝ち";
    //   }

      // let flag = 0;
      // console.log("flag=" + this.flag);
      // for (let i = 0; i < 9; i++) {
      //   if (i % n == 0) {
      //     if (this.hantei[i] == "〇") {
      //       flag++;
      //       console.log("flag=" + this.flag);
      //       if (flag == 3) {
      //         this.result = "勝ち";
      //       }
      //     } else {
      //       break;
      //     }
      //   }
      // }
    },

    hanteinaname1(){
      this.hanteinaname(4);
      this.hanteinaname()
    },

    appAction(key, str) {
      this.count++;
      this.hantei[key] = str;

      this.hanteifncyoko1();

      this.hanteifnctate1();

      this.hanteinaname();

      console.log(this.hantei);
      console.log(this.key);
    },
  
};
</script>

<style>
.masu {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.marubatsu {
  color: brown;
  border: 2px solid;
  background-color: bisque;
  height: 100px;
  text-align: center;
  padding: 35px;
}
</style>