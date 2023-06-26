Feature: Account registration

  Background: 
    Given I have launched the application
    And I navigate to login page

  @bat
  Scenario Outline: This scenario is to register and validate the confirmation in the Medicare Application
    When I click on Register Here
    And I enter my First Name "<First Name>"
    And I enter my Last Name "<Last Name>"
    And I enter my Email
    And I enter my Contact Number <Contact Number>
    And I enter Password "<Password>"
    And I confirm Password "<Confirm Password>"
    And I select role as user
    And I click on Next Billing button
    And I enter Address Line One "<Addressone>"
    And I enter Address Line Two "<Addresstwo>"
    And I enter City "<City>"
    And I enter Postal Code <Postal Code>
    And I enter State "<State>"
    And I enter Country "<Country>"
    And I click on Next Confirm button
    And I click on Confirm button
    Then I should receive a confirmation
    
    Examples: 
      | First Name | Last Name | Contact Number  | Password | Confirm Password | Addressone              | Addresstwo    | City   | Postal Code| State  | Country |
      | Angelina   | Jolie     |        12345678 |    12345 |            12345 | 123 Fiction, adress way | Mainstreet    | Berlin |      10117 | Berlin | Germany |
