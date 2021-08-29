import { Calculator } from "./Calculator";

describe('the calculator should work without order of operations', () => {
    test('1+2*33/11= equal 9', () => {
        let c = new Calculator();
        let input = "1+2*33/11=";
        for (let i = 0; i < input.length; i++) {
            c.handleChar(input[i]);
        }
        expect(c.getResult()).toBe(9);
    });

    test('2*10/5+1= equal 5', () => {
        let c = new Calculator();
        let input = "2*10/5+1=";
        for (let i = 0; i < input.length; i++) {
            c.handleChar(input[i]);
        }
        expect(c.getResult()).toBe(5);
    });
});