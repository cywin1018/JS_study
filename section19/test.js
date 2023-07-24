let text = "";
let list =[];
while(text !== "q"){
    text = prompt("What would you like to do?")
    if(text === "new"){
        let str = prompt("Add a todo");
        list.push(str);
        console.log(`${str} added to list`)
    }else if(text === "list"){
        console.log("******************")
       for(let i=0;i<list.length;i++)
           console.log(`${i} : ${list[i]}`);
        console.log("******************")
    }else if(text === "delete"){
        let num = prompt("input number");
        if(num>list.length)
            num = prompt("Too high")
        else{
            list.splice(num,1);
            console.log("Todo Removed")
        }
    }else if(text === "quit"){
        text = "q";
        console.log("OK, YOU QUIT THIS APP")
    }
}