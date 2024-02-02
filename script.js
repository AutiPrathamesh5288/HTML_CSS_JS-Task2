const emailInput = document.getElementById("email");
const emailValidation = document.getElementById("emailv");

const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,}(?:\.(?:com|in))?(?![a-zA-Z0-9._%+-])?$/;

const alphaInput = document.getElementById("alpha");
const alphaValidation = document.getElementById("alphav");
const alphaRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;

const radioInputMale = document.getElementById("male");
const radioInputFemale = document.getElementById("female");
const radioValidation = document.getElementById("genderv");

const urlInput = document.getElementById("url");
const urlValidation = document.getElementById("urlv");
const urlRegex = /^(https?:\/\/(www\.)?)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,}){1,2}(?:\/[^\s]*)?(?:\.com|\.in)?$/

const textareaInput = document.getElementById("textarea1");
const textareaValidation = document.getElementById("textareav");
const textAreaRegex = /^.{10,100}$/;

const imageFieldInput = document.getElementById("imagechoose");
const imageFieldValidation = document.getElementById("imagev");

const passwordInput = document.getElementById("password");
const passwordValidation = document.getElementById("passwordv");
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,16}$/;

const phoneInput = document.getElementById("phoneno");
const phoneValidation = document.getElementById("phonenov");
const phoneRegex = /^\+?[6-9]\d{9}$/;

const dateInput = document.getElementById("dob");
const dateValidation = document.getElementById("datev");

const currencyInput = document.getElementById("currency");
const currencyValidation = document.getElementById("currencyv");
const currencyRegex = /^(?:0|[1-9]\d{0,2}(?:,\d{3})*(?:\.\d{0,2})?|\d{1,3}(?:\.\d{0,2})?)$/;

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
    else if (!currencyRegex.test(currencyValidation.value.trim())) {
        currencyValidation.textContent = "Invalid currency ";
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
        removeBorder();
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
function removeBorder() {
    emailInput.style.border='';
    alphaInput.style.border='';
    urlInput.style.border='';
    textareaInput.style.border='';
    passwordInput.style.border='';   
    phoneInput.style.border=''; 
    currencyInput.style.border=''; 
    dateInput.style.border = '';
}
// For Button Hide/View
const passInput = document.getElementById("password");
const togglePassBtn = document.getElementById("tog-btn");
togglePassBtn.addEventListener("click", function () {
    const type =
        passInput.getAttribute("type") === "password" ? "text" : "password";
    passInput.setAttribute("type", type);
    togglePassBtn.innerHTML = type === "password" ? "VIEW" : "HIDE";
});



let isValidEmail = false;

emailInput.addEventListener('input', function () {
    let emailValue = emailInput.value.trim();
    emailInput.style.border = '2px solid red';

    if (!emailValue) {
        emailValidation.textContent = 'Email is required';
        isValidEmail = false;
    } else if (emailValue.length > 30 || !emailRegex.test(emailValue)) {
        emailValidation.textContent = 'Please enter a valid email with a maximum length of 30 characters and ending with .com or .in';
        isValidEmail = false;
    } else {
        emailValidation.textContent = '';
        emailInput.style.border = '2px solid #00FF00';
        isValidEmail = true;
    }

    // Prevent typing beyond 30 characters
    if (emailValue.length >= 30) {
        emailInput.value = emailValue.slice(0, 30);
    }
});

// Add an event listener to immediately remove validation message after input
emailInput.addEventListener('input', function () {
    if (isValidEmail && emailValidation.textContent) {
        emailValidation.textContent = '';
        isValidEmail = false;
    }
});



alphaInput.addEventListener('input', function () {
    let alphaValue = alphaInput.value.trim();
    alphaInput.style.border = '2px solid red';

    if (!alphaValue) {
        alphaValidation.textContent = 'Username is required';
    } else if ( !alphaRegex.test(alphaValue) || alphaValue.split(/\s+/).some(word => word.length < 3)) {
        alphaValidation.textContent = 'Please enter a valid username with each word starting with a capital letter and a minimum length of 3 characters';
    } else {
        alphaInput.style.border = '2px solid #00FF00';
        alphaValidation.textContent = '';
    }
    if (alphaValue.length >= 30) {
        alphaInput.value = alphaValue.slice(0, 30);
    }
});


document.addEventListener("DOMContentLoaded", function() {

    urlInput.addEventListener("input", function() {
        const url = urlInput.value.trim();
        urlInput.style.border = '2px solid red';

        if (!url.match(urlRegex) || !url.endsWith(".com") && !url.endsWith(".in")) {
            urlValidation.textContent = "Invalid URL format. It should end with .com or .in.";
        } else {
            urlValidation.textContent = "";
            urlInput.style.border = '2px solid #00FF00';
        }
    });
});


textareaInput.addEventListener('input', function () {
    let textareaValue = textareaInput.value.trim();
    textareaInput.style.border = '2px solid red';

    if (!textareaValue) {
        textareaValidation.textContent = 'Description is required';
    } else if (!textAreaRegex.test(textareaValue)) {
        textareaValidation.textContent = 'Please enter a description between 10 and 100 characters';
    } else {
        textareaValidation.textContent = '';
        textareaInput.style.border = '2px solid #00FF00';
    }
});


passwordInput.addEventListener('input', function () {
     passwordValue = passwordInput.value.trim();
     passwordInput.style.border = '2px solid red';

    if (passwordValue.length < 8) {
        passwordValidation.textContent = 'Password must be at least 8 characters';
    } else if (passwordValue.length > 16) {
        passwordValue = passwordValue.slice(0, 16); // Trim to maximum 16 characters
        passwordInput.value = passwordValue;
        passwordValidation.textContent = 'Password can be at most 16 characters';
    } else if (!passwordRegex.test(passwordValue)) {
        passwordValidation.textContent = 'Please enter a valid password it conatains atleast one capital letter one Symbol';
    } else {
        passwordValidation.textContent = '';
        passwordInput.style.border = '2px solid #00FF00';
    }
});

phoneInput.addEventListener('input', function () {
    let phoneValue = phoneInput.value.trim();
    phoneInput.style.border = '2px solid red';

    if (!phoneValue) {
        phoneValidation.textContent = 'Phone number is required';
    } else if (phoneValue.length > 10) {
        phoneValue = phoneValue.slice(0, 10); 
        phoneInput.value = phoneValue;
        phoneValidation.textContent = 'Phone number can be at most 10 digits';
    } else if (!phoneRegex.test(phoneValue)) {
        phoneValidation.textContent = 'Please enter a valid phone number';
    } else {
        phoneValidation.textContent = '';
        phoneInput.style.border = '2px solid #00FF00';

        
        if (phoneValue.length === 10) {
            setTimeout(() => {
                phoneValidation.textContent = '';
            });
        }
    }
});


const currentDate = new Date();
const minDate = new Date(currentDate);
const maxDate = new Date(currentDate);
minDate.setFullYear(currentDate.getFullYear() - 100);

const minDateString = minDate.toISOString().split('T')[0];
const maxDateString = maxDate.toISOString().split('T')[0];
dateInput.setAttribute('min', minDateString);
dateInput.setAttribute('max', maxDateString);

dateInput.addEventListener('input', function () {
    const enteredDate = new Date(dateInput.value.trim()); 
    dateInput.style.border = '2px solid red';

    if (!enteredDate) {
        dateValidation.textContent = 'Date is required';
    } else if (enteredDate > maxDate || enteredDate < minDate) {
        dateValidation.textContent = 'Enter a valid date between ' + minDateString + ' and ' + maxDateString;
    } else {
        dateValidation.textContent = '';
        dateInput.style.border = '2px solid #00FF00';
    }
});


currencyInput.addEventListener('input', function () {
    let currencyValue = currencyInput.value.trim();
    currencyInput.style.border = '2px solid red';

    if (!currencyValue) {
        currencyValidation.textContent = 'Currency is required';
    } else if (currencyValue.length <= 1) {
        currencyValidation.textContent = 'Currency must be more than 3 number';
    } else {
        const numericValue = parseFloat(currencyValue.replace(/[^0-9.-]+/g, ''));

        if (isNaN(numericValue)) {
            currencyValidation.textContent = 'Invalid currency value';
        } else {
            const maxValue = 1e12;  
            if (numericValue > maxValue) {
                currencyValue = currencyValue.slice(0, 12);  
                currencyInput.value = currencyValue;  
            } else {
                currencyValidation.textContent = '';
                currencyInput.style.border = '2px solid #00FF00';
            }
        }
    }
});


