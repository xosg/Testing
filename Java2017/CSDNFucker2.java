package test;

import java.awt.AWTException;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class CSDNFucker2 extends JFrame {

	static JLabel status = new JLabel("已处理:0");
	static String filePath = "C:\\Users\\Jim\\Desktop\\list.txt";
	static int num = 0;

	public CSDNFucker2() {
		setTitle("CSDNRobot");
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		Dimension screenSize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
		setBounds((int) (screenSize.getWidth() - 256), (int) (screenSize.getHeight() - 128), 200, 100);
		setAlwaysOnTop(true);
		getContentPane().setLayout(new BorderLayout());
		getContentPane().add(status, BorderLayout.CENTER);
		setVisible(true);
	}

	public static void pressKey(Robot robot, int keyvalue) {
		robot.keyPress(keyvalue);
		robot.keyRelease(keyvalue);
	}

	public static void pressKeyWithShift(Robot robot, int keyvalue) {
		robot.keyPress(KeyEvent.VK_SHIFT);
		robot.keyPress(keyvalue);
		robot.keyRelease(keyvalue);
		robot.keyRelease(KeyEvent.VK_SHIFT);
	}

	public static void ctrl_Pagedown(Robot robot) {
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_PAGE_DOWN);
		robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
		robot.keyRelease(KeyEvent.VK_CONTROL);
	}

	public static void ctrl_w(Robot robot) {
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_W);
		robot.keyRelease(KeyEvent.VK_W);
		robot.keyRelease(KeyEvent.VK_CONTROL);
	}

	public static void singleClickLeft(Robot myRobot) {
		myRobot.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
		myRobot.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
	}

	public static void main(String[] args) throws IOException {
		try {
			CSDNFucker2 display = new CSDNFucker2();

			Robot myRobot = new Robot();
			File file = new java.io.File(filePath);
			BufferedReader br = new BufferedReader(new FileReader(file));
			String url;

			while ((url = br.readLine()) != null) {
				Runtime.getRuntime().exec("explorer " + url);
				myRobot.delay(3000);
				myRobot.mouseMove(138, 300);
				singleClickLeft(myRobot);
				num++;
				status.setText("已处理:" + num);
				myRobot.delay(150);
				ctrl_w(myRobot);
				myRobot.delay(50);

			}

			br.close();

		} catch (AWTException e) {
			e.printStackTrace();
		}
	}
}
