package test;

import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.TimeUnit;

import javax.swing.JOptionPane;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaiduPicDownloader {
	static int count = 0;
	static int number = 128;
	static String key = "马云";

	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Jim\\Desktop\\GeckoDriver\\geckodriver.exe");

		/*
		 * FirefoxBinary firefoxBinary = new FirefoxBinary();
		 * firefoxBinary.addCommandLineOptions("--headless"); FirefoxOptions
		 * firefoxOptions = new FirefoxOptions();
		 * firefoxOptions.setBinary(firefoxBinary); FirefoxDriver driver = new
		 * FirefoxDriver(firefoxOptions);
		 */

		FirefoxOptions options = new FirefoxOptions();
		options.addPreference("permissions.default.image", 2);
		FirefoxDriver driver = new FirefoxDriver(options);

		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); // 隐式等待
		driver.get("https://image.baidu.com/");

		Actions action = new Actions(driver);

		driver.findElement(By.id("kw")).sendKeys(key);
		driver.findElement(By.cssSelector(".s_search")).click();

		WebDriverWait wait = new WebDriverWait(driver, 10, 300);
		wait.until(ExpectedConditions.titleContains("搜索")); // 显式等待
		// ((JavascriptExecutor)
		// driver).executeScript("console.log(document.readyState)");
		Timer timer = new Timer();
		timer.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				action.sendKeys(/* driver.findElement(By.cssSelector("body")), */ Keys.END).perform();
			}
		}, 1, 500);

		wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.cssSelector("#imgid div.imgpage ul li"), number));
		timer.cancel();
		for (WebElement element : driver.findElements(By.cssSelector("#imgid div.imgpage ul li"))) {
			System.out.println(element.getAttribute("data-objurl"));
			count++;
			if (count >= number) {
				break;
			}
		}

		System.out.println("total : " + count);

		JOptionPane.showMessageDialog(null, "浏览器可以关闭了吗?");
		driver.quit();
	}
}