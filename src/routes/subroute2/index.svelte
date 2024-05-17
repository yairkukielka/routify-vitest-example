<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<p>Page 2</p>
<button on:click={increment}>
  count is {count}
</button>
