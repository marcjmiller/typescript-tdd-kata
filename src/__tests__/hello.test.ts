import hello from "../hello";

describe('anotherapp tests go in here', () => {
    it('should return hello followed by the name passed to the function', () => {
        expect(hello('Kyle')).toEqual("Hello Kyle!")
    });
});