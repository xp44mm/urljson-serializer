import { pctEncode, toUtf8 } from './encode'

describe('encode tests', () => {

    test('pctEncode', () => {
        let m = '\u0007'
        let y = pctEncode(m)
        expect(y).toEqual('%07')
    })

    test('material pipe', () => {
        let m = 'Φ76×6'
        let y = pctEncode(m)
        
        expect(y).toEqual('%CE%A676%C3%976')
    })

})

