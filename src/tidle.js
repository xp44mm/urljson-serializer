
/// tidle a string to literal
export function tidle(str = "") {
    let x = Array.from(str)
        .map(ch => {
            if (ch === "~") { return "\\~" }
            else if (ch === "\\") { return "\\\\" }
            else if (ch === "\n") { return "\\n" }
            else if (ch === "\r") { return "\\r" }
            else if (ch === "\v") { return "\\v" }
            else if (ch === "\t") { return "\\t" }
            else if (ch === "\b") { return "\\b" }
            else if (ch === "\f") { return "\\f" }
            else {
                let charCode = ch.charCodeAt(0)
                // \xFF
                if (charCode < 16) {
                    return "\\0" + charCode.toString(16)
                } else if (charCode < 32) {
                    return "\\" + charCode.toString(16)
                } else {
                    return ch
                }
            }
        }).join("")
    return "~" + x + "~"
}

/// tidle key if it is needed.
export function tidleKey(str) {
    if (str === "" || /[\000-\037\s{}[\]:,~\\]/.test(str)) {
        return tidle(str)
    } else return str
}
