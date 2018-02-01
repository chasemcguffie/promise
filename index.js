slowMath.add(1,1)
.then((sum) => {
    console.log(sum)
    return slowMath.multiply(sum, 2);
})
.then((product) => {
    console.log(product)
    return slowMath.divide(product, 4);
})
.then((quotient) => {
    console.log(quotient)
    return slowMath.subtract(quotient, 3);
})
.then((dif) => {
    console.log(dif)
    return slowMath.add(dif, 98);
})
.then((quotient) => {
    console.log(quotient)
    return slowMath.remainder(quotient, 2)
})
.then((product) => {
    console.log(product)
    return slowMath.multiply(product, 50)
})
.then((quotient) => {
    console.log(quotient)
    return slowMath.remainder(quotient, 40)
})
.then((sum) => {
    console.log(sum)
    return slowMath.add(sum, 32)
})
.then((result) => {
    console.log('the final result is ' + result);
})
.catch((e) => {
    console.error(e)
})