<script setup lang="ts">
import { useCssVar } from "@vueuse/core";
const change = (str: number) => {
  const color = useCssVar("--size");
  color.value = `${str}px`;
};
</script>

<template>
  <div>
    <header>
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
    <div>
      <button @click="change(36)">大</button>
      <button @click="change(24)">中</button>
      <button @click="change(14)">小</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;

  div {
    height: 50px;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: var(--size);
  }

  div:nth-child(1) {
    width: 100px;
    background: red;
  }

  div:nth-child(2) {
    flex: 1;
    background: green;
  }

  div:nth-child(3) {
    width: 100px;
    background: blue;
  }
}
</style>
