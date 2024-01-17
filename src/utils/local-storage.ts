/**
 * 获取本地存储
 */
export const getItem = (name: string) => {
    if (typeof window !== 'undefined') {
        let res = JSON.parse(localStorage.getItem(name))
        return res
    }
}

/**
 * 设置本地存储
 */
export const setItem = (name: string, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(name, JSON.stringify(value))
    }
}
