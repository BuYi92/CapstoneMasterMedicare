package stepDefs;

import org.openqa.selenium.WebDriver;

import Pages.AccountRegisterPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AccountRegisterStepDef {
	WebDriver driver = Hooks.driver;
	AccountRegisterPage AccountReg = new AccountRegisterPage(driver);
	
	@When("I click on Register Here")
	public void i_click_on_Register_Here() {
	 
		AccountReg.clickRegister();
		
	}

	@When("I enter my First Name {string}")
	public void i_enter_my_First_Name(String FirstName) {
		AccountReg.enterFirstName(FirstName);
	}

	@When("I enter my Last Name {string}")
	public void i_enter_my_Last_Name(String LastName) {
		AccountReg.enterLastName(LastName);
	}

	@When("I enter my Email")
	public void i_enter_my_Email() {
		AccountReg.enterEmail();
	}

	@When("I enter my Contact Number {int}")
	public void i_enter_my_Contact_Number(int ContactNum) {
		AccountReg.enterContactNum(ContactNum);
	}

	@When("I enter Password {string}")
	public void i_enter_Password(String password) {
		AccountReg.enterPassword(password);
	}

	@When("I confirm Password {string}")
	public void i_confirm_Password(String ConfirmPassword) {
		AccountReg.enterConfirmPasswordl(ConfirmPassword);
	}

	@When("I select role as user")
	public void i_select_role_as_user() {
		AccountReg.selectUserRole();
	}

	@When("I click on Next Billing button")
	public void i_click_on_Next_Billing_button() throws InterruptedException {
		AccountReg.clickNextBillingButton();
	}

	@When("I enter Address Line One {string}")
	public void i_enter_Address_Line_One(String Address1) {
		AccountReg.enterAddress1(Address1);
	}

	@When("I enter Address Line Two {string}")
	public void i_enter_Address_Line_Two(String Address2) {
		AccountReg.enterAddress2(Address2);
	}

	@When("I enter City {string}")
	public void i_enter_City(String City) {
		AccountReg.enterCity(City);
	}

	@When("I enter Postal Code {int}")
	public void i_enter_Postal_Code(int PostalCode) {
		AccountReg.enterPostalCode(PostalCode);
		
	}

	@When("I enter State {string}")
	public void i_enter_State(String State) {
		AccountReg.enterState(State);
	}

	@When("I enter Country {string}")
	public void i_enter_Country(String Country) {
		AccountReg.enterCountry(Country);
	}

	@When("I click on Next Confirm button")
	public void i_click_on_Next_Confirm_button() throws InterruptedException {
		AccountReg.clickNextConfirmButton();
	}

	@When("I click on Confirm button")
	public void i_click_on_Confirm_button() throws InterruptedException {
		AccountReg.clickConfirmButton();
	}

	@Then("I should receive a confirmation")
	public void i_should_receive_a_confirmation() {
		AccountReg.verifyAccountRegisterConfirmation();
	}
	
	@Given("I click on LoginHere button")
	public void i_click_on_LoginHere_button() {
		AccountReg.clickLogin();
	}


}
