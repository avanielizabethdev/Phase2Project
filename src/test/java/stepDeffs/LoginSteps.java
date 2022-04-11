package stepDeffs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("I have launced the application")
	public void i_have_launced_the_application() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(10000);
	}

	@When("I enters the username {string}")
	public void i_enters_the_username(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement UserName = driver.findElement(By.name("user-name"));
		UserName.sendKeys(UserNameVal);
	}

	@When("I enters the password {string}")
	public void i_enters_the_password(String PasswordVal) {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	}

	@When("I clicks on the login button")
	public void i_clicks_on_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
	}

	@Then("I should be landed on the product page")
	public void i_should_be_landed_on_the_product_page() {
	    // Write code here that turns the phrase above into concrete actions
	    
		System.out.println("Inside the product page");
	}
	
	@Then("I should get the {string}")
	public void i_should_get_the(String ExpMsg) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement ErrorMsg = driver.findElement(By.xpath("//h3[@data-test=\"error\"]"));
		String ActualMsg = ErrorMsg.getText();
		
		Assert.assertEquals(ExpMsg, ActualMsg);
	}
}
