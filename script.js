const emailInput = document.getElementById("email");
const emailValidation = document.getElementById("emailv");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const alphaInput = document.getElementById("alpha");
const alphaValidation = document.getElementById("alphav");
const alphaRegex = /^[a-zA-Z]{5,30}$/;

const radioInputMale = document.getElementById("male");
const radioInputFemale = document.getElementById("female");
const radioValidation = document.getElementById("genderv");

const urlInput = document.getElementById("url");
const urlValidation = document.getElementById("urlv");
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

const textareaInput = document.getElementById("textarea1");
const textareaValidation = document.getElementById("textareav");
const textAreaRegex = /^.{10,50}$/;

const imageFieldInput = document.getElementById("imagechoose");
const imageFieldValidation = document.getElementById("imagev");

const passwordInput = document.getElementById("password");
const passwordValidation = document.getElementById("passwordv");
const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,16}$/;

const phoneInput = document.getElementById("phoneno");
const phoneValidation = document.getElementById("phonenov");
const phoneRegex = /^\+?\d{10}$/;

const dateInput = document.getElementById("dob");
const dateValidation = document.getElementById("datev");

const currencyInput = document.getElementById("currency");
const currencyValidation = document.getElementById("currencyv");


const checkboxMean = document.getElementById("mean");
const checkboxBlockchain = document.getElementById("blockchain");
const checkboxReact = document.getElementById("react");
const checkboxBa = document.getElementById("ba");
const checkboxValidation = document.getElementById("checkv");

function validationForm() {

    clearValidation();

    //email
    if(!emailInput.value.trim() || !alphaInput.value.trim() ||  !radioInputMale.checked && !radioInputFemale.checked || !urlInput.value.trim() || !textareaInput.value.trim() || !imageFieldInput.value.trim() || !passwordInput.value.trim() || !phoneInput.value.trim() || !dateInput.value.trim() || !currencyInput.value.trim() || !checkboxMean.checked && !checkboxBlockchain.checked && !checkboxReact.checked && !checkboxBa.checked)
    {
    if (!emailInput.value.trim()) {
        emailValidation.textContent = "Email is required";
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailValidation.textContent = "Invalid Email";
    }

    //alpha
    if (!alphaInput.value.trim()) {
        alphaValidation.textContent = "Username is required";
    } else if (!alphaRegex.test(alphaInput.value.trim())) {
        alphaValidation.textContent = "Invalid Username";
    }

    //radio
    if (!radioInputMale.checked && !radioInputFemale.checked) {
        radioValidation.textContent = "Please select any one";
    }

    //url
    if (!urlInput.value.trim()) {
        urlValidation.textContent = "URL is required";
    } else if (!urlRegex.test(urlInput.value.trim())) {
        urlValidation.textContent = "Invalid url";
    }
    
    //textarea
    if (!textareaInput.value.trim()) {
        textareaValidation.textContent = "Text is required";
    } else if (!textAreaRegex.test(textareaInput.value.trim())) {
        textareaValidation.textContent = "Invalid text You have to add 10-50 characters ";
    }

    // //textarea Field
    // if (!textareaInput.value.trim()) {
    //     textareaValidation.textContent = "Text is required";
    // } else if (!textAreaRegex.test(textareaInput.value.trim())) {
    //     urlValidation.textContent =
    //         "Invalid text You have to add 10-50 characters ";
    // }

    //imagearea Field
    if (!imageFieldInput.value.trim()) {
        imageFieldValidation.textContent = "Image is required";
    }

    //password field
    if (!passwordInput.value.trim()) {
        passwordValidation.textContent = "Password is required";
    } else if (!passwordRegex.test(passwordInput.value.trim())) {
        passwordValidation.textContent = "Invalid password";
    }

    //phoneno field
    if (!phoneInput.value.trim()) {
        phoneValidation.textContent = "Phone number is required";
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneValidation.textContent = "Invalid phone number";
    }

    //Date field
    if (!dateInput.value.trim()) {
        dateValidation.textContent = "DOB is required";
    }

    //currency field
    if (!currencyInput.value.trim()) {
        currencyValidation.textContent = "currency is required";
    }


    //checkbox field
    if (
        !checkboxMean.checked &&
        !checkboxBlockchain.checked &&
        !checkboxReact.checked &&
        !checkboxBa.checked
    ) {
        checkboxValidation.textContent = "Please select atleast one";
    }
}

    else{
        clearform();
        alert("Form is Submitted!");
    }
}

function clearValidation() {
    emailValidation.textContent = "";
    alphaValidation.textContent = "";
    radioValidation.textContent = "";
    urlValidation.textContent = "";
    textareaValidation.textContent = "";
    imageFieldValidation.textContent = "";
    passwordValidation.textContent = "";
    phoneValidation.textContent = "";
    dateValidation.textContent = "";
    currencyValidation.textContent = "";
    checkboxValidation.textContent = "";
}

function clearform() {
    emailInput.value = '';
    alphaInput.value = '';
    radioInputMale.checked = false;
    radioInputFemale.checked = false;
    urlInput.value = '';
    textareaInput.value = '';
    imageFieldInput.value = '';
    passwordInput.value = '';
    phoneInput.value = '';
    dateInput.value = '';
    currencyInput.value = '';
    checkboxMean.checked = false;
    checkboxBlockchain.checked = false;
    checkboxReact.checked = false;
    checkboxBa.checked = false;


}


const passInput = document.getElementById("password");
const togglePassBtn = document.getElementById("tog-btn");
togglePassBtn.addEventListener("click", function () {
    console.log("jhi");
    const type =
        passInput.getAttribute("type") === "password" ? "text" : "password";
    passInput.setAttribute("type", type);
    togglePassBtn.innerHTML = type === "password" ? "VIEW" : "HIDE";
});
