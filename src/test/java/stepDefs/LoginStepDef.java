package stepDefs;

import org.openqa.selenium.WebDriver;

import Pages.MedicareLoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {

	WebDriver driver = Hooks.driver;
	MedicareLoginPage lp = new MedicareLoginPage(driver);

	@Given("I have launched the application")
	public void i_have_launched_the_application() {

	}

	@Given("I navigate to login page")
	public void i_navigate_to_login_page() throws InterruptedException {

		lp.clickLoginMenu();
		Thread.sleep(3000);
	}

	@When("I enter {string} and {string}")
	public void i_enter_and(String Email, String Password) {

		lp.verifyLogin(Email, Password);
		

	}

	@When("I click on Login button")
	public void i_click_on_Login_button() {

		lp.clickSubmit();
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {

		lp.verifyNavMenu();
	}
}
