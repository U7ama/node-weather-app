const submitBtn = document.getElementById("submitBtn")
const getInfo = (event) =>{
    event.preventDefault()
    alert("Working")
    console.log("Working")
}

submitBtn.addEventListener("click",getInfo)



