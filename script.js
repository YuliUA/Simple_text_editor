let getId = id => document.getElementById(id);
let form = n => document.forms[n];
let show = q => q.removeAttribute('hidden', 'hidden');
let hide = r => r.setAttribute('hidden', 'hidden');
let editForm = form('f3');
let styleForm = form('f4');
let chooseForm = getId('f5');
let tableForm = form('f6');
let listForm = form('f7');
let editButton = form('f2').edit;
let styleButton = form('f2').style;
let saveButton = editForm.saveButton;
let addButton = editForm.addButton;
let colorArray = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'purple', 'cadetblue'];
let tableCell = getId('colorPalette').querySelectorAll('td')

editButton.addEventListener('click', function () {
	show(editForm);
	hide(styleForm);
	getId('txt').value = getId('f1').innerHTML;
})
saveButton.addEventListener('click', function () {
	for (let i = 0; i < getId('txt').rows; i++) {
		getId('f1').innerHTML = getId('txt').value;
	}
	hide(editForm);
})
styleButton.addEventListener('click', function () {
	show(styleForm);
	hide(editForm);
})
for (let i = 0; i < styleForm.rb.length; i++) {
	styleForm.rb[i].addEventListener('click', function () {
		getId('f1').style.fontSize = styleForm.rb[i].nextElementSibling.innerHTML;
	})
}
styleForm.fontFam.addEventListener('change', function () {
	for (let i = 0; i < fontFam.options.length; i++) {
		(this.options[i].selected) ?
		getId('f1').style.fontFamily = this.options[i].value: null;
	}
})
styleForm.chBoxWeight.addEventListener('click', function () {
	(this.checked) ? getId('f1').style.fontWeight = this.value: getId('f1').style.fontWeight = 'normal';
})
styleForm.chBoxCursive.addEventListener('click', function () {
	(this.checked) ? getId('f1').style.fontStyle = this.value: getId('f1').style.fontStyle = 'normal';
})
styleForm.txtColor.addEventListener('click', function () {
	show(getId('colorPalette'));
	for (let i = 0; i < colorArray.length; i++) {
		tableCell[i].style.background = colorArray[i];
		tableCell[i].onclick = () => {
			getId('f1').style.color = tableCell[i].style.background;
			hide(getId('colorPalette'));
		}
	}
})
styleForm.bgColor.addEventListener('click', function () {
	show(getId('colorPalette'));
	for (let i = 0; i < colorArray.length; i++) {
		tableCell[i].style.background = colorArray[i];
		tableCell[i].onclick = () => {
			getId('f1').style.background = tableCell[i].style.background;
			hide(getId('colorPalette'));
		}
	}
})
addButton.addEventListener('click', function () {
	hide(getId('f1'));
	hide(form('f2'));
	hide(getId('f3'));
	show(getId('f5'));
})
getId('rTable').addEventListener('click', function () {
	if (this.checked) {
		show(tableForm);
		hide(listForm);
	}
})
getId('rList').addEventListener('click', function () {
	if (this.checked) {
		show(listForm);
		hide(tableForm);
	}
})
tableForm.addTable.addEventListener('click', function () {
	let countRow = getId('inputTR').value;
	let countCell = getId('inputTD').value;
	let widthTd = getId('width-td').value;
	let heightTd = getId('height-td').value;
	let borderWidth = getId('borderWidth').value;
	let borderType = getId('borderType').value;
	let borderColor = getId('borderColor').value;

	let tableWraper = document.createElement('div')
	let table = document.createElement('table')
	let td;
	let tr;
	tableWraper.appendChild(table);
	table.style.borderCollapse = 'collapse';
	for (let i = 0; i < countRow; i++) {
		tr = document.createElement('tr')
		table.appendChild(tr)
		for (let i = 0; i < countCell; i++) {
			td = document.createElement('td');
			tr.appendChild(td)
			td.style.width = `${widthTd}px`;
			td.style.height = `${heightTd}px`;
			td.style.borderWidth = `${borderWidth}px`;
			td.style.borderStyle = borderType;
			td.style.borderColor = borderColor;
			td.style.textAlign = 'center';
			td.innerHTML = 'td';
		}
	}
	getId('txt').value += tableWraper.innerHTML;
	show(getId('f1'));
	show(form('f2'));
	show(getId('f3'));
	hide(getId('f5'));
	hide(tableForm);
	getId('rTable').checked = false;
	this.form.reset();
})
listForm.addList.addEventListener('click', function () {
	let listWraper = document.createElement('div');
	let ulElement = document.createElement('ul');
	let countLi = getId('inputLi').value;
	let styleLi = getId('typeMarks').value;
	let liElement;
	listWraper.appendChild(ulElement);
	for (let i = 1; i <= countLi; i++) {
		liElement = document.createElement('li');
		ulElement.appendChild(liElement);
		liElement.style.listStyleType = styleLi;
		liElement.innerHTML = `item ${i}`;
	}
	getId('txt').value += listWraper.innerHTML;
	show(getId('f1'));
	show(form('f2'));
	show(getId('f3'));
	hide(getId('f5'));
	hide(listForm);
	getId('rList').checked = false;
	this.form.reset();
})
