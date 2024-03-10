import { component$, useSignal, $ } from "@builder.io/qwik";

export default component$(() => {
	const count = useSignal(0);

	const incrementCount = $(() => count.value++);
	return (
		<>
			<p>Qwik</p>
			<p>Counter: {count.value}</p>
			<button onClick$={incrementCount}>+1</button>
		</>
	);
});
