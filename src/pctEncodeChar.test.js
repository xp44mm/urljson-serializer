import { pctEncodeChar } from './pctEncodeChar'

describe('pctEncodeChar', () => {
    test('single', () => {
        expect(pctEncodeChar([0])).toEqual('%00')
        expect(pctEncodeChar([127])).toEqual('%7F')
    })

    test('double', () => {
        expect(pctEncodeChar([194, 128])).toEqual('%C2%80')
        expect(pctEncodeChar([223, 191])).toEqual('%DF%BF')
    })

    test('triple', () => {
        expect(pctEncodeChar([228, 184, 173])).toEqual('%E4%B8%AD')
    })


})
