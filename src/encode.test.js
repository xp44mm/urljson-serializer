import { pctEncode } from './encode'

describe('encode tests', () => {

    test('pctEncode', () => {
        let m = '\u0007'
        let y = pctEncode(m)
        expect(y).toEqual('%07')
    })


})

