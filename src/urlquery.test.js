import { urlquery } from './urlquery'

describe('urlquery', () => {
    test('out of range in fields', () => {
        let data = {
            a: undefined,
            b: null,
            c: Symbol(),
            d: NaN,
            e: () => { }
        }

        let y = urlquery(data)
        expect(y).toEqual("")
    })

    test('example of urlquery', () => {
        let data = {
            a: false,
            b: 0,
            c: "test",
            d: {x:1,y:"name"},
            e: [1,2],
        }

        let y = urlquery(data)
        expect(y).toEqual("?a=false&b=0&c=test&d={x:1,y:~name~}&e=[1,2]")
    })



    test('invalid data', () => {
        let xs = [undefined, null, true, 1, '', [1], {}]

        // verifies that a certain number of assertions are called during a test.
        expect.assertions(xs.length)

        for (let x in xs) {
            let y = () => urlquery(x)
            expect(y).toThrow(Error);
        }
    })

    test('empty value', () => {
        let obj = {
            a: undefined,
            b: null,
            c: "",
        }
        let y = urlquery(obj)
        expect(y).toEqual("?c=")
    })

    test('data is plain object', () => {
        let x = {
            a: 1,
            b: 2,
            c: 'xyz',
            d: [1, 2],
            e: { x: 1, y: 2 },
        }
        let y = urlquery(x)
        expect(y).toEqual("?a=1&b=2&c=xyz&d=[1,2]&e={x:1,y:2}")
    })

    test('encode data', () => {
        const data = {
            name: 'this is a test',
            inlet: {
                SO2: 4273.11,
                SO3: 45.35924,
                'CaSO4*(1/2)H2O': 49.79,
                HF: 38.48,
                ash: 'NO',
            },
            effect: [96, 30, 95, 95, 85],
            'CaSO4*(1/2)H2O': -1,
            cleanLeakage: -1,
        }

        let res = urlquery(data)
        expect(res).toBe("?name=this%20is%20a%20test&inlet={SO2:4273.11,SO3:45.35924,CaSO4*(1/2)H2O:49.79,HF:38.48,ash:~NO~}&effect=[96,30,95,95,85]&CaSO4*(1/2)H2O=-1&cleanLeakage=-1")
    });

})

