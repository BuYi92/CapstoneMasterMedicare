Feature: Add product to the cart and verify order summary

  Background: 
    Given I have launched the application
    And I navigate to login page

  @bat
  Scenario Outline: Add product to the cart and verify order summary
    When I enter "<Email>" and "<Password>"
    And I click on Login button
    Then I should land on the home page
    Then I click on SelectedProduct
    And I add first product to the cart
    Then I should receive a success message
    Then I click on Checkout
    Then I select the existing address
    And I enter card number "<CardNumber>"
    And I enter expiry month "<ExpiryMon>" and expiry year "<ExpiryYear>"
    And I enter CV Code "<CV Code>"
    And I click on Pay
    Then I should receive an order confirmation message
    Then I should see order summary details
    

    Examples: 
      | Email          | Password | CardNumber       | ExpiryMon | ExpiryYear | CV Code |
      | bu@hotmail.com |    12345 |     123458762143 |        06 |       2027 |     234 |
