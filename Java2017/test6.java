package test;

import java.io.File;
import java.util.concurrent.TimeUnit;

import javax.swing.JOptionPane;

import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class test6 {
	static String url = "http://www.lofter.com/";

	public static void main(String[] args) {

		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Jim\\Desktop\\GeckoDriver\\geckodriver.exe");

		FirefoxOptions options = new FirefoxOptions();

		// 启动配置"不加载图片"
		// options.addPreference("permissions.default.image", 2);

		FirefoxDriver driver = new FirefoxDriver(options);
		driver.manage().timeouts().implicitlyWait(16, TimeUnit.SECONDS); // 隐式等待
		driver.get(url);
		// driver.manage().window().maximize();

		// new Actions(driver).sendKeys(Keys.ENTER).perform();

		JOptionPane.showConfirmDialog(null, JOptionPane.MESSAGE_PROPERTY);
		File dir = new File("E:\\BaiduNetdiskDownload\\风景21263P-compress\\rar21263P\\LandScape_44_43");
		for (File pic : dir.listFiles()) {
			try {
				WebDriverWait wait = new WebDriverWait(driver, 128, 1024);
				wait.until(ExpectedConditions
						.elementToBeClickable(By.cssSelector("#publishPostBar > li:nth-child(3) > a")));
				driver.findElementByCssSelector("#publishPostBar > li:nth-child(3) > a").click();
				Thread.sleep(1000);
				driver.findElementByCssSelector("#imguploadinput").sendKeys(pic.getPath());

				Thread.sleep(1000);

				driver.findElementByCssSelector(".publishBtn").click();
				Thread.sleep(7000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				System.out.println("seriously?");
				e.printStackTrace();
			}
		}

	}

}
