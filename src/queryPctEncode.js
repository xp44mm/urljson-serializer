import { toUtf8 } from './toUtf8'
import { pctEncodeChar } from './pctEncodeChar'

///只对必要的符号进行pct编码，其余字符如有遗漏，浏览器会自动pct编码。
export function queryPctEncode(s) {
    return Array.from(s)
        .map(c => [c.charCodeAt(0), c])
        .map(([n, c]) => {
            if (
                n <= 0x20 || // 0x80 < n ||
                c === '%' ||
                c === '#' ||
                c === '&' ||
                c === '+' ||
                c === '='
            ) {
                return pctEncodeChar(toUtf8(n))
            } else return c
        })
        .join('')
}
