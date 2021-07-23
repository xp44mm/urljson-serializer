import { backquote, backquoteKey } from "./backquote"

describe("backquote test", () => {

    test("backquote empty", () => {
        let x = ""
        let y = backquote(x)
        expect(y).toEqual("``")
    })

    test("backquote char", () => {
        let x = "c"
        let y = backquote(x)
        expect(y).toEqual("`c`")
    })

    test("backquote backquote", () => {
        let x = "`"
        let y = backquote(x)
        expect(y).toEqual("`\\``")
    })

    test("backquote backquote", () => {
        let x = "\\"
        let y = backquote(x)
        expect(y).toEqual("`\\\\`")
    })

    test("backquote null char", () => {
        let x = "\0"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "00", "`"].join(""))
    })

    test("backquote b", () => {
        let x = "\b"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "b", "`"].join(""))
    })

    test("backquote f", () => {
        let x = "\f"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "f", "`"].join(""))
    })

    test("backquote n", () => {
        let x = "\n"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "n", "`"].join(""))
    })

    test("backquote r", () => {
        let x = "\r"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "r", "`"].join(""))
    })

    test("backquote t", () => {
        let x = "\t"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "t", "`"].join(""))
    })

    test("backquote v", () => {
        let x = "\v"
        let y = backquote(x)
        expect(y).toEqual(["`", "\\", "v", "`"].join(""))
    })

    test("backquote Start of Heading", () => {
        let x = "\u0001"
        let y = backquote(x)
        expect(y).toEqual("`\\01`")
    })

    test("backquote Unit Separator", () => {
        let x = "\u001f"
        let y = backquote(x)
        expect(y).toEqual("`\\1f`")
    })

    test("backquote delete", () => {
        let x = "\u007F"
        let y = backquote(x)
        expect(y).toEqual("`\\u007F`")
    })

})

describe("backquoteKey test", () => {

    test("backquoteKey empty", () => {
        let x = ""
        let y = backquoteKey(x)
        expect(y).toEqual("``")
    })

    test("backquoteKey char", () => {
        let x = "c"
        let y = backquoteKey(x)
        expect(y).toEqual("c")
    })

    test("backquoteKey backquote", () => {
        let x = "`"
        let y = backquoteKey(x)
        expect(y).toEqual("`\\``")
    })

    test("backquoteKey backslash", () => {
        let x = "\\"
        let y = backquoteKey(x)
        expect(y).toEqual("`\\\\`")
    })


    test("backquoteKey n", () => {
        let x = "\n"
        let y = backquoteKey(x)
        expect(y).toEqual("`\\n`")
    })

    test("backquoteKey del", () => {
        let x = "\u007F"
        let y = backquoteKey(x)
        expect(y).toEqual("`\\u007F`")
    })


    test("backquoteKey key", () => {
        let x = "{}"
        let y = backquoteKey(x)
        expect(y).toEqual("`{}`")
    })

})
