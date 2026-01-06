import { convert } from "../Script/util/money.js";
describe('Checking test cases for currency',()=>{
    it('Converting cents to dollars',()=>{
expect(convert(2095)).toEqual('20.95')
    })

    it('Checking with zeroes',()=>{
expect(convert(0)).toEqual('0.00')
    })

    it('Checking for round-off',()=>{
expect(convert(2095.005)).toEqual('20.95')
    })
})