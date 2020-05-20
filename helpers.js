exports.wait = function wait(milliseconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(true),milliseconds)
    })
}

exports.isEmpty = function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}