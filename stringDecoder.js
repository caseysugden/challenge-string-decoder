function decoder(code) {
    let splitString = code.split("");
    let result = "";
    for (let i = 0; i < code.length; i++) {
        if (!isNaN(+splitString[i])) {
            i += +splitString[i];
        } else {
            result += splitString[i];
        };
    };
    return result;
};

console.log(decoder("0h2xce5ngbrdy"));