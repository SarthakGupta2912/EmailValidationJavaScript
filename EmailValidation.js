 function EmailCheck() {
            var atTheRateCounter = 0;
            var validEmailList = ["gmail.com", "yahoo.com", "hotmail.com"];
            isThereError = false;

            //Run through whole input value    abc@gmail.com
            for (let i = 0; i < email.value.toString().length; i++) {

                //Check '@' symbol count
                if (email.value.toString().charAt(i) == '@') {
                    atTheRateCounter++;

                    //Check '@' symbol count again
                    for (let j = i + 1; j < email.value.toString().length; j++) {
                        if (email.value.toString().charAt(j) == '@') {
                            atTheRateCounter++;
                            isThereError = true;
                            break;
                        }
                    }

                    //if '@' symbol count == 1
                    if (atTheRateCounter == 1) {
                        var temp = "";
                        var isEmailInList = false;

                        // store value after '@' in temp variable through characters
                        for (let k = i + 1; k <= email.value.toString().length; k++) {
                            temp += email.value.toString().charAt(k);
                        }

                        //check if temp variable contains valid email domains
                        for (let l = 0; l < validEmailList.length; l++) {
                            if (temp == validEmailList[l]) {
                                isEmailInList = true;
                            }
                        }

                        //if email domain does not match the given domain list
                        if (isEmailInList == false) {
                            console.log("Please enter a valid email");
                            alert("Please enter a valid email domain");
                            isThereError = true;
                            break;
                        }
                    }
                    //if '@' symbol count > 1
                    else {
                        console.log("Please enter a valid email");
                        alert("Please enter a valid email address with a single '@' symbol");
                        isThereError = true;
                        break;
                    }
                }
            }
            //if '@' is 0
            if (atTheRateCounter == 0) {
                console.log("Please enter a valid email");
                alert("Please enter a valid email with 1 '@' symbol");
                isThereError = true;
            }
        }
