//kyu 6 : break camelCase
//Avec utilisation des regex
function solution(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
}

//sans utilisation des regex
function solution2(string) {
    let newString = "";
    let isUpper = false;
    for (let i = 0; i < string.length; i++) {
        if (!isUpper && string[i] == string.toUpperCase()[i]) {
            newString = newString + " ";
            isUpper = true;
        }
        else {
            isUpper = false;
        }
        newString = newString + string[i];
    }
    return newString;
}