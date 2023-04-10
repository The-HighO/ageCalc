let today = new Date();
let dobInput = document.getElementById("dob");
const ageDisplay = document.getElementById("result");
let eligibility = document.getElementById("eligibility")
let outputAge = '';

dobInput.addEventListener("change", function() {
    let dateOfBirth = dobInput.value;
    let dob =dateOfBirth.split("-");
    let year = dob.filter((item)=>{return item.length >=4
    });
    console.log(year);
    let age = today.getFullYear() - year;
    outputAge = age
});
function showAge() {
    ageDisplay.innerHTML = outputAge
    
    if (outputAge >=25) { eligibility.innerHTML= "Oops!! You are not Eligible for this Offer..."
        
    } else {
        eligibility.innerHTML= "Hurray!!! You Qualify for this Offer"
    }
}