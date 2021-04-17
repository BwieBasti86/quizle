<template>
  <div class="cart">
    {{ triviaItem.question }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TriviaItem } from "../interfaces/TriviaItem";

@Component
export default class TriviaCart extends Vue {
  @Prop() private triviaItem!: TriviaItem;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  display: block;
}
</style>
