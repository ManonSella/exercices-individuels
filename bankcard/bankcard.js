// Checking the validity of a bank card number
// Step 1: Double the value of every second digit
// Step 2: If the result of this doubling operation is greater than 9 (e.g. 16), then add the digits of the product (e.g. 1 + 6 = 7).
// Step 3: Take the sum of all the digits (must be equal to 80).
// Step 4: If the toal ends in zero, this is a valid card number. If not, it is an invalid card number.
// 80 ends with a 0 ====> valid Card Number

function validateCardNumber(cardNumber) {
  let result = [];

  for (let i = 0; i < exampleCardNumber.length; i++) {
    if (i % 2 === 0) {
      let pairNumber = exampleCardNumber[i] * 2;
      if (pairNumber > 9) {
        let calculatedDigits = pairNumber - 10 + 1;
        result.push(calculatedDigits);
      } else {
        result.push(pairNumber);
      }
    } else {
      let oddNumber = exampleCardNumber[i];
      result.push(oddNumber);
    }
  }
  let checkValidNumber = 0;
  for (let i = 0; i < result.length; i++) {
    checkValidNumber = checkValidNumber + Number(result[i]);
  }
  if (checkValidNumber % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

let exampleCardNumber = "5549650012850805";
let validationResult = validateCardNumber(exampleCardNumber);
console.log(validationResult);

// 1 -> 2
// 2 -> 4
// 3 -> 6
// 4 -> 8
// 5 -> 10 - 10 + 1 -> 1
// 6 -> 12 - 10 + 1 -> 3
// 7 -> 14  -> 5
// 8 -> 16  -> 7
// 9 -> 18 - 10 + 1 -> 9

// 8 1 6 7  16 9 8 7  2 1 14 5  10 9 0 4

// 8 1 6 7  7 9 8 7   2 1 5 5   1 9 0 4

// 80 ===> Valid

// ex 2 "4137894711755904" to "4137 8947 1175 5904"
