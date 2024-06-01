const accountId = 144553
let accountEmail = "sunit@gmail.com"
var accountPass = "12345"
accountCity = "Bhadrak"
let accoutnState;

// accountId = 2  // not allowed

accountEmail = "sp@sp.com"
accountPass = "29493284"
accountCity = "Odisha"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPass, accountCity, accoutnState])