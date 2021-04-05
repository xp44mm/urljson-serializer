import { pctEncode } from './encode'
import { urljsonStringify } from './urljsonStringify'

///第一层为名值对，其后序列化为压缩格式。
export function urlquery(data) {
    //名值对的先决条件是普通对象
    if (!data || Array.isArray(data) || typeof data !== 'object') {
        throw new Error("query's input should be a plain object.")
    }

    let pairs =
        Object.entries(data)
            .filter(([k, v]) => !(v === undefined
                || v === null
                || Number.isNaN(v)
                || typeof v === 'function'
                || typeof v === 'symbol'
            ))

    if (pairs.length === 0) {
        return ""
    }

    // 如果字段是对象，包括数组，则序列化字段值，否则不变。
    return '?' + pairs
        //.map(x => {
        //    console.log(x)
        //    return x
        //})
        .map(([k, v]) => [
            k, typeof v === 'string' ? v : typeof data === 'object' ? urljsonStringify(v) : v.toString()
        ])
        .map(([k, v]) => pctEncode(k) + '=' + pctEncode(v))
        .join("&")
}

