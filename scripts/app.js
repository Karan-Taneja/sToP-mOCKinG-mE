
//----FUNCTION

const mock = (string) => {
    const stringArr = string.split(" ");
    const outputArr = [];
    let previousVal = "";
    let twoValsAgo = "";

    for(let i = 0; i < stringArr.length; i++){

        const currString = stringArr[i];
        let mockString = "";

        for(let j = 0; j < currString.length; j++){
            let randomizer = Math.round(Math.random());
            
            if(randomizer === previousVal === twoValsAgo){
                if(randomizer === 1) randomizer = 0;
                else if(randomizer === 0) randomizer = 1;
            }

            if(randomizer === 1){
                mockString += currString[j].toUpperCase();
            }
            else{
                mockString += currString[j].toLowerCase();
            };

            twoValsAgo = previousVal;
            previousVal = randomizer;
        };

        if(mockString === currString
        || mockString === currString.toLowerCase()
        || mockString === currString.toUpperCase()){
            altString = "";
            for(let k = 0; k < mockString.length; k++){

                const currChar = mockString[k].toLowerCase();

                if(k % 2 === 0){
                    altString += currChar.toLowerCase();
                }
                else{
                    altString += currChar.toUpperCase();
                };
            };
            outputArr.push(altString);
        }
        else if (mockString !== ""){
            outputArr.push(mockString);
        }
    }
    return outputArr.join(" ");
}

//----QUERY SELECTORS

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const website = document.querySelector('.js-website');

//----EVENT LISTENERS

window.addEventListener('load', (e) => {
    website.innerText = mock('stopmocking.me');
});

input.addEventListener('input', (e) => {

    if(input.value.length > 0){
        const inputString = input.value
        const outputString = mock(inputString);
        output.value=outputString;
    }
    else{
        output.value=input.value;
    }
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