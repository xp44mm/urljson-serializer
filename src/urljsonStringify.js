import { tidle, tidleKey } from './tidle'

export function urljsonStringify(value) {
    if (value === null) {
        return "null"
    } else if (typeof value === "boolean" && value === true) {
        return "true"
    } else if (typeof value === "boolean" && value === false) {
        return "false"
    } else if (typeof value === "number") {
        return isFinite(value) ? value.toString() : 'null'
    } else if (typeof value === "string") {
        return tidle(value)
    } else if (Array.isArray(value)) {
        let elems = value.map(e => urljsonStringify(e))
            .join(',')
        return '[' + elems + ']'
    } else if (typeof value === "object") {
        let fields = Object.entries(value)
            .map(([k, v]) => tidleKey(k) + ':' + urljsonStringify(v))
            .join(',')
        return '{' + fields + '}'
    } else if (typeof value === "function") {
        throw new Error("urljsonStringify `function` member in obj.")
    } else if (typeof value === "undefined") {
        throw new Error("urljsonStringify `undefined` member in obj.")
    } else {
        throw new Error("urljsonStringify")
    }

}
