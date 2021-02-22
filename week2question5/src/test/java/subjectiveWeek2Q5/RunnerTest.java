package subjectiveWeek2Q5;

import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(monochrome = true, 
format = {"pretty", "html:target/cucumber"}) 

public class RunnerTest { }