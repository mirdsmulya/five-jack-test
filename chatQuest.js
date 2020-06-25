
const messages = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
console.log("Input:");
console.log(messages);


function solution(input) {
    var answer = []
    const temp = []    
    for (let i = 0; i < input.length; i++) {        
        const arr = input[i].split(" ")
        if (arr[0] == "Enter") {
            temp.push( enterCheck(arr, temp) ) 
        }
        if (arr[0] == "Change") {
            changeNickName(arr, temp)
        } 
        if (arr[0] == "Leave") {
            temp.push(leftRoom(arr, temp))
        } 
    }
    console.log("Result:");
    answer = recordData(temp, answer);
    return answer
}


function changeNickName(arr, tempHistory) { //"Change uid4567 Ryan"
    for (let i = 0; i < tempHistory.length; i++) {
        let message = tempHistory[i]        // e.g: message = [ 'Enter', 'uid1234', 'Muzi', false ] 
        if (message[1] == arr[1]) {
            message[2] = arr[2]    
        }
    }    
}


function enterCheck(arr, tempHistory) {
    for (let i = 0; i < tempHistory.length; i++ ) { // e.g: arr = [ 'Enter', 'uid4567', 'Prodo' ]
        let message = tempHistory[i]                // e.g: message = [ 'Enter', 'uid1234', 'Muzi', false ] 
        console.log(arr);                  
        
        if (message[1] == arr[1] ) {
            if (message[3]) {
                continue
            } else {   
                message[2] = arr[2]                
                message[3] = true
                arr[3] = true
            }
        }
    }
    arr.push(true)
    return arr
}


function leftRoom(arr, tempHistory) {
    for (let i = 0; i < tempHistory.length; i++) {
        let message = tempHistory[i]
        if (arr[1] == message[1]) {
            message[3] = false
            arr[2] = message[2]
            arr[3] = false
        }
    }
    return arr
}


function recordData(tempHistory, answer) {
    tempHistory.map(message => {        
        if (message[0] == 'Enter') {
            const result = message[2] + " came in"
            answer.push(result)
        }
        if (message[0] == 'Leave') {
            const result = message[2] + " has left"
            answer.push(result)
        }
    })
    return answer
}

console.log( solution(messages) );
