
//----FUNCTION

const  mock = (string) => {

    let mockString = "";

    for(let i = 0; i < string.length; i++){

        const randomizer = Math.round(Math.random());

        if(randomizer === 1){
            mockString += string[i].toUpperCase();
        }
        else{
            mockString += string[i].toLowerCase();
        };

    };

    return mockString;
}

//----QUERY SELECTORS

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const website = document.querySelector('.js-website');

//----EVENT LISTENERS

window.addEventListener('load', (e) => {
    website.innerText = mock('stopMocking.me');
});

input.addEventListener('input', (e) => {

    const inputString = input.value
    const outputString = mock(inputString);
    
    output.value=outputString;

})

input.addEventListener('keyup', (e) => {

    if(e.key === "Enter"){
        if(parseInt(input.attributes.rows.value) < 5){
            input.attributes.rows.value = `${parseInt(input.attributes.rows.value)+1}`
            output.attributes.rows.value = `${parseInt(input.attributes.rows.value)+1}`
        }
    }

});

output.addEventListener('click', (e) => {

    if(output.value.length > 0){
        output.select();
        document.execCommand("copy")
        alert("Copied: " + output.value);
    }

})