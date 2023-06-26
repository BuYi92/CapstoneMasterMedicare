package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class VerifyOrderSummaryPage {
	
	WebDriver driver;
	
	public VerifyOrderSummaryPage(WebDriver basedriver) {
		
		this.driver = basedriver;
		PageFactory.initElements(basedriver, this);
	}
	
	@FindBy(xpath="//div[@class='alert alert-success']/h3")
	WebElement OrderConfirmText;
	
	@FindBy(xpath="//div/h3[@class='panel-title']")
	WebElement OrderSummaryHeader;
	
	public void orderConfirm() {
		String orderSuccessmessageActual = OrderConfirmText.getText();
		Assert.assertEquals("Your Order is Confirmed!!", orderSuccessmessageActual);
	}
	
	public void verifyOrderSummary() {
		
		String OrderSummaryHeaderText = OrderSummaryHeader.getText();
		Assert.assertEquals("Order summary", OrderSummaryHeaderText);
		
		
	}

}
