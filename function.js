function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
alert(result);

describe("multiply()", function() {

    it("multiplies 5 and 5", function() {

        assert.equal(multiply(5, 5), 25);

    });
});