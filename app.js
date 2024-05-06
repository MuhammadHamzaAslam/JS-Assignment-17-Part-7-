


function three(param) {
    let user  = parseInt(prompt('Enter a Number to check its a multiple of 3 or 7'))
let flag = false
for (var i = 3; i <= 10000; i+=3) {
  //console.log(i)
 if (user == i) {
   flag == true
}
}
if (flag == true) {
  alert('Its a multiple of 3')
}
else {
  alert('Its not a multiple of 3')
}
}

function seven() {
    let flag2 = false
    let user2 = parseInt(prompt("Enter a Number"))
for (var j = 7; j <= 10000; j+=7) {
  //console.log(j)
  if (user2 == j) {
    flag2 = true
  }
}
if (flag2 == true) {
  alert('Its a multiple of 7')
}
else {
  alert('Its not a multiple of 7')
}
}

