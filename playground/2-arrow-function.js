//const square =(x) =>x*x
//console.log(square(2))

//const square = (x) =>{
    // return x*x
//}

const event={
    name:"BIRthday Event",
    guestList:['Andrew','Amal','Jen'],
    printGuestList(){
        console.log("Guest list for"+this.name)
        //loop
        this.guestList.forEach((guest)=>{
            //=> key wont bind its own variable instead it takes above thing
            console.log(guest+"is attending"+this.name)
        })
    }
}

event.printGuestList()