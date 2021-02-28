$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources%E2%80%A8/features/us01.feature");
formatter.feature({
  "name": "User can register on GMI Bank",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user writes SSN number using \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user writes surname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes mobilephone \"\u003cmobilephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email"
      ]
    },
    {
      "cells": [
        "123-45-6789",
        "Ayse",
        "Yilmaz",
        "123 Main Street Anycity FL 32104",
        "123-123-4444",
        "Thebestusername123",
        "xyz@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us02.feature");
formatter.feature({
  "name": "System should not allow anyone to register with invalid credentials",
  "description": "    seeing the message \"If you want to sign in, you can try the default\n    accounts:- Administrator (login\u003d\"admin\" and password\u003d\"admin\")\n    - User (login\u003d\"user\" and password\u003d\"user\").",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC0001"
    }
  ]
});
formatter.step({
  "name": "check did user write SSN number using \"\u003cSSN\u003e\" verify",
  "keyword": "And "
});
formatter.step({
  "name": "check did user write firstname \"\u003cfirstname\u003e\" verify",
  "keyword": "When "
});
formatter.step({
  "name": "check did user write surname \"\u003clastname\u003e\" verify",
  "keyword": "And "
});
formatter.step({
  "name": "check did user write address \"\u003caddress\u003e\" verify",
  "keyword": "Then "
});
formatter.step({
  "name": "check did user write mobilephone \"\u003cmobilephone\u003e\" verify",
  "keyword": "And "
});
formatter.step({
  "name": "check did user write username \"\u003cusername\u003e\" and verify",
  "keyword": "Then "
});
formatter.step({
  "name": "check did user write email \"\u003cemail\u003e\" and verify",
  "keyword": "And "
});
formatter.step({
  "name": "check did user write New_password \"\u003cNew_password\u003e\" and verify",
  "keyword": "Then "
});
formatter.step({
  "name": "check did user write New_password_confirmation \"\u003cNew_password_confirmation\u003e\" and verify",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email",
        "New_password",
        "New_password_confirmation"
      ]
    },
    {
      "cells": [
        "",
        "Ayse",
        "Yilmaz",
        "123 Main Street Anycity FL 32104",
        "123-123-4444",
        "Thebestusername123",
        "xyz@gmail.com",
        "12345",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC0001"
    }
  ]
});
formatter.step({
  "name": "check did user write SSN number using \"\" verify",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_SSN_number_using_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write firstname \"Ayse\" verify",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_firstname_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write surname \"Yilmaz\" verify",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_surname_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write address \"123 Main Street Anycity FL 32104\" verify",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_address_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write mobilephone \"123-123-4444\" verify",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_mobilephone_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write username \"Thebestusername123\" and verify",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_username_and_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write email \"xyz@gmail.com\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.check_did_user_write_email_and_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write New_password \"12345\" and verify",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.checkDidUserWriteNew_passwordAndVerify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check did user write New_password_confirmation \"12345\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.checkDidUserWriteNew_password_confirmationAndVerify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"SSN number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC0002"
    }
  ]
});
formatter.step({
  "name": "user cannot write chars other than - for SSN number \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user writes surname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes mobilephone \"\u003cmobilephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email"
      ]
    },
    {
      "cells": [
        "ssnNumber2#",
        "Ayse",
        "Yilmaz",
        "123 Main Street Anycity FL 32104",
        "123-123-4444",
        "Thebestusername123",
        "xyz@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"SSN number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC0002"
    }
  ]
});
formatter.step({
  "name": "user cannot write chars other than - for SSN number \"ssnNumber2#\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.userCannotWriteCharsOtherThanForSSNNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"Mobilephone number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC0003"
    }
  ]
});
formatter.step({
  "name": "user writes SSN number using \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user writes surname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user cannot write chars other than - for mobilephone \"\u003cmobilephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email"
      ]
    },
    {
      "cells": [
        "123-45-6789",
        "Ayse",
        "Yilmaz",
        "123 Main Street Anycity FL 32104",
        "123_123_4444",
        "Thebestusername123",
        "xyz@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"Mobilephone number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC0003"
    }
  ]
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot write chars other than - for mobilephone \"123_123_4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.userCannotWriteCharsOtherThanForMobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"Email id cannot be created without \"@\" sign and \".\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC0004"
    }
  ]
});
formatter.step({
  "name": "user writes SSN number using \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user writes surname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user writes mobilephone \"\u003cmobilephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user writes username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user cannot write email without @ and . extensions \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email"
      ]
    },
    {
      "cells": [
        "123-45-6789",
        "Ayse",
        "Yilmaz",
        "123 Main Street Anycity FL 32104",
        "123-123-4444",
        "Thebestusername123",
        "xyz@gmailcom"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"Email id cannot be created without \"@\" sign and \".\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC0004"
    }
  ]
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot write email without @ and . extensions \"xyz@gmailcom\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us02_StepDefinitions.userCannotWriteEmailWithoutAndExtensions(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us03.feature");
formatter.feature({
  "name": "\"Registration page should restrict password usage to a secure and high level passcode\"",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenarioOutline({
  "name": "when user writes the password with same category there should be just one level",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user writes the password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the chart has just one level",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter same password for confirmation \"\u003cconfirmation_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "confirmation_password"
      ]
    },
    {
      "cells": [
        "aaaaaaa",
        "aaaaaaa"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "when user writes the password with same category there should be just one level",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user writes the password  \"aaaaaaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.userWritesThePassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the chart has just one level",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verifyTheChartHasJustOneLevel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter same password for confirmation \"aaaaaaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.user_should_enter_same_password_for_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verify_the_confirmation_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"There should be at least 1 lowercase char or 1 uppercase char or 1 number or i special char",
  "description": "      for stronger password and see the level chart change by 2 accordingly\"",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user writes the password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the chart has changed one level and the level is two",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter same password for confirmation \"\u003cconfirmation_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "confirmation_password"
      ]
    },
    {
      "cells": [
        "111111a",
        "111111a"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"There should be at least 1 lowercase char or 1 uppercase char or 1 number or i special char",
  "description": "      for stronger password and see the level chart change by 2 accordingly\"",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user writes the password  \"111111a\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.userWritesThePassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the chart has changed one level and the level is two",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verifyTheChartHasChangedOneLevelAndTheLevelIsTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter same password for confirmation \"111111a\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.user_should_enter_same_password_for_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verify_the_confirmation_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"There should be at least 2 of the 1 lowercase char or 1 uppercase char or 1 number or i special char for stronger password and",
  "description": "  see the level chart change by 4 accordingly\"",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user writes the password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the chart has changed one level and the level is four",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter same password for confirmation \"\u003cconfirmation_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "confirmation_password"
      ]
    },
    {
      "cells": [
        "AAAAAa1",
        "AAAAAa1"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"There should be at least 2 of the 1 lowercase char or 1 uppercase char or 1 number or i special char for stronger password and",
  "description": "  see the level chart change by 4 accordingly\"",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user writes the password  \"AAAAAa1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.userWritesThePassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the chart has changed one level and the level is four",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verifyTheChartHasChangedOneLevelAndTheLevelIsFour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter same password for confirmation \"AAAAAa1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.user_should_enter_same_password_for_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verify_the_confirmation_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"There should all of the catagories  lowercase char and uppercase char and  number and  special char",
  "description": "  for stronger password and see the level chart change by 5 accordingly\"",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user writes the password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the chart has changed one level and the level is five",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter same password for confirmation \"\u003cconfirmation_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "confirmation_password"
      ]
    },
    {
      "cells": [
        "A^AAAa1",
        "A^AAAa1"
      ]
    }
  ]
});
formatter.background({
  "name": "User in the registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes SSN number using \"123-45-6789\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes firstname \"Ayse\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes surname \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes address \"123 Main Street Anycity FL 32104\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes mobilephone \"123-123-4444\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes username \"Thebestusername123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us01_StepDefinitions.user_writes_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "\"There should all of the catagories  lowercase char and uppercase char and  number and  special char",
  "description": "  for stronger password and see the level chart change by 5 accordingly\"",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user writes the password  \"A^AAAa1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.userWritesThePassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the chart has changed one level and the level is five",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verifyTheChartHasChangedOneLevelAndTheLevelIsFive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter same password for confirmation \"A^AAAa1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.user_should_enter_same_password_for_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the confirmation password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us03_StepDefinition.verify_the_confirmation_password()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us04.feature");
formatter.feature({
  "name": "Login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenario({
  "name": "User enter credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@login01"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify log in the personal page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.verify_log_in_the_personal_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User input valid credentials after that click Cancel button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@login02"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click cencel button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_cencel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us05.feature");
formatter.feature({
  "name": "Login page should not be accessible with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_0001_User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0001"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hey",
        "team35GmiBankProject"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0001_User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0001"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"team35GmiBankProject\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0002_User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0002"
    }
  ]
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the error message empty contains \"Username\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "team35GmiBankProject"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0002_User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0002"
    }
  ]
});
formatter.step({
  "name": "user enters the password \"team35GmiBankProject\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message empty contains \"Username\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verifyTheErrorMessageEmptyContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0003_User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0003"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "team35GmiBankProject",
        "hey"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0003_User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0003"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"team35GmiBankProject\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0004_User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0004"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the error message empty contains \"Password\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "team35GmiBankProject"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0004_User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0004"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"team35GmiBankProject\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message empty contains \"Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verifyTheErrorMessageEmptyContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0005_User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0005"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hey",
        "hey"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0005_User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0005"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0007_User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0007"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on the reset option",
  "keyword": "And "
});
formatter.step({
  "name": "verify the resetPassword title is \"Reset your password\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hey",
        "hey"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0007_User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0007"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the reset option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_reset_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the resetPassword title is \"Reset your password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_resetPassword_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0008_User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0008"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on the register a new account option",
  "keyword": "And "
});
formatter.step({
  "name": "verify the RegisterANewAccount title is \"Registration\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid username and valid password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hey",
        "hey"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the main page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on person sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_person_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0008_User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_0008"
    }
  ]
});
formatter.step({
  "name": "user enters the username \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"hey\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message contains \"Failed\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.click_on_the_register_a_new_account_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the RegisterANewAccount title is \"Registration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us05_StepDefinitions.verify_the_RegisterANewAccount_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us06_us07.feature");
formatter.feature({
  "name": "US006",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenario({
  "name": "TC001 User Info Being Populated When Navigating User Info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks profile image",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_profile_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks User Info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_User_Info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies firstname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_verifies_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies lastname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_verifies_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifes email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_verifes_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies language",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_verifies_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There Should be  Two Language Avaible Eng and Tur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TCLanguage"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks profile image",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_profile_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks User Info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_User_Info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User change language",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_change_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies settings are changing",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_verifies_settings_are_changing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be changing all data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TCEmail"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks profile image",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_profile_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks User Info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clicks_User_Info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User change firstname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_change_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear firstname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clear_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User change lastname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_change_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear lastname",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clear_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User change email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_change_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear first extension",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clear_first_extension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear  second extension",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us06_us07_StepDefinitions.user_clear_second_extension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us08.feature");
formatter.feature({
  "name": "US_Story08 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The old password should not be used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0801"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies there is old password password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.verifiesBug()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "New password should have at least 1 \"\u003cvalue1\u003e\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_Valid_0803"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter new passwords \"\u003cvalidPassword1\u003e\" and verifies that  should be at least one \"\u003cvalue1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "validPassword1",
        "value1"
      ]
    },
    {
      "cells": [
        "NewPasswordAllLowercase",
        "ashleyy123"
      ]
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New password should have at least 1 \"ashleyy123\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0803"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new passwords \"NewPasswordAllLowercase\" and verifies that  should be at least one \"ashleyy123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterNewValidPasswords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "New password should have at least 1 \"\u003cvalue2\u003e\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_Valid_0805"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter new passwords \"\u003cvalidPassword2\u003e\" and verifies that  should be at least one \"\u003cvalue2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "validPassword2",
        "value2"
      ]
    },
    {
      "cells": [
        "NewPasswordWithOneUpperCase",
        "Ashleyy1234"
      ]
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New password should have at least 1 \"Ashleyy1234\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0805"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new passwords \"NewPasswordWithOneUpperCase\" and verifies that  should be at least one \"Ashleyy1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterNewValidPasswords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "New password should have at least 1 \"\u003cvalue3\u003e\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_Valid_0807"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter new passwords \"\u003cvalidPassword3\u003e\" and verifies that  should be at least one \"\u003cvalue3\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "validPassword3",
        "value3"
      ]
    },
    {
      "cells": [
        "NewPasswordWithMoreOneDigit",
        "Ashleyy12"
      ]
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New password should have at least 1 \"Ashleyy12\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0807"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new passwords \"NewPasswordWithMoreOneDigit\" and verifies that  should be at least one \"Ashleyy12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterNewValidPasswords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "New password should have at least 1 \"\u003cvalue4\u003e\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_Valid_0809"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter new passwords \"\u003cvalidPassword4\u003e\" and verifies that  should be at least one \"\u003cvalue4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "validPassword4",
        "value4"
      ]
    },
    {
      "cells": [
        "NewPasswordWithMoreSpecialChar",
        "Ashleyy12$"
      ]
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New password should have at least 1 \"Ashleyy12$\" to change password strength color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0809"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new passwords \"NewPasswordWithMoreSpecialChar\" and verifies that  should be at least one \"Ashleyy12$\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterNewValidPasswords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New password should be confirmed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_Valid_0811"
    }
  ]
});
formatter.step({
  "name": "Click to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clickToAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to password segment button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.clicksToPasswordSegment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies new valid password confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us08_StepDefinitions.verifiesPasswordConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us09.feature");
formatter.feature({
  "name": "reach to customer info",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenario({
  "name": "user enters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Manage Customers field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_Manage_Customers_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us09_StepDefinitions.user_clicks_createNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ssn \"888-22-4444\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us09_StepDefinitions.user_enters_ssn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on searchBox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us09_StepDefinitions.clicks_on_searchBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us10_us11.feature");
formatter.feature({
  "name": "User can create a new customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create a New Customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Manage Customers field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks createNewCustomer",
  "keyword": "And "
});
formatter.step({
  "name": "user enters firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters surname \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters middleinitial \"\u003cmiddleinitial\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters mobilephone \"\u003cmobilephone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters phonenumber \"\u003cphonenumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters zipcode \"\u003czipcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters address \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters city \"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters SSN number using \"\u003cSSN\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters country \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters state \"\u003cstate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters Create Date for present without am-pm",
  "keyword": "When "
});
formatter.step({
  "name": "user selects an user",
  "keyword": "When "
});
formatter.step({
  "name": "user selects an account",
  "keyword": "When "
});
formatter.step({
  "name": "user click check box",
  "keyword": "And "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "send data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "middleinitial",
        "email",
        "mobilephone",
        "phonenumber",
        "zipcode",
        "address",
        "city",
        "SSN",
        "country",
        "state"
      ]
    },
    {
      "cells": [
        "Dondu",
        "Durmaz",
        "H",
        "Durmazdondu_35@gmail.com",
        "114-326-5626",
        "157-600-6231",
        "1209",
        "Av. Santa Fe 3456",
        "Orlando",
        "432-71-9074",
        "USA",
        "Florida"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a New Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Manage Customers field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_Manage_Customers_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us09_StepDefinitions.user_clicks_createNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname \"Dondu\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters surname \"Durmaz\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters middleinitial \"H\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_middleinitial(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email \"Durmazdondu_35@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobilephone \"114-326-5626\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_mobilephone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters phonenumber \"157-600-6231\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_phonenumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"1209\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_zipcode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"Av. Santa Fe 3456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters city \"Orlando\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters SSN number using \"432-71-9074\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_SSN_number_using(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters country \"USA\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_country(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters state \"Florida\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.user_enters_state(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Create Date for present without am-pm",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.userEntersCreateDateForPresentWithoutAmPm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects an user",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.userSelectsAnUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects an account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.userSelectsAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click check box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us10_us11_StepDefinitions.userClickCheckBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us13_us14.feature");
formatter.feature({
  "name": "An Employee can manage Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1301_Description is required",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1301"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"111\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the description required message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_description_required_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1302_Balance is required",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1302"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the balance required message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_balance_required_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_1303_Account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_1303"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters balance \"111\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects account type \"\u003caccount types\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify the account type is selected as \"\u003caccount types\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "This is used to pass account types",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "account types"
      ]
    },
    {
      "cells": [
        "CHECKING"
      ]
    }
  ]
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1303_Account types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1303"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"111\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account type \"CHECKING\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the account type is selected as \"CHECKING\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_account_type_is_selected_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_1304_Account status types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_1304"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters balance \"111\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects account status type \"\u003caccount status types\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify the account status type is selected as \"\u003caccount status types\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.examples({
  "name": "This is used to pass account types",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "account status types"
      ]
    },
    {
      "cells": [
        "ACTIVE"
      ]
    }
  ]
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1304_Account status types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1304"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"111\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account status type \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_status_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the account status type is selected as \"ACTIVE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_account_status_type_is_selected_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1401_a_Past create date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1401"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account type \"SAVING\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account status type \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_status_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Create Date for past",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_Create_Date_for_past()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the date for past",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_date_for_past()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1401_b_Future create date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1401"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account type \"INVESTING\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account status type \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_status_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Create Date for future",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_Create_Date_for_future()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the date for future",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_date_for_future()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1402_Closed date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1402"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"900\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account type \"CHECKING\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account status type \"CLOSED\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_status_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Create Date for present",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_Create_Date_for_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Closed Date earlier than Create Date",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_Closed_Date_earlier_than_Create_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Closed Date",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_Closed_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1403_Date format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1403"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description \"aksoy gmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters balance \"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account type \"CHECKING\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account status type \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_status_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Create Date for present",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_enters_Create_Date_for_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the present date",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_the_present_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User goes to the home page and navigates to the manage account link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manage Account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Manage_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1305_Select an employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_1305"
    }
  ]
});
formatter.step({
  "name": "user clicks on Create a new Account",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_clicks_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects account employee",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.user_selects_account_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify account employee is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us13_us14_StepDefinitions.verify_account_employee_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources%E2%80%A8/features/us15.feature");
formatter.feature({
  "name": "System should allow user to manage their account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@theLastBugBenders"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.provide_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user enters gmibank homepage then reaches customers accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "name": "click on Transfer money",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.click_on_Transfer_money()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user have at least 2 accounts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.verify_user_have_at_least_accounts(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.provide_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_015TC_03User(customer) can transfer money with valid cridentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "name": "click on Transfer money",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.click_on_Transfer_money()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on from gives account to transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.clicks_on_from_gives_account_to_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on to choose the account to transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.clicks_on_to_choose_the_account_to_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on balance and gives amount to transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.clicks_on_balance_and_gives_amount_to_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on description \"4th transfer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.clicks_on_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on make a transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.clicks_on_make_a_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigate the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.user_navigate_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.provide_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for  Sing in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us04_StepDefinitions.click_for_Sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on My Operations field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_clicks_on_My_Operations_field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_015TC_05User(customer) can view transaction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@theLastBugBenders"
    },
    {
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "name": "click on My Accounts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.click_on_My_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on view transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.us15_StepDefinitions.click_on_view_transaction()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quits",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.us12_StepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
});