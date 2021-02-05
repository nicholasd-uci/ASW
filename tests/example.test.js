const { test, expect } = require("@jest/globals")

const greeting = () => {
    return('Hello World!')
}

test(`Greeting must be "Hello World!"`, () => {
    expect(greeting()).toBe('Hello World!')
})