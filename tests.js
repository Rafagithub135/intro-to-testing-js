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

describe("ifFive", function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when the input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false for "5"', function () {
        expect(isFive("5")).toBe(false);
    });
});

describe("isEven", function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what the input.', function () {
        expect(isEven()).toBe(false);
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean such as isEven(true) or isEven(false)', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when no argument is passed such as isEven()', function () {
        expect(isEven()).toBe(false);
    });
});