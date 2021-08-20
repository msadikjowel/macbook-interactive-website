/*-------------------- 
    All calling  
----------------------------*/

// memory button call
const memory8 = document.getElementById('memory-8');
const memory16 = document.getElementById('memory-16');

// storage button call
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1024 = document.getElementById('storage-1024');

// delivery button call
const deliveryFree = document.getElementById('delivery-free');
const delivery20 = document.getElementById('delivery-20');

// extra memory call
const extraMemory = document.getElementById('extra-memory');

// extra storage call
const extraStorage = document.getElementById('extra-storage');

// delivery charge call 
const deliveryCharge = document.getElementById('delivery-charge');

// best price call
const bestPrice = document.getElementById('best-price');
// total price call
const totalPrice = document.getElementById('total-price');

// grand total call
const grandTotal = document.getElementById('grand-total');

// input field call
const inputField = document.getElementById('input-text');
// input button call
const applyButton = document.getElementById('apply-button');

/* --------------------
    All Function 
 ---------------------*/

// total function
function totalAmount() {
    const extraMemoryNumber = parseInt(extraMemory.innerText);
    const extraStorageNumber = parseInt(extraStorage.innerText);
    const deliveryChargeNumber = parseInt(deliveryCharge.innerText);
    const bestPriceNumber = parseInt(bestPrice.innerText);
    const totalPriceAmount = extraMemoryNumber + extraStorageNumber + deliveryChargeNumber + bestPriceNumber;
    totalPrice.innerText = totalPriceAmount;
    grandTotal.innerText = totalPriceAmount;
}

// memory function
memory8.addEventListener('click', function () {
    extraMemory.innerText = '0';
    totalAmount();

});
memory16.addEventListener('click', function () {
    extraMemory.innerText = '180';
    totalAmount()

});

// storage function
storage256.addEventListener('click', function () {
    extraStorage.innerText = '0';
    totalAmount();

});
storage512.addEventListener('click', function () {
    extraStorage.innerText = '100';
    totalAmount();

});
storage1024.addEventListener('click', function () {
    extraStorage.innerText = '180';
    totalAmount();

});

// delivery function
deliveryFree.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    totalAmount();

});
delivery20.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    totalAmount();

});

/*------------------------------------------- 
    promo code apply
-------------------------------------- */

// apply button function
applyButton.addEventListener('click', function () {
    const inputText = inputField.value;
    const promoCode = 'stevekaku';
    const grand = grandTotal.innerText;
    inputField.value = '';
    if (inputText == promoCode) {
        let grandDiscount = grand * .20; // discount, 20% = .20;
        grandNewAmount = grand - grandDiscount;
        grandTotal.innerText = grandNewAmount;
    }
    else {
        alert('invalid promo code')
    }
})

