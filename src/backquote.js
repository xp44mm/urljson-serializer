/// backquote a string to literal
export function backquote(str = "") {
    let x = Array.from(str)
        .map(ch => {
            if (ch === "`") { return "\\`" }
            else if (ch === "\\") { return "\\\\" }
            else if (ch === "\n") { return "\\n" }
            else if (ch === "\r") { return "\\r" }
            else if (ch === "\v") { return "\\v" }
            else if (ch === "\t") { return "\\t" }
            else if (ch === "\b") { return "\\b" }
            else if (ch === "\f") { return "\\f" }
            else if (ch === "\u007F") { return "\\u007F" }
            else {
                let charCode = ch.charCodeAt(0)
                if (charCode < 0x10) {
                    return "\\0" + charCode.toString(16)
                } else if (charCode < 0x20) {
                    return "\\" + charCode.toString(16)
                } else {
                    return ch
                }
            }
        }).join("")
    return "`" + x + "`"
}

/// backquote key if it is needed.
export function backquoteKey(str) {
    if (str === "" || /[\u0000-\u0020\u007F\s{}[\]:,`\\]/.test(str)) {
        return backquote(str)
    } else return str
}
