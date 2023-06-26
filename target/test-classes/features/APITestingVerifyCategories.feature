Feature: To validate the product list fetched via API and compare with UI

 Background: 
    Given I have launched the application
    And I click on SelectedProduct
    And I get the product list from UI
    
    @bat
    Scenario: To validate the category one product results fetched from API with that on the UI
    When I hit the following URI "http://localhost:8081/medicare/json/data/category/1/products"
    And I perform get operation
    Then Response code should be 200
    And Results should match with that on the UI