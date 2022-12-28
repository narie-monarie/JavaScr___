let x = [111, 222, 201]

for (let i = 0; i < x.length; i++) {
  if (parseFloat(x[i].toString().split('').reverse().join('')) * Math.sign(x[i]) === x[i]) {
    console.log(parseFloat(x[i].toString().split('').reverse().join('')) * Math.sign(x[i]))
    console.log("True")
  } else {
    console.log("False")
  }
}
