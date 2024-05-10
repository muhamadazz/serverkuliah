function isBigON2(n) {
  const f = n => n ** 2 + 2 * n + 5;
  const c = 1; // Constant factor
  const n0 = 1; // Minimum n for which we want to prove O(n^2)

  for (let nValue = n0; nValue <= n; nValue++) {
    if (f(nValue) > c * nValue ** 2) {
      console.log(`f(${nValue}) = ${f(nValue)} is not bounded by c * ${nValue}^2`);
      return false;
    }
  }

  console.log(`f(n) = n^2 + 2n + 5 is bounded by c * n^2 for n > ${n0}`);
  return true;
}

function isBigON3(n) {
  const f = n => 7 + n + 2 * n + n ** 3;
  const c = 1; // Constant factor
  const n0 = 1; // Minimum n for which we want to prove O(n^3)

  for (let nValue = n0; nValue <= n; nValue++) {
    if (f(nValue) > c * nValue ** 3) {
      console.log(`f(${nValue}) = ${f(nValue)} is not bounded by c * ${nValue}^3`);
      return false;
    }
  }

  console.log(`f(n) = 7 + n + 2n + n^3 is bounded by c * n^3 for n > ${n0}`);
  return true;
}

function isBigON2Again(n) {
  const f = n => 2 * n ** 2 + 3 * n ** 2 + 7;
  const c = 1; // Constant factor
  const n0 = 1; // Minimum n for which we want to prove O(n^2)

  for (let nValue = n0; nValue <= n; nValue++) {
    if (f(nValue) > c * nValue ** 2) {
      console.log(`f(${nValue}) = ${f(nValue)} is not bounded by c * ${nValue}^2`);
      return false;
    }
  }

  console.log(`f(n) = 2n^2 + 3n^2 + 7 is bounded by c * n^2 for n > ${n0}`);
  return true;
}

const n = 100; // Change n to the desired value to test

console.log("Test 1 (n^2 + 2n + 5 in O(n^2)): " + isBigON2(n));
console.log("Test 2 (7 + n + 2n + n^3 in O(n^3)): " + isBigON3(n));
console.log("Test 3 (2n^2 + 3n^2 + 7 in O(n^2)): " + isBigON2Again(n));
