package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MedicareHomePage {

	WebDriver driver;

	public MedicareHomePage(WebDriver basedriver) {
		this.driver = basedriver;
		PageFactory.initElements(basedriver, this);
	}
	
	
	@FindBy(id="a_Antipyretics")
	WebElement SelectedProduct;
	
	public void clickSelectedProduct() {
		SelectedProduct.click();
	}
}
