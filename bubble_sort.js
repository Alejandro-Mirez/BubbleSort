function bubbleSort(array){

    for(let i = 0; i < array.length; i++){  //iteracja przez całą arajkę

        for(let j = 0; j < ( array.length - i -1 ); j++){
            console.log({i, j})
        //j = ile jest par? = array.length-1 //skąd "i"? = i odpowiada ruchowi
            if(array[j] > array[j+1]){  //jeśli wartość po lewej będzie większa od wartości po prawej (z niższym indeksem większa niż z wyższym indeksem)

                let temp = array[j]  //swap
                array[j] = array[j + 1]
                array[j+1] = temp

            }
        }
    }
    return array
}

//test
sortedArray = bubbleSort([4, 8, 4, 10, 1, 9])
console.log(sortedArray)
