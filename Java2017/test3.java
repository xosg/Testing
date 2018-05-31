package test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.swing.JOptionPane;

import org.openqa.selenium.Cookie;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class test3 {
	static ObjectInputStream ois;

	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Jim\\Desktop\\GeckoDriver\\geckodriver.exe");

		FirefoxOptions options = new FirefoxOptions();

		// 启动配置"不加载图片"
		options.addPreference("permissions.default.image", 2);

		FirefoxDriver driver = new FirefoxDriver(options);

		driver.manage().timeouts().implicitlyWait(16, TimeUnit.SECONDS); // 隐式等待

		// driver.get("https://www.csdn.net/");
		driver.get("http://blog.csdn.net/github_38885296");
		Set<Cookie> cookies;
		driver.manage().addCookie(new Cookie("cookie", "test"));
		try {
			ois = new ObjectInputStream(new FileInputStream(new File("C:\\Users\\Jim\\Desktop\\cookies\\csdn.cookie")));
			cookies = (Set<Cookie>) ois.readObject();

			for (Cookie cookie : cookies) {
				// Cookie cookieNew = new cookie
				String domainNew = null;
				if (cookie.getDomain().substring(0, 1) == ".") {
					domainNew = cookie.getDomain().substring(1);
				}
				Cookie cookieNew = new Cookie(cookie.getName(), cookie.getValue(), domainNew, cookie.getPath(),
						cookie.getExpiry());

				driver.manage().addCookie(cookieNew);
			}

			// driver.get("https://csdn.net/");
			driver.get("http://blog.csdn.net/github_38885296");
			driver.manage().window().maximize();
		} catch (ClassNotFoundException | IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		JOptionPane.showConfirmDialog(null, JOptionPane.INFORMATION_MESSAGE);

		try {
			ois.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.quit();

	}
}
