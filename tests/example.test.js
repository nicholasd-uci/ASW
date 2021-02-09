const Character = require('../lib/Character.js')

test('New character should be new instance of class', () => {
    let character = new Character('John', 5, 5, 'sword')
    expect(character).toBeInstanceOf(Character)
})