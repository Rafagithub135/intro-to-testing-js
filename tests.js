// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return Hello, Jane! when passed Jane into the function', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return Hello, Alex! when passed Alex in the function', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return Hello, Pat! when passed Pat in the function', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return Hello, World! when passed World in the function', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return Hello, World! when passed true in the function', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed false in the function', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed null in the function', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed "" in the function', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed a number in the function', function () {
        expect(sayHello(19)).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed "5" in the function', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return Hello, World! when passed an array in the function', function () {
        expect(sayHello([1, 3, 4])).toBe("Hello, World!");
    });
})