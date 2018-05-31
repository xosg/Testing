package test;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HeadlessFirefoxSeleniumExample {
	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Jim\\Desktop\\GeckoDriver\\geckodriver.exe");
		FirefoxBinary firefoxBinary = new FirefoxBinary();
		firefoxBinary.addCommandLineOptions("--headless");
		FirefoxOptions firefoxOptions = new FirefoxOptions();
		firefoxOptions.setBinary(firefoxBinary);
		FirefoxDriver driver = new FirefoxDriver(firefoxOptions);
		try {
			driver.get("http://www.baidu.com");
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // 隐式等待
			WebElement element = driver.findElement(By.id("kw"));
			element.sendKeys("gfw");
			driver.findElement(By.id("su")).click();
			WebDriverWait wait = new WebDriverWait(driver, 10, 300);
			wait.until(ExpectedConditions.titleContains("搜索")); // 显式等待
			// wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.cssSelector(""),
			// 100));
			// Thread.sleep(500);
			File img = driver.getScreenshotAs(OutputType.FILE);
			System.out.println(img.getPath());
			Runtime.getRuntime().exec("explorer " + img.getPath());
			Thread.sleep(500); // 低效的显式等待
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			driver.quit();
		}
	}
}