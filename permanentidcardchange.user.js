// ==UserScript==
// @name         PRchange
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automated script to check immd status
// @author       You
// @match        https://webapp.es2.immd.gov.hk/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //fill in the blanks here
    let Application_reference_number = "";
    let Application_reference_number_verification = "";
    let Birthday_day = "";
    let Birthday_month = "";
    let Birthday_year = "";

    let myInterval = setInterval(function () {
        if (document.getElementsByTagName("app-appointment-verification-permanent-id-startpage")[0]) {
            if (document.getElementsByTagName("app-appointment-verification-permanent-id-startpage")[0].innerText.indexOf("If you have applied for verification of eligibility") != -1) {
                document.getElementsByTagName("a")[11].click()
            }
        }
        if (document.getElementsByTagName("app-appointment-verification-permanent-id-requirements")[0]) {
            if (document.getElementsByTagName("app-appointment-verification-permanent-id-requirements")[0].innerText.indexOf("The date of appointment available is within") != -1) {
                document.getElementsByTagName("button")[3].click();
            }
        }

        if (document.getElementsByTagName("app-appointment-verification-permanent-id-input-details")[0]) {
            if (document.getElementsByTagName("app-appointment-verification-permanent-id-input-details")[0].innerText.indexOf("Non-text Contents on GovHK") != -1) {
                document.getElementsByTagName("input")[0].click();
                document.getElementsByTagName("button")[3].click();
            }
        }

       if (document.getElementsByTagName("app-appointment-verification-permanent-id-container")[0]) {
            if (document.getElementsByTagName("app-appointment-verification-permanent-id-container")[0].innerText.indexOf("Please input the") != -1) {
                document.getElementsByTagName("input")[0].value = Application_reference_number;
                document.getElementsByTagName("input")[1].value = Application_reference_number_verification;
                document.getElementsByTagName("select")[0].value = Birthday_day;
                document.getElementsByTagName("select")[1].value = Birthday_month;
                document.getElementsByTagName("select")[2].value = Birthday_year;
                //document.getElementsByTagName("button")[4].click();
                clearInterval(myInterval);

            }
        }


    }, 100);
})();
