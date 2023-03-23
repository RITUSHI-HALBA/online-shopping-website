// for cart.html section
// increase-decrease 1
let addBtn1 = document.querySelector('#add1');
let subBtn1 = document.querySelector('#sub1');
let qty1 = document.querySelector('#qtyBox1');

addBtn1.addEventListener('click', () => {
  qty1.value = parseInt(qty1.value) + 1;
});

subBtn1.addEventListener('click', () => {
  if (qty1.value <= 0) {
    qty1.value = 0;
  }
  else {
    qty1.value = parseInt(qty1.value) - 1;
  }


});

// increase-decrease 2
let addBtn2 = document.querySelector('#add2');
let subBtn2 = document.querySelector('#sub2');
let qty2 = document.querySelector('#qtyBox2');

addBtn2.addEventListener('click', () => {
  qty2.value = parseInt(qty2.value) + 1;
});

subBtn2.addEventListener('click', () => {
  if (qty2.value <= 0) {
    qty2.value = 0;
  }
  else {
    qty2.value = parseInt(qty2.value) - 1;
  }


});

// increase-decrease 3
let addBtn3 = document.querySelector('#add3');
let subBtn3 = document.querySelector('#sub3');
let qty3 = document.querySelector('#qtyBox3');

addBtn3.addEventListener('click', () => {
  qty3.value = parseInt(qty3.value) + 1;
});

subBtn3.addEventListener('click', () => {
  if (qty3.value <= 0) {
    qty3.value = 0;
  }
  else {
    qty3.value = parseInt(qty3.value) - 1;
  }


});

// increase-decrease 4
let addBtn4 = document.querySelector('#add4');
let subBtn4 = document.querySelector('#sub4');
let qty4 = document.querySelector('#qtyBox4');

addBtn4.addEventListener('click', () => {
  qty4.value = parseInt(qty4.value) + 1;
});

subBtn4.addEventListener('click', () => {
  if (qty4.value <= 0) {
    qty4.value = 0;
  }
  else {
    qty4.value = parseInt(qty4.value) - 1;
  }


});

// increase-decrease 5
let addBtn5 = document.querySelector('#add5');
let subBtn5 = document.querySelector('#sub5');
let qty5 = document.querySelector('#qtyBox5');

addBtn5.addEventListener('click', () => {
  qty5.value = parseInt(qty5.value) + 1;
});

subBtn5.addEventListener('click', () => {
  if (qty5.value <= 0) {
    qty5.value = 0;
  }
  else {
    qty5.value = parseInt(qty5.value) - 1;
  }


});