import helloWorld from "../app";

describe('App tests go in here', () => {
    it('should return "Hello World!"', () => {
        expect(helloWorld()).toEqual("Hello World!")
    });
});