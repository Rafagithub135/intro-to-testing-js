// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    })
    it('should return the string "Hello" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
});

// Unit tests for the isFive function

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed the value 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the value "5"', function () {
        expect(isFive("5")).toBe(true);
    });
})

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the value "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the value "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed the value Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean such as isEven(true)', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed a boolean such as isEven(false)', function () {
        expect(isEven(false)).toBe(false);
    });
})