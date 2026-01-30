import { convert } from "../Script/util/money.js";
console.log('Checking test cases for currency')
// basic test case
if(convert(2095)==='20.95'){
    console.log('Passed')
}
else{
    console.log('Failed')
}

// Edge test case
if(convert(0)==='0.00'){
    console.log('Passed')
}
else{
    console.log('Failed')
}

if(convert(2000.05)==='20.00'){
    console.log('Passed')
}
else{
    console.log('Failed')
}