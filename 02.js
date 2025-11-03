function areaCalculator(width, height) {
	if ((width, height == 0)) {
		return  0;
	} else return width * height;
}

console.log(areaCalculator(1, 3)); // Résultat attendu: 3
console.log(areaCalculator(1, 0)); // Résultat attendu: 0
