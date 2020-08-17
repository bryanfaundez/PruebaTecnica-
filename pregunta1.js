// findOutlier recibe un arreglo de enteros 
// el cual está compuesto en su totalidad por números pares o impares, 
// excepto por un elemento (el outlier), escriba un método que encuentre ese outlier.
// retornara el elemento outlier 

function findOutlier(integers){
    // declaro un array de numeros impar que se encuentre en el arreglo
    var impar = [] 
    //declaro un array de numeros par que se encuentre en el arreglo
    var par = []  
    // se verifica si el arreglo ingresado tiene datos 
    if(integers.length>0){ 
        //se recorre el arreglo 
        for (var i = 0; i <= integers.length-1; i++) {
            // se verifica si el dato a evaluar es un numero
            if(!isNaN(integers[i])){
                // si el numero es par se guarda en el arreglo "par"
                if (integers[i]%2 == 0) par.push(n[i])
                // si el numero es impar se guarda en el arreglo "impar"
                else impar.push(n[i]) 
            }
        }
    }
    // si hay un numero en el arreglo "par" retorno dicho numero
    if(par.length==1) return par[0]
    // si hay un numero en el arreglo "impar" retorno dicho numero
    else if(impar.length==1) return impar[0]
    // si no hay numeros outlier o lo ingresado no corresponde se retona null
    else return null
}
// se declaran los test de pruebas
const test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const test2 = [160, 3, 1719, 19, 11, 13, -21]
const test3 = [7, 3, 'a', 19, 11, 13, -21]
const test4 = [2, 4, 0, 100, 4, 8, 2602, 36]
const test5 = []

//Al enviar el arreglo test1 deberia devolver un numero impar que es 11
console.assert(findOutlier(test1) === 11)
//Al enviar el arreglo test2 deberia devolver un numero par que es 160
console.assert(findOutlier(test2) === 160)
//Al enviar test3 que contiene solo numero impares y una letra deberia devolver null
console.assert(findOutlier(test3)==null)
//Al enviar test4  que contiene solo numeros pares deberia devolver null
console.assert(findOutlier(test4)==null)
//Al enviar test5 que no contiene nada deberia devolver null
console.assert(findOutlier(test5)==null)