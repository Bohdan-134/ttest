input = document.getElementsByName("masked-phone"), i = input.length;
errorMsg = document.getElementsByClassName("error-msg"),
  validMsg = document.getElementsByClassName("valid-msg"),
  countryInput = document.getElementsByName("country");

var errorMap = ["Incorrect", "Invalid country code", "To short", "To long", "Incorrect"];

while (i--) {
  var inputList = input[i],
    errorMsgItem = errorMsg[i],
    validMsgItem = validMsg[i],
    countryInputItem = countryInput[i];

  var iti = window.intlTelInput(inputList, {
    utilsScript: "intl-tel-omni/js/utils.js",
    separateDialCode: true,
    onlyCountries: ["pl"],
    initialCountry: "pl",

  });


  async function countryIso2Delay() {
    var countryIso2 = await document.getElementsByClassName('iti__country');

    var getCountryIso2 = () => {
      var countryData = iti.getSelectedCountryData().iso2;
      countryInputItem.value = countryData;
    }

    var getSelectedCountryIso2 = () => {
      for (i = 0; i < countryIso2.length; i++) {
        countryIso2[i].addEventListener('click', () => {
          setTimeout(() => {
            getCountryIso2();
            omniValues();
          }, 99);
        })
      }
    };

    getSelectedCountryIso2();
  };

  countryIso2Delay();

  var reset = function () {
    inputList.classList.remove("error");
    errorMsgItem.innerHTML = "";
    errorMsgItem.classList.add("hide");
    validMsgItem.classList.add("hide");
  };

  inputList.addEventListener('input', function () {
    reset();
    if (inputList.value.trim()) {
      if (iti.isValidNumber()) {
        validMsgItem.classList.remove("hide");
      } else {
        inputList.classList.add("error");
        let errorCode = iti.getValidationError();
        console.log(errorCode);
        errorMsgItem.innerHTML = errorMap[errorCode];
        errorMsgItem.classList.remove("hide");
        if(errorCode == -99) {
          errorMsgItem.innerHTML = 'Too short';
        };
      }
    };
  });

}

var formPhoneInput = document.getElementsByName('masked-phone'), phoneInputLength = formPhoneInput.length;

while (phoneInputLength--) {
  formPhoneInput[phoneInputLength].addEventListener('keyup', () => {
    var countryPhoneCode = document.getElementsByClassName('iti__selected-dial-code'), codeLength = countryPhoneCode.length;
    var finalValue = document.getElementsByName('phone');
    while (codeLength--) {
      finalValue[codeLength].value = (countryPhoneCode[codeLength].innerHTML + formPhoneInput[codeLength].value).replace(/[^0-9]/g, '');
    }

  });
}





