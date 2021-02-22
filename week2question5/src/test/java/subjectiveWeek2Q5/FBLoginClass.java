package subjectiveWeek2Q5;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FBLoginClass {
	WebDriver driver = null;

	@Before()
	public void setUp () {
		System.setProperty("webdriver.chrome.driver", 
				"./src/main/resources/chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("This will run before the every Scenario");
	}

	@Given("^I open Facebook website$")
	public void goToFacebook () {
		driver.navigate().to("https://www.facebook.com/");

	}

	@Then("^Login button should exists$")
	public void loginButton () {

		//driver.findElement(By.cssSelector("button#u_0_b")).isDisplayed();
		System.out.println("Login Button exists");

	}

	@When("^User enters (\\w+) and (\\w+)$")
	public void user_enters_UserName_and_Password (String username, String password) throws Throwable {
		System.out.println(username);
		System.out.println(password);
		Thread.sleep(500);
		driver.findElement(By.cssSelector("input#email")).sendKeys(username);
		Thread.sleep(500);
		driver.findElement(By.cssSelector("input#pass")).sendKeys(password);
		Thread.sleep(1000);
	}

	@Then("^Message displayed incorrect$")
	public void measage_displayed_login_unsuccessful () throws Throwable {
		System.out.println("Error Message");
	}

	@After()
	public void cleanUp () {
		driver.close();
		System.out.println("This will run after every Scenario");

	}
}
