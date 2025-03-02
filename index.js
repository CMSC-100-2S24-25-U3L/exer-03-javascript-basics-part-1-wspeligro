function validatePassword(stringOne, stringTwo){ /* function to validate password */
    /* variables for the first string */
    let countOne = 0;
    let oneHasUppercase = false;
    let oneHasLowercase = false;
    let oneHasNumber = false;
    /* variables for the second string */
    let countTwo = 0;
    let twoHasUppercase = false;
    let twoHasLowercase = false;
    let twoHasNumber = false;

    /* loop for the first string | checks if the string has an uppercase, a lowercase, a number, and if the length is equal to 8 */
    for (let i = 0; i < stringOne.length; i++){
        countOne++;
        if (stringOne[i] >= 'A' && stringOne[i] <= 'Z'){
            oneHasUppercase = true;
        }
        if (stringOne[i] >= 'a' && stringOne[i] <= 'z'){
            oneHasLowercase = true;
        }
        if (stringOne[i] >= '0' && stringOne[i] <= '9'){
            oneHasNumber = true;
        }
    }

    /* loop for the second string | checks if the string has an uppercase, a lowercase, a number, and if the length is equal to 8 */
    for (let i = 0; i < stringTwo.length; i++){
        countTwo++;
        if (stringTwo[i] >= 'A' && stringTwo[i] <= 'Z'){
            twoHasUppercase = true;
        }
        if (stringTwo[i] >= 'a' && stringTwo[i] <= 'b'){
            twoHasLowercase = true;
        }
        if (stringTwo[i] >= '0' && stringTwo[i] <= '9'){
            twoHasNumber = true;
        }
    }

    /* returns true if both strings has an uppercase, a lowercase, a number, and are equal to 8 */
    if (countOne >= 8 && countTwo >= 8  && oneHasNumber && twoHasNumber && oneHasUppercase && twoHasUppercase && oneHasLowercase && twoHasLowercase){
        return true;
    }else{
        return false;
    }
}

function reversePassword(string){ /* function to reverse string */
    /* empty string for the reverse string */
    let reverse = "";
    /* loop through the string and add each index in the new empty string "reverse" */
    for (let i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    return reverse;
}

function storePassword(name, passwordOne, passwordTwo){ /* function for storing password */
    
}

/* testing */
/*
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
*/

console.log(reversePassword("Pass123"));