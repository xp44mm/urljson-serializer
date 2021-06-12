//字符的整数代码转换为，utf8编码数组
export function toUtf8(n) { //c= code
    if (n < 0x80) {
        return [n]
    } else if (0x80 <= n && n < 0x800) {
        return [
            (n >> 6) | 0xC0,
            (n & 0x3F) | 0x80]
    } else {
        return [
            (n >> 0xC) | 0xE0,
            ((n >> 6) & 0x3F) | 0x80,
            (n & 0x3F) | 0x80]
    }
}
