// import functions and grab DOM elements
// DOM Elements for input objects
const verbIn1 = document.getElementById('verb-1');
const verbIn2 = document.getElementById('verb-2');
const verbIn3 = document.getElementById('verb-3');
const verbIn4 = document.getElementById('verb-4');
const verbIn5 = document.getElementById('verb-5');
const verbIn6 = document.getElementById('verb-6');
const verbIn7 = document.getElementById('verb-7');
const verbIn8 = document.getElementById('verb-8');
const advIn1 = document.getElementById('adverb-1'); 
const adjIn1 = document.getElementById('adjective-1');
const adjIn2 = document.getElementById('adjective-2');
const nounIn1 = document.getElementById('plural-noun-1');

const button = document.getElementById('button');

// DOM Elements for Span IDs
const verbOut1 = document.getElementById('verb-1-id');
const verbOut2 = document.getElementById('verb-2-id');
const verbOut3 = document.getElementById('verb-3-id');
const verbOut4 = document.getElementById('verb-4-id');
const verbOut5 = document.getElementById('verb-5-id');
const verbOut6 = document.getElementById('verb-6-id');
const verbOut7 = document.getElementById('verb-7-id');
const verbOut8 = document.getElementById('verb-8-id');
const advOut1 = document.getElementById('adverb-1-id'); 
const adjOut1 = document.getElementById('adjective-1-id');
const adjOut2 = document.getElementById('adjective-2-id');
const nounOut1 = document.getElementById('plural-noun-1-id');

// initialize state
button.addEventListener ('click', () => {

    verbOut1.textContent = verbIn1.value;
    verbOut2.textContent = verbIn2.value;
    verbOut3.textContent = verbIn3.value;
    verbOut4.textContent = verbIn4.value;
    verbOut5.textContent = verbIn5.value;
    verbOut6.textContent = verbIn6.value;
    verbOut7.textContent = verbIn7.value;
    verbOut8.textContent = verbIn8.value;
    advOut1.textContent = advIn1.value;
    adjOut1.textContent = adjIn1.value;
    adjOut2.textContent = adjIn2.value;
    nounOut1.textContent = nounIn1.value;
});


// set event listeners to update state and DOM