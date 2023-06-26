package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MedicareLoginPage {

	WebDriver driver;

	public MedicareLoginPage(WebDriver basedriver) {
		this.driver = basedriver;
		PageFactory.initElements(basedriver, this);
	}

	@FindBy(id = "login")
	WebElement Login;
	
	@FindBy(id="username")
	WebElement Email;
	
	@FindBy(id="password")
	WebElement Password;
	
	@FindBy(xpath="//input[@value='Login']")
	WebElement Submit;

	@FindBy(id="bs-example-navbar-collapse-1")
	WebElement TopNavBar;
	
	public void clickLoginMenu()
	{
		Login.click();
	}
	
	public void verifyLogin(String EmailInput, String PasswordInput) {
		Email.sendKeys(EmailInput);
		Password.sendKeys(PasswordInput);
		
	}
	
	public void clickSubmit() {
		Submit.click();
	}
	
	public void verifyNavMenu() {
		TopNavBar.isDisplayed();
	}
}
