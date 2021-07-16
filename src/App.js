import { useState } from "react";
import "./App.css";

function App() {
	const initialState = {
		input: "",
		output: ``,
	};
	const [state, setState] = useState(initialState);

	const builtHaze1 = (input) => {
		let output = ``,
			count = 1;
		for (let index = 1; index < parseInt(input) + 1; index++) {
			if (index % 2 !== 0) {
				output += count % 2 === 0 ? `${"@".repeat(input - 2)} @\n` : `@ ${"@".repeat(input - 2)}\n`;
				count++;
			} else {
				output += `${"@"}${" ".repeat(input - 2)}${"@"}\n`;
			}
		}
		return output;
	};

	const makeHaze = (e) => {
		e.preventDefault();
		if (parseInt(state.input) < 3 || parseInt(state.input) % 2 === 0) {
			return setState((prev) => ({ ...prev, output: "Wrong Input Dude!", input: "" }));
		} else {
			const output = builtHaze1(state.input);
			setState((prev) => ({ ...prev, output, input: "" }));
		}
	};

	return (
		<div className="container">
			<h1>Test</h1>
			<h2 style={{ "text-align": "left" }}>Created By: Muhammad Tiyas Fachreza Akbar</h2>
			<p>
				<strong>Buatlah sebuah function</strong> untuk meng-generate maze dengan pola-pola dengan ketentuan:
				<ul>
					<li>Input: S sebuah positive integer, ukuran maze</li>
					<li>Output: sebuah pola di layar, yaitu maze berukuran S x S, dengan jalan masuk di kiri atas</li>
					<li>S dapat dinyatakan dalam 4n - 1, dimana n adalah positive integer</li>
					<li>Semua tembok tebalnya 1 karakter ("@"), semua jalan lebarnya 1 karakter (" ")</li>
					<li>Silahkan dijawab dengan menggunakan bahasa pemrograman yg kamu kuasai (preferable javascript / php/.net).</li>
				</ul>
			</p>
			<label>
				<strong>Ukuran Maze</strong>
			</label>
			<br />
			<input type="text" name="kualitas" id="kualitas" placeholder="Minimal 3" value={state.input} onChange={(e) => setState((prev) => ({ ...prev, input: e.target.value }))} />
			<br />
			<button onClick={makeHaze}>Buat</button>
			<br />
			<br />
			<textarea style={{ "font-size": "25px" }} name="output" id="output" cols="30" rows="10" value={state.output} />
			<br />
		</div>
	);
}

export default App;
