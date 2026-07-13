const pin = '1234'
export const check = ()=>{
    const isMatch = prompt('Enter pin') === pin
    return isMatch
}