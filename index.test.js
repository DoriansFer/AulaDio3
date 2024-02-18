
const { Heroi, atacar } = require('./index');



describe('atacar function', () => {
    test('Ataque', () => {
        const output = 'atacou';
        expect(atacar("ninja")).toEqual(output);
        console.log(`o ${Heroi.tipo} atacou usando ${Heroi.ataque}" `);
    });

});