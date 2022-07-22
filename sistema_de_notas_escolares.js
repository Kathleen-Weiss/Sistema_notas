function getScore(score){
    if(score>=90 && score<=100){
        score = "A"
    }else if(score>=80 && score<=90){
        score = "B"
    }else if(score>=70 && score<=79){
        score = "C"
    }else if(score>=60 && score<=69){
        score = "D"
    }else if(score>=0 && score<=59){
        score = "F"
    }else{
        score = "nota inválida"
    }
    return score
}

console.log(`Aluno tirou nota ${getScore(89)}`)
console.log(`Aluno tirou nota ${getScore(30)}`)
console.log(`Aluno tirou nota ${getScore(79)}`)
console.log(`Aluno tirou nota ${getScore(50)}`)
console.log(`Aluno tirou nota ${getScore(100)}`)
console.log(`Aluno tirou nota ${getScore(101)}`)
console.log(`Aluno tirou nota ${getScore(0)}`)
console.log(`Aluno tirou nota ${getScore(-3)}`)