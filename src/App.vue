<template>
  <div id="app">
    <div v-for="item in triviaStoreItems" :key="item.question">
      <trivia-cart :triviaItem="item"></trivia-cart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TriviaCart from "./components/TriviaCart.vue";
import { TriviaItem } from "./interfaces/TriviaItem";
import { triviaStore } from "./store/modules/TriviaStore";

@Component({
  components: {
    HelloWorld,
    TriviaCart,
  },
})
export default class App extends Vue {
  async mounted() {
    triviaStore.getItems();
  }

  get triviaStoreItems(): TriviaItem[] {
    return triviaStore.triviaItems;
  }
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
