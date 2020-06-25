const arrayBlock = [ 
                [100,"ryan","music",2 ],
                [200,"apeach","math",2],
                [300,"tube","computer",3],
                [400,"con","computer",4],
                [500,"muzi","music",3],
                [600,"apeach","music",2]
              ]


function solution(relation) {
    const relationLength = relation.length
    const columnLength =relation[0].length
    const singleAttributeResult = checkSingleAttribute(columnLength, relationLength, relation)
    const answer = checkMultipleAttribute(relationLength, singleAttributeResult.newRelation) + singleAttributeResult.answer
    return answer
}

function checkSingleAttribute(columnLength, relationLength, relation) {
    let answer = 0
    let newRelation = []
    for (let i=0; i < columnLength; i++) {   
        const temp = []  
        for (let j=0; j < relationLength; j++) {
            temp.push(relation[j][i])
        }
        if ((new Set(temp)).size == temp.length) { answer++ } 
        else { newRelation.push(temp) }
    }
    return {answer: answer, newRelation: newRelation}
}

function checkMultipleAttribute(relationLength, newRelation) { 
    let answer = 0
    const length = newRelation.length
    for (let f = 0 ; f < length; f++) {
        for (let j = 0; j < length; j++) {
            const temp = []
            for (let i = 0; i < relationLength; i++) {
                const tuples = newRelation[f][i]+ newRelation[j][i]
                temp.push(tuples)
            }
            const result = (new Set(temp)).size == temp.length ? answer++ : null     
        }
    }
    return answer / 2
}

console.log(solution(arrayBlock));



