//const square =(x) =>x*x
//console.log(square(2))

const event={
    name:"BIRthday Event",
    guestList:['Andrew','Amal','Jen'],
    printGuestList(){
        console.log("Guest list for"+this.name)
        //loop
        this.guestList.forEach((guest)=>{
            console.log(guest+"is attending"+this.name)
        })
    }
}

event.printGuestList()