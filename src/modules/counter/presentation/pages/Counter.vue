<template>
  <h1>This is the Counter page</h1>
  <p>The count is {{ count }}</p>
  <button @click="increment(1)">+</button>
  <button @click="decrement(1)">-</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '../../application/services/useVueCounter';

export default defineComponent({
  name: 'Counter',
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement
    }
  }
});
</script>
