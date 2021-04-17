<template>
  <div id="app">
    <div v-for="item in triviaItems" :key="item.question">
      <trivia-cart :triviaItem="item"></trivia-cart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TriviaCart from "./components/TriviaCart.vue";
import { TriviaItem } from "./interfaces/TriviaItem";
import fetchTriviaApi from "./services/TriviaApi";

@Component({
  components: {
    HelloWorld,
    TriviaCart,
  },
})
export default class App extends Vue {
  //@Prop({default:[]}) items : TriviaItem[]

  private triviaItems: TriviaItem[] = [];

  async mounted() {
    fetchTriviaApi().then((res) => (this.triviaItems = [...res]));
    console.log(this.triviaItems);
  }

  // get Items():TriviaItem[]{
  //   return await
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
