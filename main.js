const showBtnPlus = document.querySelector('#btn_plus');
const showResult = document.querySelector('#result');
const showBtnMinus = document.querySelector('#btn_minus');
const showBtnReset = document.querySelector('#btn_reset');
let curValue = 0;

showBtnPlus.addEventListener('click', () => {
    curValue++;
    showResult.textContent = curValue;
});
showBtnMinus.addEventListener('click', () => {
    curValue--;
    showResult.textContent = curValue;
});
showBtnReset.addEventListener('click', () => {
    curValue = 0;
    showResult.textContent = curValue;
});
