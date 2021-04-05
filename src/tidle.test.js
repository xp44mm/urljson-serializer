import { tidle, tidleKey } from "./tidle"

describe("tidle test", () => {

    test("tidle empty", () => {
        let x = ""
        let y = tidle(x)
        expect(y).toEqual("~~")
    })

    test("tidle char", () => {
        let x = "c"
        let y = tidle(x)
        expect(y).toEqual("~c~")
    })

    test("tidle tidle", () => {
        let x = "~"
        let y = tidle(x)
        expect(y).toEqual("~\\~~")
    })

    test("tidle tidle", () => {
        let x = "\\"
        let y = tidle(x)
        expect(y).toEqual("~\\\\~")
    })

    test("tidle null char", () => {
        let x = "\0"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "00", "~"].join(""))
    })

    test("tidle b", () => {
        let x = "\b"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "b", "~"].join(""))
    })

    test("tidle f", () => {
        let x = "\f"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "f", "~"].join(""))
    })

    test("tidle n", () => {
        let x = "\n"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "n", "~"].join(""))
    })

    test("tidle r", () => {
        let x = "\r"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "r", "~"].join(""))
    })

    test("tidle t", () => {
        let x = "\t"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "t", "~"].join(""))
    })

    test("tidle v", () => {
        let x = "\v"
        let y = tidle(x)
        expect(y).toEqual(["~", "\\", "v", "~"].join(""))
    })

    test("tidle Start of Heading", () => {
        let x = "\u0001"
        let y = tidle(x)
        expect(y).toEqual("~\\01~")
    })

    test("tidle Unit Separator", () => {
        let x = "\u001f"
        let y = tidle(x)
        expect(y).toEqual("~\\1f~")
    })
})

describe("tidleKey test", () => {

    test("tidleKey empty", () => {
        let x = ""
        let y = tidleKey(x)
        expect(y).toEqual("~~")
    })

    test("tidleKey char", () => {
        let x = "c"
        let y = tidleKey(x)
        expect(y).toEqual("c")
    })

    test("tidleKey tidle", () => {
        let x = "~"
        let y = tidleKey(x)
        expect(y).toEqual("~\\~~")
    })

    test("tidleKey backslash", () => {
        let x = "\\"
        let y = tidleKey(x)
        expect(y).toEqual("~\\\\~")
    })


    test("tidleKey n", () => {
        let x = "\n"
        let y = tidleKey(x)
        expect(y).toEqual("~\\n~")
    })


    test("tidleKey key", () => {
        let x = "{}"
        let y = tidleKey(x)
        expect(y).toEqual("~{}~")
    })

})
