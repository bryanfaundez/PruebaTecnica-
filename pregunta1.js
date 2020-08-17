function findOutlier(integers){
    var impar = []
    var par = []
    if(integers.length>0){
        for (var i = 0; i <= integers.length-1; i++) {
            if(!isNaN(integers[i])){
                if (integers[i]%2 == 0) par.push(n[i])
                else impar.push(n[i]) 
            }
        }
    }
    if(par.length==1) return par[0]
    else if(impar.length==1) return impar[0]
    else return null
}
const test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const test2 = [160, 3, 1719, 19, 11, 13, -21]
const test3 = [7, 3, 'a', 19, 11, 13, -21]
const test4 = [2, 4, 0, 100, 4, 8, 2602, 36]
const test5 = []

console.assert(findOutlier(test1) === 11)
console.assert(findOutlier(test2) === 160)
console.assert(findOutlier(test3)==null)
console.assert(findOutlier(test4)==null)
console.assert(findOutlier(test5)==null)