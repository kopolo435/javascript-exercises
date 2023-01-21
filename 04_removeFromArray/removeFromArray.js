const removeFromArray = function(array,...toRemove) {
    for(const item of toRemove){
        let index=array.indexOf(item);
        if(index<0)continue;
        array.splice(index,1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
