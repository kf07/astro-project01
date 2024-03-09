<script>
	let count = 0;
	console.log('render svelte')

	const incrementCount = () => {
		count++;
	};
</script>

<p>svelte</p>
<p>Counter: {count}</p>
<button on:click={incrementCount}>+1</button>
