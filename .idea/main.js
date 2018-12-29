var num = 'string'

function inverse(num1) {
    var result = ''
    if( num1 < 0 ) {
        result += Math.abs(num)
    } else {
        if ( num1 > 0) {
            result += Math.abs(num) * -1
        } else {
            if (isNaN(num1)){
                result += false
            }
        }
        console.log(result)
        return result
    }
}

inverse(num)