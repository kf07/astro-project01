import {createSignal} from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);
	console.log('render solid');

	const incrementCount = () => {
		setCount(count() + 1);
	};

	return (
		<>
			<p>Solid</p>
			<p>Counter: {count()}</p>
			<button onClick={incrementCount}>+1</button>
		</>
	);
}
export default Counter;
