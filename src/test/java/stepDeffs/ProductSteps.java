package stepDeffs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@When("I have logged the application successful")
	public void i_have_logged_the_application_successful() {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement UserName = driver.findElement(By.name("user-name"));
		UserName.sendKeys("standard_user");
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("secret_sauce");
		
		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
	}

	@Then("validate the below {string} and its {string}")
	public void validate_the_below_and_its(String product, String exp_price) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement elm = driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price']"));
		String act_price = elm.getText();
		
		Assert.assertEquals(exp_price, act_price);
		
		
	}

}
