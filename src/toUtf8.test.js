import { toUtf8 } from './toUtf8'

describe('toUtf8', () => {
    test('single', () => {
        expect(toUtf8(0)).toEqual([0])
        expect(toUtf8(127)).toEqual([127])

    })

    test('double', () => {
        expect(toUtf8(128)).toEqual([194, 128])
        expect(toUtf8(2047)).toEqual([223,191])
    })

    test('triple', () => {
        let n = '中'.charCodeAt(0)
        expect(n).toEqual(20013)
        expect(toUtf8(n)).toEqual([228, 184, 173])
    })


})
