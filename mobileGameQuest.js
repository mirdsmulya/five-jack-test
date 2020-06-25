const stages = 5
const user = [2,1,2,6,2,4,3,3]
const input1 = [4,4,4,4,4]


function solution(N, users) {
    const sortedUser = users.sort(function(a, b){return b-a})
    let answer = []
    for (let i = 1; i <= N; i++ ) {
        const checkResult = checkPlayer(i, sortedUser)        
        const failureRate =  checkResult.numbers / checkResult.len
        checkResult["rate"] = failureRate
        answer.push(checkResult)
    }        
    answer.sort((a,b) => (a.rate > b.rate) ? -1 : 1 ) // sort by failure rate 
    answer = getValueResult(answer)
    return answer
}


function getValueResult(answer) {
    result = []
    answer.map( element => result.push(element.stage)  )
    return result
}


function checkPlayer(stage, users) {
    let result;
    const arrayLength = users.length    
    let number = 0
    for (let i = 0; i < arrayLength; i++) {        
        if (stage == users[users.length-1]) {
            number++
            users.pop()
        } else {
            return result = {stage: stage, numbers: number, len: arrayLength}
        }
    }
    return result = {stage: stage, numbers: number, len: arrayLength}
}


console.log( solution(stages, user) );




