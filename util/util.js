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
 * 判断一个对象是不是语义非
输入：任意对象
输出：true / false
原始值：
Number：除 0 以外 true，0 - false
String：除 ‘’ 以外 true，
Boolean： true false 对应
undefined：false
null：false
引用值：
Array：Array 元素是空则为 false
Object：任何时候都不是 false ？或者只有{}时是false
*/

function isNagative(target) {
    // 类型判断
    targetType = typeof target
    console.log(targetType)
    switch (targetType) {
        case 'Number':
            return target !== 0
            break;
        case 'String':
            return target !== ''
            break;
        case 'Boolean':
            return target
            break;
        case 'undefined':
            return false
            break;

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