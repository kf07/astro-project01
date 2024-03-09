import {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	console.log('render react');

	const incrementCount = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<p>react</p>
			<p>Counter: {count}</p>
			<button onClick={incrementCount}>+1</button>
		</>
	);
}

export default Counter;
