/* 
 * 将 Date 类型转换成 YYYY-MM-DD hh:mm:ss
*/
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : `0${n}`
    }
    return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

/* 
 * 将后台返回的各种样子的时间字符串转换成 YYYY-MM-DD hh:mm:ss
*/
const formatDateStr = function (str) {
    let time = new Date(str).toLocaleString('zh', { hour12: false })
    return time.replace(/\//g, '-')
}

/* 
 * 比较数组的某字段
*/
function compareArray(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}


/* 
 * ————————————————vue+flow——————————————
 flow的checks 说明: https://flow.org/en/docs/types/functions/#toc-predicate-functions
*/


/* 
 * 是否定义
*/
export function isUndef(v: any): boolean % checks {
    return v === undefined || v === null
}

export function isDef(v: any): boolean % checks {
    return v !== undefined && v !== null
}

/* 
 * 是真或假
*/
export function isTrue(v: any): boolean % checks {
    return v === true
}

export function isFalse(v: any): boolean % checks {
    return v === false
}


/** 
 * Check if value is primitive. 原始类型
 */
export function isPrimitive(value: any): boolean % checks {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

/**
* Quick object check - this is primarily used to tell
* Objects from primitive values when we know the value
* is a JSON-compliant type.
* 迅速简易鉴别是不是对象
*/
export function isObject(obj: mixed): boolean % checks {
    return obj !== null && typeof obj === 'object'
}