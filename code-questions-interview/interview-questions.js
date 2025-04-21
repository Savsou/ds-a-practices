//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

// Your ChallengeToken: 1n7r28hswa43

function StringChallenge(str) {

    // code goes here
    let result = "";
    let challengeToken = "1n7r28hswa43"
    for (let i = 0; i < str.length; i++) {
        if ((str[i] % 2 !== 0) && (str[i + 1] % 2 !== 0)) {
            result += `${str[i]}-`
        } else {
            result += str[i]
        }
    }

    let result1 = result.split("-").reverse()

    let finalResult = [];
    for (let j = 0; j < result1.length; j++) {
        let temp = result1[j].split("").reverse().join("")
        finalResult.push(temp)
    }

    return finalResult.join("-") + ":" + challengeToken.split("").reverse().join("");
}

// keep this function call here
console.log(StringChallenge(readline()));

function StringChallenge(str) {
    const challengeToken = "1n7r28hswa43";
    let result = "";

    // Insert dashes between two odd digits
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (
            i < str.length - 1 &&
            parseInt(str[i]) % 2 === 1 &&
            parseInt(str[i + 1]) % 2 === 1
        ) {
            result += "-";
        }
    }

    // Reverse the full result and the token
    const reversedResult = result.split("").reverse().join("");
    const reversedToken = challengeToken.split("").reverse().join("");

    return `${reversedResult}:${reversedToken}`;
}


//String will be "Hello World" and want the ASCII Conversion.
//

function StringChallenge(str) {

    // code goes here
    let result = []

    let strBinary = str.split(" ")

    for (let i = 0; i < strBinary.length; i++) {
        let word = strBinary[i]
        let binaryWord = ""

        for (let char of word) {
            const charCode = char.charCodeAt(0);
            const binaryVal = charCode.toString(2).padStart(8, '0');;
            binaryWord += binaryVal;
        }

        result.push(binaryWord);
    }



    return result.join(" ");

}
