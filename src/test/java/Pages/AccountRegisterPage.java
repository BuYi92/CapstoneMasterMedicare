package Pages;

import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountRegisterPage {

	WebDriver driver;

	public AccountRegisterPage(WebDriver basedriver) {

		this.driver = basedriver;
		PageFactory.initElements(basedriver, this);
	}
	
	//Defining all the Pageobjects - Using simple way with FindBy

	@FindBy(xpath = "//a[contains(text(),'Register Here')]")
	WebElement RegisterHere;

	@FindBy(id = "firstName")
	WebElement firstName;

	@FindBy(id = "lastName")
	WebElement lastName;

	@FindBy(id = "email")
	WebElement email;

	@FindBy(id = "contactNumber")
	WebElement contactNumber;

	@FindBy(id = "password")
	WebElement password;

	@FindBy(id = "confirmPassword")
	WebElement confirmPassword;

	@FindBy(id = "role1")
	WebElement UserRole;

	@FindBy(xpath = "//button[contains(text(),'Next - Billing ')]")
	WebElement NextBilling;

	@FindBy(id = "addressLineOne")
	WebElement addressLineOne;

	@FindBy(id = "addressLineTwo")
	WebElement addressLineTwo;

	@FindBy(id = "city")
	WebElement city;

	@FindBy(id = "postalCode")
	WebElement postalCode;

	@FindBy(id = "state")
	WebElement state;

	@FindBy(id = "country")
	WebElement country;

	@FindBy(xpath = "//button[contains(text(),'Next - Confirm')]")
	WebElement NextConfirm;

	@FindBy(xpath = "//a[contains(text(),'Confirm')]")
	WebElement Confirm;

	@FindBy(xpath = "//div[@class='text-center']/h1")
	WebElement header1;

	@FindBy(xpath = "//div[@class='text-center']/h3")
	WebElement header2;

	@FindBy(xpath = "//div[@class='text-center']/h6")
	WebElement header3;

	@FindBy(xpath = "//*[contains(text(),'Login Here')]")
	WebElement LoginHereButton;

	@FindBy(xpath = "//li/a[@id='dropdownMenu1']")
	WebElement UserProfileName;
	
	@FindBy(id = "username")
	WebElement LoginUserName;
	
	
    //In Order to register: generating random Email by using First and Lastname and random generated number behind name with hotmail domain. 
	Random randomEmailGenerator = new Random();
	int randomInt = randomEmailGenerator.nextInt(500);
	String FirstN;
	String LastN;
	String RandomNewEmail;

	public void clickRegister() {
		RegisterHere.click();
	}

	public void enterFirstName(String FirstName) {
		FirstN = FirstName;
		firstName.sendKeys(FirstN);

	}

	public void enterLastName(String LastName) {
		LastN = LastName;
		lastName.sendKeys(LastN);
	}

	public void enterEmail() {
		String username = FirstN  + LastN;
		RandomNewEmail= username + randomInt + "@hotmail.com";
		//System.out.println("Random email is "+RandomNewEmail);
		email.sendKeys(RandomNewEmail);

	}

	public void enterContactNum(int contactNum) {
		contactNumber.sendKeys(String.valueOf(contactNum));

	}

	public void enterPassword(String Password) {
		password.sendKeys(Password);
	}

	public void enterConfirmPasswordl(String ConfirmPassword) {
		confirmPassword.sendKeys(ConfirmPassword);
	}

	public void selectUserRole() {
		UserRole.click();
	}

	public void clickNextBillingButton() throws InterruptedException {
		NextBilling.click();
		Thread.sleep(3000);
	}

	public void enterAddress1(String Address1) {
		addressLineOne.sendKeys(Address1);
	}

	public void enterAddress2(String Address2) {
		addressLineTwo.sendKeys(Address2);
	}

	public void enterCity(String City) {
		city.sendKeys(City);
	}

	public void enterPostalCode(int PostalCode) {
		postalCode.sendKeys(String.valueOf(PostalCode));
	}

	public void enterState(String State) {
		state.sendKeys(State);
	}

	public void enterCountry(String Country) {
		country.sendKeys(Country);
	}

	public void clickNextConfirmButton() throws InterruptedException {
		NextConfirm.click();
		Thread.sleep(3000);
	}

	public void clickConfirmButton() throws InterruptedException {
		Confirm.click();
		Thread.sleep(3000);
	}

	public void verifyAccountRegisterConfirmation() {
		String finalMessage = header1.getText() + " " + header2.getText() + " " + header3.getText();
		System.out.println(finalMessage);
		Assert.assertEquals("Welcome! medicare.com You can use your email address as username to login!", finalMessage);
	}

	public void clickLogin() {
		LoginHereButton.click();
	}

	public void enterRegisteredEmailandPw(String Password){
		LoginUserName.sendKeys(RandomNewEmail);
		password.sendKeys(Password);
	}
	
	public void verifyUserProfileName(String firstName2, String lastName2) {
		String ActualUserProfileName = UserProfileName.getText();
		String ExpectedUserProfileName = firstName2 + " " + lastName2;
		System.out.println("Actual user name on home page is " + ActualUserProfileName);

		Assert.assertEquals(ExpectedUserProfileName, ActualUserProfileName);
	}
}
