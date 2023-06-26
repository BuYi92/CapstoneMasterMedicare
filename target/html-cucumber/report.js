$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/APITestingVerifyCategories.feature");
formatter.feature({
  "name": "To validate the product list fetched via API and compare with UI",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Antipyretics",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.HomePageStepDef.i_click_on_Antipyretics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the product list from UI",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.APITesting_VerifyCategoryResultsStepDef.i_get_the_product_list_from_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the category one product results fetched from API with that on the UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bat"
    }
  ]
});
formatter.step({
  "name": "I hit the following URI \"http://localhost:8080/medicare/json/data/category/1/products\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.APITesting_VerifyCategoryResultsStepDef.i_hit_the_following_URI(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform get operation",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.APITesting_VerifyCategoryResultsStepDef.i_perform_get_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.APITesting_VerifyCategoryResultsStepDef.response_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Results should match with that on the UI",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.APITesting_VerifyCategoryResultsStepDef.results_should_match_with_that_on_the_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/AccountRegister.feature");
formatter.feature({
  "name": "Account registration flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate account registration of user and verify username on homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bat"
    }
  ]
});
formatter.step({
  "name": "I click on Register Here link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter First Name \"\u003cFirst Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Last Name \"\u003cLast Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Email",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Contact Number \u003cContact Number\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Confirm Password \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select role as user",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Next Billing button",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Address Line One \"\u003cAddress Line One\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Address Line Two \"\u003cAddress Line Two\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter City \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Postal Code \u003cPostal Code\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter State \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Next Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "I should receive a confirmation message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on LoginHere button",
  "keyword": "And "
});
formatter.step({
  "name": "I enter registered email address and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see username as \"\u003cFirst Name\u003e\" \"\u003cLast Name\u003e\" on the top right of the page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Contact Number",
        "Password",
        "Confirm Password",
        "Address Line One",
        "Address Line Two",
        "City",
        "Postal Code",
        "State",
        "Country"
      ]
    },
    {
      "cells": [
        "John",
        "Smith",
        "89748579",
        "12345",
        "12345",
        "123 A main, MG road",
        "Chruch street",
        "Bengaluru",
        "564525",
        "Karnataka",
        "India"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate account registration of user and verify username on homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bat"
    }
  ]
});
formatter.step({
  "name": "I click on Register Here link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_click_on_Register_Here_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter First Name \"John\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_First_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Last Name \"Smith\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Last_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Contact Number 89748579",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Contact_Number(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Confirm Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Confirm_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select role as user",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_select_role_as_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Next Billing button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_click_on_Next_Billing_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Address Line One \"123 A main, MG road\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Address_Line_One(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Address Line Two \"Chruch street\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Address_Line_Two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter City \"Bengaluru\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_City(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Postal Code 564525",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Postal_Code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter State \"Karnataka\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_State(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Country \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_Country(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Next Confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_click_on_Next_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_click_on_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_should_receive_a_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginHere button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_click_on_LoginHere_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter registered email address and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_enter_registered_email_address_and(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see username as \"John\" \"Smith\" on the top right of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.AccountRegisterStepDef.i_should_see_username_as_on_the_top_right_of_the_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/AddProductToCart\u0026VerifyOrderSummary.feature");
formatter.feature({
  "name": "Add product to the cart and verify order summary",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add product to the cart and verify order summary",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bat"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Antipyretics",
  "keyword": "Then "
});
formatter.step({
  "name": "I add first product to the cart",
  "keyword": "And "
});
formatter.step({
  "name": "I should receive a success message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Checkout",
  "keyword": "Then "
});
formatter.step({
  "name": "I select the existing address",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter card number \"\u003cCardNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter expiry month \"\u003cExpiryMon\u003e\" and expiry year \"\u003cExpiryYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter CV Code \"\u003cCV Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Pay",
  "keyword": "And "
});
formatter.step({
  "name": "I should receive an order confirmation message",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see order summary details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "CardNumber",
        "ExpiryMon",
        "ExpiryYear",
        "CV Code"
      ]
    },
    {
      "cells": [
        "kn@gmail.com",
        "12345",
        "999999",
        "05",
        "2024",
        "111"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to the cart and verify order summary",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bat"
    }
  ]
});
formatter.step({
  "name": "I enter \"kn@gmail.com\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Antipyretics",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.HomePageStepDef.i_click_on_Antipyretics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add first product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_add_first_product_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_should_receive_a_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_click_on_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the existing address",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_select_the_existing_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter card number \"999999\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_enter_card_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter expiry month \"05\" and expiry year \"2024\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_enter_expiry_month_and_expiry_year(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter CV Code \"111\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_enter_CV_Code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Pay",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.AddProductToCartStepDef.i_click_on_Pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive an order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.VerifyOrderSummaryStepDef.i_should_receive_an_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see order summary details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.VerifyOrderSummaryStepDef.i_should_see_order_summary_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});