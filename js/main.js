var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function (e) {
	loadTableWithFilters();
	document.querySelector(`nav`).querySelectorAll(`a`)[0].onclick =
		filterAllPets;
	document.querySelector(`nav`).querySelectorAll(`a`)[1].onclick =
		filter_zero_1;
	document.querySelector(`nav`).querySelectorAll(`a`)[2].onclick = filter_1_3;
	document.querySelector(`nav`).querySelectorAll(`a`)[3].onclick =
		filter_4_plus;
};

function loadTableWithFilters() {
	let table = document.querySelector(`#main-table-body`);
	table.innerHTML = ``;
	petData.forEach(function (pet) {
		if (pet.age >= filterAgeMin && pet.age <= filterAgeMax) {
			let filterTypeMatch = true;
			if (filterType) {
				if (pet.type !== filterType) {
					filterTypeMatch = false;
				}
			}
			if (filterTypeMatch) {
				let newRow = document.createElement(`tr`);
				newRow.innerHTML = `<td><img src="${pet.image.src}", alt="${pet.image.alt}", height="${pet.image.height}", width="${pet.image.width}"></td><td><h4>${pet.name}</h4><p>${pet.description}</p><span>Age: ${pet.age} years old</span></td>`;
				table.appendChild(newRow);
				if (pet.type === `dog`) {
					newRow.querySelector(`img`).onclick = filterDog;
				}
				if (pet.type === `cat`) {
					newRow.querySelector(`img`).onclick = filterCat;
				}
				if (pet.type === `bird`) {
					newRow.querySelector(`img`).onclick = filterBird;
				}
			}
		}
	});
}

function filterDog() {
	filterType = `dog`;
	loadTableWithFilters();
}

function filterCat() {
	filterType = `cat`;
	loadTableWithFilters();
}

function filterBird() {
	filterType = `bird`;
	loadTableWithFilters();
}

function filter_zero_1() {
	filterAgeMin = 0;
	filterAgeMax = 1;
	loadTableWithFilters();
}

function filter_1_3() {
	filterAgeMin = 1;
	filterAgeMax = 3;
	loadTableWithFilters();
}

function filter_4_plus() {
	filterAgeMin = 4;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}

function filterAllPets() {
	filterType = ``;
	filterAgeMin = 0;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}
