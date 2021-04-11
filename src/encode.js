//export function pctEncodeAscii(code) {
//    let f = code.toString(16).toUpperCase()
//    return '%' + (f.length === 1 ? '0' + f : f)
//}

export function pctEncode(s) {
    return Array.from(s)
        .map(c => [c.charCodeAt(0), c])
        .map(([code, c]) => {
            if (code <= 0x20 || 128 < code || c === '#' || c === '&' || c === '+' || c === '=') {
                return encodeURIComponent(c)
            } else return c
        })
        .join('')
}

export function toUtf8(c) {
    if (c < 128) {
        return [c]
    } else if (128 <= c && c < 2048) {
        return [
            (c >> 6) | 192,
            (c & 63) | 128]
    } else {
        return [
            (c >> 12) | 224,
            ((c >> 6) & 63) | 128,
            (c & 63) | 128]
    }
}

export function pctEncodeChar(code) {
    return toUtf8(code)
        .map(i => {
            let f = i.toString(16).toUpperCase()
            return '%' + (f.length === 1 ? '0' + f : f)
        })
        .join('')
}
