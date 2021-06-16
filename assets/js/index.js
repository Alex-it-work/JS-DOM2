"use strict";
// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре. Навесить валидацию на 1-й инпут.

const divTask1 = document.querySelector("#task1");

const inputParam = document.createElement("input");
const inputSphereVolume = document.createElement("input");
inputParam.placeholder = "sphere radius...";
inputParam.autofocus = true;
inputSphereVolume.placeholder = "sphere volume is...";
inputSphereVolume.readonly = true;

inputParam.addEventListener("input", e => {
  const sphereValue = (4 / 3) * Math.PI * Math.pow(e.target.value, 3);
  inputSphereVolume.value = sphereValue;
});

divTask1.append(inputParam, inputSphereVolume);

// 2.Дан элемент #elem. Реализуйте 4 функции:
// - Добавьте ему класс www.
// - Удалите у него класс www.
// - Проверьте наличие у него класса www.
// - Добавьте ему класс www, если его нет и удалите - если есть.
// (https://developer.mozilla.org/ru/docs/Web/API/Element/classList)

const elem = document.getElementById("elem");

elem.classList.add("www");
elem.classList.remove("www");
console.log(elem.classList.contains("www"));
elem.classList.toggle("www");

// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li.
// Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
// Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.
