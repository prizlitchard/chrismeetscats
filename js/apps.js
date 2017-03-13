"use strict";

/**
 * @param {string|number} value
 * @param {boolean} [nonNumeric]
 * @returns {Object} 
 */

function renderCatProp(value,nonNumeric) {
    var td = document.createElement("td");
    td.textContent = value;
    if (nonNumeric) {
        td.classList.add("mdl-data-table__cell--non-numeric");
    }
    return td;
}

/**
 * @param {Object} cat the cat entry
 * @returns {Object} a new <tr>
 */

function renderCat(cat) {
    var tr = docment.createElement("tr");

    tr.appendChild(renderCatProp(cat.name, true));
    tr.appendChild(renderCatProp(cat.date, true));
    tr.appendChild(renderCatProp(cat.location, true));
    tr.appendChild(renderCatProp(cat.color, true));
    tr.appendChild(renderCatProp(cat.description, true));

    return tr;
}

/**
 * @param {Object[]} cats cat array
 */

function renderCats(cats) {
    var tbody = document.querySelector("tbody");

    tbody.textContent = "";

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        tbody.appendChild(renderCat(cat));
    }
}

CATS.sort(function(n1, n2){
    return n1.location - n2.location;
});

renderCats(CATS);

var colorInput = document.querySelector("#color-input");

catInput.addEventListener("input", function() {
    var catSearch = colorInput.value.toLowerCase();
    var filteredCats = CATS.filter(function(filteredCats) {
        return filteredCats.color.toLowerCase().indexOf(catSearch) > -1;
    })

    renderCats(filteredCats);
});