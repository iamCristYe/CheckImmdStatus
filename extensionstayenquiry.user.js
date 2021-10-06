// ==UserScript==
// @name         CheckImmdStatus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automated script to check immd status
// @author       You
// @match        https://*.immd.gov.hk/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //open https://www.gov.hk/en/apps/immdextensionstayenquiry.htm
    //or   https://www.gov.hk/tc/apps/immdextensionstayenquiry.htm

    //fill in the blanks here
    let Application_reference_number_part1 = "";
    let Application_reference_number_part2 = "";
    let Application_reference_number_part3 = "";
    let Birthday_day = "";
    let Birthday_month = "";
    let Birthday_year = "";

    if (document.getElementsByTagName("app-application-status-enquiry-requirements")[0].innerText.indexOf("You may use this service to enquire the application status") != -1 || document.getElementsByTagName("app-application-status-enquiry-requirements")[0].innerText.indexOf("使用此") != -1) {
        document.getElementsByTagName("button")[3].click();
    }

    if (document.getElementsByTagName("app-application-status-enquiry-common-container")[0].innerText.indexOf("的目的") != -1) {
        document.getElementsByTagName("input")[0].click();
        document.getElementsByTagName("button")[3].click();
    }

    if (document.getElementsByTagName("td")[3] != undefined) {
        if (document.getElementsByTagName("td")[3].innerText.indexOf("Applicant's date of birth") == -1 && document.getElementsByTagName("td")[3].innerText.indexOf("出生日期") == -1) {
            document.getElementsByTagName("input")[0].value = Application_reference_number_part1;
            document.getElementsByTagName("input")[1].value = Application_reference_number_part2;
            document.getElementsByTagName("input")[2].value = Application_reference_number_part3;
            document.getElementsByClassName("buttondefault")[0].click();
        }
        else {
            document.getElementsByTagName("input")[0].value = Birthday_day;
            document.getElementsByTagName("input")[1].value = Birthday_month;
            document.getElementsByTagName("input")[2].value = Birthday_year;
            document.getElementsByClassName("buttondefault")[0].click();
        }
    }
})();
