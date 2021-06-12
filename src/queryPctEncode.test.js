import { queryPctEncode } from './queryPctEncode'


test('example', () => {
    let m = 'a+=1'
    let y = queryPctEncode(m)
    expect(y).toEqual("a%2B%3D1")
})

describe('encode tests', () => {

    test('pctEncode', () => {
        let m = '\u0007'
        let y = queryPctEncode(m)
        expect(y).toEqual('%07')
    })

    test('material pipe', () => {
        let m = 'Φ76×6'
        let y = queryPctEncode(m)
        expect(y).toEqual(m)
    })

})

