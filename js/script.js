let heroNameInput = document.getElementById("heroName");
let heroClassInput = document.getElementById("heroClass");
let saveBtn = document.getElementById("addButton");
let removeBtn = document.getElementById("removeButton")
let heroesContainer = document.getElementById("heroesContainer");
let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];

function addHero() {
	if (heroNameInput.value && heroClassInput.value) {
		heroes.push([heroNameInput.value, heroClassInput.value]);
		heroNameInput.value = "";
		heroClassInput.value = "";
		displayHeroes();
	}
}
function removeHero() {
	if (heroes.length > 0) {
		heroes.pop();
	}
	displayHeroes();
}
function displayHeroes() {

	heroesContainer.innerHTML = "";
	for (let i = 0; i < heroes.length; i++) {
		heroesContainer.innerHTML += `<div class="card">
		<p class="name"><strong class="blow">Name: </strong>${heroes[i][0]}</p>
		<p class="class"><strong class="blow">Class: </strong>${heroes[i][1]}</p>
	</div>`;
	}
}

saveBtn.addEventListener("click", addHero);
removeBtn.addEventListener("click", removeHero);