function dateFormat(data) {
    const dt = new Date(data)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1).toString().padStart(2, '0')
    const d = dt.getDate().toString().padStart(2, '0')
    const h = dt.getHours().toString().padStart(2, '0')
    const mm = dt.getMinutes().toString().padStart(2, '0')
    const s = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${h}:${mm}:${s}`
}
module.exports = {
    dateFormat
}