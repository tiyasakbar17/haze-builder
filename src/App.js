import { useState } from "react";
import "./App.css";

function App() {
	const initialState = {
		input: "",
		output: "",
		selectedMaze: true,
	};
	const [state, setState] = useState(initialState);

	const builtMaze1 = (input) => {
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

	const builtMaze2 = (input) => {
		let output = ``,
			count = 1,
			middleItem = Math.ceil(parseInt(input) / 2);
		for (let index = 1; index < parseInt(input) + 1; index++) {
			if (index < middleItem) {
				if (index % 2 !== 0) {
					if (index > 1) {
						output += `${"@ ".repeat(count)}${"@".repeat(input - count * 2 - (count - 1) * 2 < 0 ? 0 : input - count * 2 - (count - 1) * 2)}${" @".repeat(count - 1)}\n`;
					} else {
						output += `${"@ ".repeat(count)}${"@".repeat(input - count * 2)}\n`;
					}
					count++;
				} else {
					output += `${"@ ".repeat(input - count * 2 - (count - 1) * 2 < 0 ? count - 1 : count)}${" ".repeat(input - count * 2 - (count - 1) * 2 < 0 ? 1 : input - count * 2 - (count - 1) * 2)}${" @".repeat(count - 1)}\n`;
				}
			} else if (index > middleItem) {
				if (index % 2 !== 0) {
					count--;
					if (index < parseInt(input - 1)) {
						output += `${"@ ".repeat(count - 1)}${"@".repeat(input - count * 2 - (count - 1) * 2 < 0 ? 0 : input - count * 2 - (count - 1) * 2)}${" @".repeat(count)}\n`;
					} else {
						output += `${"@".repeat(input - count * 2)}${" @".repeat(count)}\n`;
					}
				} else {
					output += `${"@ ".repeat(count - 1)}${" ".repeat(input - count * 2 - (count - 1) * 2 < 0 ? 1 : input - count * 2 - (count - 1) * 2)}${" @".repeat(input - count * 2 - (count - 1) * 2 < 0 ? count - 1 : count)}\n`;
				}
			} else {
				output += `${"@ ".repeat(middleItem)}\n`;
			}
		}
		return output;
	};

	const makeMaze = (e) => {
		e.preventDefault();
		if (parseInt(state.input) < 3 || parseInt(state.input) % 2 === 0) {
			return setState((prev) => ({ ...prev, output: "Wrong Input Dude!", input: "" }));
		} else {
			let output;
			if (state.selectedMaze) {
				output = builtMaze1(state.input);
			} else {
				output = builtMaze2(state.input);
			}
			setState((prev) => ({ ...prev, output, input: "" }));
		}
	};

	return (
		<div className="container">
			<h1>Test</h1>
			<h2 style={{ textAlign: "left" }}>Created By: Muhammad Tiyas Fachreza Akbar</h2>
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
			<table>
				<tbody>
					<tr>
						<td>
							<input type="radio" name="maze1" value={true} checked={state.selectedMaze} onChange={() => setState((prev) => ({ ...prev, selectedMaze: true }))} />
							Maze 1
						</td>
						<td>
							<input type="radio" name="maze2" value={false} checked={!state.selectedMaze} onChange={() => setState((prev) => ({ ...prev, selectedMaze: false }))} />
							Maze 2
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<button onClick={makeMaze}>Buat</button>
			<br />
			<br />
			<textarea style={{ fontSize: "25px" }} name="output" id="output" cols="90" rows="10" value={state.output} />
			<br />
		</div>
	);
}

export default App;
