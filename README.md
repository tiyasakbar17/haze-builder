# Getting Started with Tiyas App

## Install Dependencies

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Function used in this app: 

const makeHaze = (input) => {
    let output = ``,
	count = 1
	for (let index = 1; index < parseInt(input) + 1; index++) {
		if (index % 2 !== 0) {
			output +=  count % 2 === 0 ? `${"@".repeat(input-2)} @\n` : `@ ${"@".repeat(input - 2)}\n`
			count++
		}else{
			output += `${"@"}${" ".repeat(input - 2)}${"@"}\n`
		}
	}
	return output
}