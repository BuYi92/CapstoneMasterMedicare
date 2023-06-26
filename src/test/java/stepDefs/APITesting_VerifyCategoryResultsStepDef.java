package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APITesting_VerifyCategoryResultsStepDef {

	RequestSpecification request;
	Response response;
	WebDriver driver = Hooks.driver;
	List<WebElement> Cat1ProductsUIRows;
	ArrayList<String> CatgoryNamesUI = new ArrayList<>();
	ArrayList<String> CatgoryNamesAPI = new ArrayList<>();

	@Given("I get the product list from UI")
	public void i_get_the_product_list_from_UI() {
		Cat1ProductsUIRows = driver.findElements(By.xpath("//*[@id='productListTable']/tbody/tr/td[2]"));

		for (WebElement row : Cat1ProductsUIRows) {

			CatgoryNamesUI.add(row.getText());
			

		}

		System.out.println("Category names from UI are" + CatgoryNamesUI);
	}

	@When("I hit the following URI {string}")
	public void i_hit_the_following_URI(String URI) {
		request = RestAssured.given().baseUri(URI);
	}

	@When("I perform get operation")
	public void i_perform_get_operation() {
		response = request.get();

	}

	@Then("Response code should be {int}")
	public void response_code_should_be(int expResponseCode) {
		Assert.assertEquals(expResponseCode, response.getStatusCode());
	}

	@Then("Results should match with that on the UI")
	public void results_should_match_with_that_on_the_UI() {
		System.out.println(response.getBody().asString());

		JsonPath jpath = response.jsonPath();
		CatgoryNamesAPI = jpath.get("name");

		System.out.println("Category names from API are" + CatgoryNamesAPI);

		Assert.assertEquals(CatgoryNamesAPI, CatgoryNamesUI);
	}

}
