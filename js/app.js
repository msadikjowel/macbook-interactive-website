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

// total function - (bonus function - 1)
function totalAmount() {
    const extraMemoryNumber = parseInt(extraMemory.innerText);
    const extraStorageNumber = parseInt(extraStorage.innerText);
    const deliveryChargeNumber = parseInt(deliveryCharge.innerText);
    const bestPriceNumber = parseInt(bestPrice.innerText);

    const totalPriceAmount = extraMemoryNumber + extraStorageNumber + deliveryChargeNumber + bestPriceNumber;
    totalPrice.innerText = totalPriceAmount;
    grandTotal.innerText = totalPriceAmount;
}

// selected button border- (bonus function - 2)
function isContain(element) {
    return element.classList.contains('selected');
}

// memory function
memory8.addEventListener('click', function () {
    extraMemory.innerText = '0';
    // bonus function-1
    totalAmount();
    // bonus function-2
    if (!isContain(memory8)) {
        memory8.classList.add('selected');
        memory16.classList.remove('selected');
    }

});
memory16.addEventListener('click', function () {
    extraMemory.innerText = '180';
    totalAmount()
    // bonus function-2
    if (!isContain(memory16)) {
        memory16.classList.add('selected');
        memory8.classList.remove('selected');
    }

});

// storage function
storage256.addEventListener('click', function () {
    extraStorage.innerText = '0';
    totalAmount();
    // bonus function-2
    if (!isContain(storage256)) {
        storage256.classList.add('selected');
        storage512.classList.remove('selected');
        storage1024.classList.remove('selected');
    }
});
storage512.addEventListener('click', function () {
    extraStorage.innerText = '100';
    totalAmount();
    // bonus function-2
    if (!isContain(storage512)) {
        storage512.classList.add('selected');
        storage256.classList.remove('selected');
        storage1024.classList.remove('selected');
    }
});
storage1024.addEventListener('click', function () {
    extraStorage.innerText = '180';
    totalAmount();
    // bonus function-2
    if (!isContain(storage1024)) {
        storage1024.classList.add('selected');
        storage256.classList.remove('selected');
        storage512.classList.remove('selected');
    }

});

// delivery function
deliveryFree.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    totalAmount();
    // bonus function-2
    if (!isContain(deliveryFree)) {
        deliveryFree.classList.add('selected');
        delivery20.classList.remove('selected');
    }

});
delivery20.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    totalAmount();
    // bonus function-2
    if (!isContain(delivery20)) {
        delivery20.classList.add('selected');
        deliveryFree.classList.remove('selected');
    }

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
        alert('invalid promo code');
    }
});

