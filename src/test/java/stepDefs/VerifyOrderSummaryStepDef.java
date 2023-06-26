package stepDefs;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import Pages.VerifyOrderSummaryPage;
import io.cucumber.java.en.Then;

public class VerifyOrderSummaryStepDef {

	WebDriver driver = Hooks.driver;
	VerifyOrderSummaryPage OrderSummary = new VerifyOrderSummaryPage(driver);

	@Then("I should receive an order confirmation message")
	public void i_should_receive_an_order_confirmation_message() {
		OrderSummary.orderConfirm();
	}

	@Then("I should see order summary details")
	public void i_should_see_order_summary_details() {

		Actions act = new Actions(driver);
		act.sendKeys(Keys.PAGE_DOWN).build().perform();
		

		OrderSummary.verifyOrderSummary();
	}

}
