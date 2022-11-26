const player = {
	name: "nico",
	points: 10,
	fat: true,
}
console.log(player);
player.lastName = "potato";
player.points = 15;
console.log(player);


const calculator = {
	plus: (a, b) => {
		console.log(a + b);
		return a + b
	},
	minus: (a, b) => {
		console.log(a - b);
		return a - b;
	},
	divide: (a, b) => {
		console.log(a / b);
		return a / b;
	},
	max: (a, b) => {
		console.log(a * b);
		return a * b;
	},
	power: (a, b) => {
		console.log(a ** b);
		return a ** b;
	},
}

const value = calculator.plus(2, 3);
console.log(value)