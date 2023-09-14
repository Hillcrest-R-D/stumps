const ids = ["small", "medium", "large", "extraLarge"];

const baseCalculation =
	(primaryPricing, secondaryPricing) => (quantity, isPrimary) =>
		quantity * (isPrimary ? primaryPricing : secondaryPricing);

const mapper = {
	small: baseCalculation(125, 25),
	medium: baseCalculation(200, 75),
	large: baseCalculation(275, 125),
	extraLarge: baseCalculation(350, 175),
};

function Hide() {
	document.getElementById("totalContainer").style.visibility = "hidden";
}

function Calculate() {
	var totalQuantity = 0;
	let state = {};
	ids.forEach((id) => {
		let quantity = document.getElementById(id).value;
		totalQuantity += quantity;
		state[id] = quantity;
	});

	if (totalQuantity <= 0) { 
        Hide();
        return; 
    }

	let maxId = "small";
	const setId = (id) => {
		if (state[id] > 0) {
			maxId = id;
		}
	};
	setId("medium");
	setId("large");
	setId("extraLarge");

	console.log(maxId);
	let total = mapper[maxId](1, true);
	state[maxId] = state[maxId] - 1;
	Object.keys(state).forEach((key) => {
		console.log(total);
		console.log(key);
		console.log(state[key]);
		total += mapper[key](state[key], false);
	});
	const container = document.getElementById("totalContainer");
	const tag = document.getElementById("total");

	tag.innerText = "Your total comes to: " + total;
	container.style.visibility = "visible";
}

function Increment(element) {
	const el = element.previousElementSibling;
	el.value++;
}

function Decrement(element) {
	const el = element.nextElementSibling;
	if (el.value > 0) {
		el.value--;
	}
}
