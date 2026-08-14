// 保存機能
let count = parseInt(localStorage.getItem('karaokeCount')) || 1;
const countDisplay = document.getElementById('count');
updateDisplay();

function changeCount(value) {
	count += value;
	if (count < 1) count = 1;
	saveAndDisplay();
}

function resetCount() {
	count = 1;
	saveAndDisplay();
}

function saveAndDisplay() {
	localStorage.setItem('karaokeCount', count);
	updateDisplay();
}

function updateDisplay() {
	countDisplay.innerText = count;
}