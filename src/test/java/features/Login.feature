Feature: Account registration

  Background: 
    Given I have launched the application
    And I navigate to login page

  @bat
  Scenario Outline: Login into Medicare Application
    When I enter "<Email>" and "<Password>"
     And I click on Login button
    Then I should land on the home page

    Examples: 
      | Email          | Password |
      | bu@hotmail.com |    12345 |