let object = {

    name : "Jean",
    surname :  "Tshimbalanga",
    middlename :"Kasenda",

    vueName : ()=>{
        return surname
    }
}


console.log("Hi")
console.log(object.name)
console.log(object.middlename)
console.log(object.vueName())
console.log(object.surname)