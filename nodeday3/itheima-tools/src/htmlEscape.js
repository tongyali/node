//转义
function htmlEscape(data) {
    return data.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
        }
    })
}
//还原
function htmlUnescape(data) {
    return data.replace(/&lt;|&gt;|&amp;|&quot;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&quot;':
                return '"';
            case '&amp;':
                return '&';
        }
    })
}
module.exports = {
    htmlEscape,
    htmlUnescape,
}