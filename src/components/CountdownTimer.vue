<template>
  <div class="countdown-time">
    <progress :value="timer" :max="progressMax"></progress>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import * as utils from "../services/Utils";

@Component
export default class CountdownTimer extends Vue {
  @Prop() private startValue?: number | 0;
  @Prop() private targetValue?: number | 10;
  @Prop() private format?: any;
  @Prop() private onFinish?: () => void;
  @Watch("timer")
  async onPropertyChanged() {
    if (this.timer === (await this._targetValue)) {
      utils.stopInterval(this.interval);
      this.onFinish();
    }
  }
  private interval = utils.createInterval(this.handleTimer, 1000);
  private timer: number = this._startValue;

  private handleTimer() {
    this.direction ? this.timer++ : this.timer--;
  }
  private get progressMax() {
    return this.direction ? this._targetValue : this._startValue;
  }
  private get direction() {
    //true => increase , false => decrease
    return this._targetValue > this._startValue;
  }
  private get _startValue() {
    return this.startValue;
  }
  private get _targetValue() {
    return this.targetValue;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
