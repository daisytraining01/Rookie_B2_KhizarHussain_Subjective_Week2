package subjectiveWeek2Q2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class Question4a {
		@BeforeTest
		public void beforeTest() {
			System.out.println("beforeTest add");
		}

		@Test
		public void launchChromeBrowser() {

			System.setProperty("webdriver.chrome.driver", "./src/main/resources/chromedriver.exe");
			WebDriver driver =  new ChromeDriver();
			driver.navigate().to("http://demo.guru99.com/test/login.html#");
		}

		@AfterTest
		public void afterTest() {
			System.out.println("afterTest add");
		}
	}