package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import Pages.AddProductToCartPage;
import Pages.MedicareHomePage;
import Pages.MedicareLoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddProductToCartStepDef {
	WebDriver driver = Hooks.driver;

	AddProductToCartPage AddCartPage = new AddProductToCartPage(driver);

	@Then("I add first product to the cart")
	public void i_add_first_product_to_the_cart() {

		AddCartPage.addProductToCart();
		
	}

	@Then("I should receive a success message")
	public void i_should_receive_a_success_message() {

		AddCartPage.verifyMessage();
		
	}

	@Then("I click on Checkout")
	public void i_click_on_Checkout() {
		try {
			AddCartPage.clickCheckout();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("I select the existing address")
	public void i_select_the_existing_address() {
		try {
			AddCartPage.selectAddress();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Given("I enter card number {string}")
	public void i_enter_card_number(String cardNum) {
		AddCartPage.enterCardNum(cardNum);
	}

	@Given("I enter expiry month {string} and expiry year {string}")
	public void i_enter_expiry_month_and_expiry_year(String expMon, String expYear) {
		AddCartPage.enterExpiryDate(expMon, expYear);
	}

	@Given("I enter CV Code {string}")
	public void i_enter_CV_Code(String cvcode) {
		AddCartPage.enterCVCode(cvcode);
	}

	@Given("I click on Pay")
	public void i_click_on_Pay() {
		AddCartPage.clickPay();
	}

}
