let count = 0;

let saveEl = document.getElementById("save");
let countEl = document.getElementById("count-el");
let addEl = document.getElementById("add");
let reduceEl = document.getElementById("remove");
let resetEl = document.getElementById("reset");

addEl.addEventListener("click", function() {
    count += 1;
    countEl.textContent = count;
});

reduceEl.addEventListener("click", function() {
    if (countEl.textContent <= 0) {
       countEl.textContent = 0;
    } else {
        countEl.textContent -= 1
    }
});

resetEl.addEventListener("click", function() {
    count = 0;
    countEl.textContent = count;
})


let addEl2 = document.getElementById("add2");
let reduceEl2 = document.getElementById("remove2");
let countEl1 = document.getElementById("count-el1");
//let countEl2 = document.getElementById("count-el2");
let countValue = 0;

countEl1.textContent = countValue;
//countEl2.textContent = countValue;

saveEl.addEventListener("click", function() {
    if (countEl1.textContent == 0) {
        countEl1.textContent  = count;
    } else {
        countEl1.textContent = parseInt(countEl1.textContent)  + parseInt(count)
    }
    count = 0;
    countEl.textContent = count;
});


























// addEl2.addEventListener("click", function() {
//     countEl1.textContent += 1;
//     // count1 += 1;

// });

// reduceEl2.addEventListener("click", function() {
//     if (countEl1.textContent <= 0) {
//        countEl1.textContent = 0;
//     } else {
//         countEl1.textContent -= 1
//     }
// });



