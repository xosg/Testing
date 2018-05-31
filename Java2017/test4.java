package test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class test4 {
	static String url;
	static File list = new File("C:\\Users\\Jim\\Desktop\\list.txt");

	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Jim\\Desktop\\GeckoDriver\\geckodriver.exe");

		FirefoxOptions options = new FirefoxOptions();

		// 启动配置"不加载图片"
		options.addPreference("permissions.default.image", 2);

		FirefoxDriver driver = new FirefoxDriver(options);
		driver.manage().timeouts().implicitlyWait(16, TimeUnit.SECONDS); // 隐式等待
		driver.get("https://www.csdn.net/");
		driver.manage().window().maximize();
		try {
			String line;
			BufferedReader bufferedReader = new BufferedReader(new FileReader(list));
			while ((line = bufferedReader.readLine()) != null) {

				try {
					driver.get(line);
					if (driver.findElementByCssSelector(".userinfo").isDisplayed()) {
						driver.findElementByCssSelector(".userinfo > a:nth-child(1)").click();
						login(driver);
						driver.get(line);
					} else {
						driver.findElementByCssSelector("#share_box > li:nth-child(1) > button").click();
						System.out.println(driver.findElementByCssSelector(
								"body > div.container.clearfix > aside > div.right_box.user_info > div > dl:nth-child(3) > dd")
								.getText());
						Thread.sleep(3000);
					}
				} catch (NoSuchElementException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					System.out.println("一篇文章家在错误:\n" + line);
					continue;
				}

			}
			bufferedReader.close();
			driver.quit();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void login(FirefoxDriver driver) {
		driver.findElementById("username").sendKeys("13805177441@163.com");
		driver.findElementById("password").sendKeys("84419912zsqdj.");
		driver.findElementByClassName("logging").click();

	}

}
