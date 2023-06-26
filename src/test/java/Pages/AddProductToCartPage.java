package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddProductToCartPage {

	WebDriver driver;
	
	public AddProductToCartPage(WebDriver basedriver) {
		this.driver = basedriver;
		PageFactory.initElements(basedriver, this);
	}
	
	@FindBy(xpath="//a[@href=\"/medicare/cart/add/1/product\"]")
	WebElement FirstProduct;
	
	@FindBy(xpath="//h3[@class=\"text-center\"]")
	WebElement addedProductDisplayMessage;
	
	@FindBy(xpath="//a[contains(text(),'Checkout ')]")
	WebElement checkoutButton;
	
	@FindBy(xpath="//a[contains(text(),'Select')]")
	WebElement selectAddress;
	
	@FindBy(id="cardNumber")
	WebElement cardNum;
	
	@FindBy(id="expityMonth")
	WebElement expiryMon;
	
	@FindBy(id="expityYear")
	WebElement expiryYear;
	
	@FindBy(id="cvCode")
	WebElement cvCode;
	
	@FindBy(xpath="//a[@href='/medicare/cart/checkout?execution=e1s2&_eventId_pay']")
	WebElement payButton;
	
	
	
	public void addProductToCart() {
		FirstProduct.click();
	}
	
	public void verifyMessage(){
		String actualMessage = addedProductDisplayMessage.getText();
		Assert.assertEquals("Product has been successfully added inside cart!", actualMessage);
	}
	
	public void clickCheckout() throws InterruptedException {
		Thread.sleep(3000);
		checkoutButton.click();
	}
	
	public void selectAddress() throws InterruptedException {
		Thread.sleep(3000);
		selectAddress.click();
	}
	
	public void enterCardNum(String cardNo) {
		cardNum.sendKeys(cardNo);
	}
	
	public void enterExpiryDate(String expMon, String expYear) {
		expiryMon.sendKeys(expMon);
		expiryYear.sendKeys(expYear);
		
	}
	
	public void enterCVCode(String CVCode) {
		cvCode.sendKeys(CVCode);
	}
	
	public void clickPay() {
		payButton.click();
		
	}
	
	
}
