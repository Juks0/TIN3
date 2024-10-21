function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

function getType(arg) {
  return typeof arg;
}

function amountToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }
  return result;
}


console.log(fibonacci(10));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(getType(123));
console.log(getType("Hello"));
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); 
