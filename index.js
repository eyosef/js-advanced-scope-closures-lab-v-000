function produceDrivingRange(blockRange){
    return function(startBlock, endBlock) {

        startBlock = parseInt(startBlock)
        endBlock = parseInt(endBlock)

        let difference = endBlock - startBlock

        if (difference <= blockRange ) {
            return `within range by ${blockRange - difference}`
        }
        else {
            return `${difference - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage){
    return function(cost) {
        return cost * percentage
    }
}