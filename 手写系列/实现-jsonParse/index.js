// 实现JSON.Parse
function jsonParse(data){
    return new Function(`return${data}`)
}