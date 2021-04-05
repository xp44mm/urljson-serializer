
export function pctEncodeAscii(code) {
    let f = code.toString(16).toUpperCase()
    return '%' + (f.length === 1 ? '0' + f : f)
}

/// 只做最小必要的pct编码，用于避免歧义。而其他编码由user agents自动完成。
export function pctEncode(s) {
    return Array.from(s)
        .map(c => [c.charCodeAt(0), c])
        .map(([code, c]) => {
            if (code <= 0x20 || c === '#' || c === '&' || c === '+' || c === '=') {
                return pctEncodeAscii(code)
            } else return c
        }).join('')
}

