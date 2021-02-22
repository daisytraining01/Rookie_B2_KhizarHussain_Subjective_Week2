package subjectiveWeek2Q1;
import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.table.DataTable;

public class Registraions {

	@Before
	public void beforeScenario(){
		System.setProperty("webdriver.chrome.driver", "./src/main/resources/chromedriver.exe");
		driver = new ChromeDriver();
	} 
	WebDriver driver;


	@Given("^User in the registration form$")
	public void User_in_the_registration_form() throws Throwable{
		driver.navigate().to("http://demo.guru99.com/test/newtours/register.php");
		System.out.println("Registration page");
	}


	@When("^User enters required data$")
	public void Data_entering(DataTable table) throws Throwable {
		List<List<String>> data=table.raw();
		driver.findElement(By.name("firstName")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("lastName")).sendKeys(data.get(2).get(1));
		driver.findElement(By.name("phone")).sendKeys(data.get(3).get(1));
		driver.findElement(By.id("userName")).sendKeys(data.get(4).get(1));
		driver.findElement(By.name("address1")).sendKeys(data.get(5).get(1));
		driver.findElement(By.name("city")).sendKeys(data.get(6).get(1));
		driver.findElement(By.name("state")).sendKeys(data.get(7).get(1));
		driver.findElement(By.name("postalCode")).sendKeys(data.get(8).get(1));
		Select drpCountry = new Select(driver.findElement(By.name("country")));
		drpCountry.selectByVisibleText(data.get(9).get(1));
		System.out.println("List of Countries");
		String Values = driver.findElement(By.xpath("//select[@name='country']")).getText();
		System.out.println(Values);
		driver.findElement(By.id("email")).sendKeys(data.get(9).get(1));
		driver.findElement(By.name("password")).sendKeys(data.get(11).get(1));
		driver.findElement(By.name("confirmPassword")).sendKeys(data.get(12).get(1));
		driver.findElement(By.name("submit")).click();
		System.out.println("data entered in the application");

		
	}

	@Then("^Registration should be success$")
	public void Successful_Regis() throws Throwable {
		driver.getTitle().contains("Title");
		System.out.println("Matching the title of the page after successful Registration");
		System.out.println("Successful Registration");
		TakesScreenshot ts =((TakesScreenshot)driver);
		File Src=ts.getScreenshotAs(OutputType.FILE);
		File Desti=new File("./target/SnapShots/Regsuccess.png");
		FileUtils.copyFile(Src, Desti);
	}
	@After
	public void afterscenario() throws Throwable {
		driver.quit();
		System.out.println("Closes the browser");  
	}
}
