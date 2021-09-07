/**
 * Number Facts!
 */
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);


// Fetch with Fetch API
function getFactFetch() {
    let number = numberInput.value;
    if (number != '') {
        fetch('http://numbersapi.com/' + number +"/")
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factText.innerText = data;
            })
            .catch(err => console.log(err));
    }
}

/**
 * Year Facts!
 */

let yearFact = document.querySelector('#yfact');
let yearFactText = document.querySelector('#yfactText');

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getYearFact);

async function getYearFact(){
    let year = yearInput.value;
    if(year != ''){
        fetch('http://numbersapi.com/' + year + "/year/")
        .then(response => response.text())
        .then(data => {
            yearFact.style.display = 'block';
            yearFactText.innerText = data;
        })
        .catch(err => console.log((err)));
        
    }
}

/**
 * Math Facts!
 */

let mathFact = document.querySelector('#mfact');
let mathFactText = document.querySelector('#mfactText');

let mathInput = document.querySelector('#mathInput');
mathInput.addEventListener('input', getMathFact);

function getMathFact(){
    let math = mathInput.value;
    if(math != ''){
        fetch('http://numbersapi.com/' + math + "/math/")
        .then(response => response.text())
        .then(data => {
            mathFact.style.display = 'block';
            mathFactText.innerText = data;
        })
        .catch(err => console.log((err)));
    }
}


/**
 * Date Facts!
 */

let dateFact = document.querySelector('#dfact');
let dateFactText = document.querySelector('#dfactText');

let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getdateFact);

function getdateFact(){
    let date = dateInput.value;
    if(date != '' && date.length == 4){
        fetch('http://numbersapi.com/' + date.slice(2,4) + "/" + date.slice(0,2) + "/date/")
        .then(response => response.text())
        .then(data => {
            dateFact.style.display = 'block';
            dateFactText.innerText = data;
        })
        .catch(err => console.log(err));
    }
}
