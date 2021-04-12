<script lang="ts">
  import { count, increment, decrement } from '../../application/services/useSvelteCounter';

  function incrementCount() {
    increment(1);
  }

  function decrementCount() {
    decrement(1);
  }
</script>

<h1>This is the Counter page</h1>
<p>The count is {$count}</p>
<button on:click={incrementCount}>+</button>
<button on:click={decrementCount}>-</button>
