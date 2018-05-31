package test;

import java.awt.AWTException;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class InstagramRobot7 extends JFrame {

	/**
	 * @author Jim 2195868682@qq.com
	 */
	private static final long serialVersionUID = 1L;
	static JLabel status = new JLabel("running");

	/*************************************************************/ // 用户填写
	static int rows = 14; // 行数
	static int cols = 3; // 列数
	// 左上第一个资源的坐标
	static int startX = 675;
	static int startY = 303;
	// 右下最后一个资源的坐标
	static int endX = 1338;
	static int endY = 575;
	/*************************************************************/ // 用户填写

	static float deltaX = (endX - startX) / (float) (cols - 1); // x跨度(像素)
	static float deltaY = (endY - startY) / (float) (rows - 1); // y跨度(像素)
	static float x = startX; // 变量x坐标
	static float y = startY; // 变量y坐标
	static Random ran; // 用于生成随机时间间隔,欺骗Ins
	static Object myMonitor = new Object();
	static Thread myThread;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		myThread = new Thread(new Runnable() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				try {
					Robot myRobot = new Robot();
					myRobot.delay(2500); // 此时间内赶紧输入焦点转到浏览器

					ran = new Random(); // 随机延迟

					synchronized (myMonitor) {
						// 二维遍历文件上传控件中的所有文件
						for (int i = 0; i < rows; i++) {
							for (int j = 0; j < cols; j++) {
								x = startX + j * deltaX;
								y = startY + i * deltaY;

								myRobot.mouseMove(384, 948);

								singleClickLeft(myRobot);

								myRobot.delay(1500 + ran.nextInt(1000));

								myRobot.mouseMove((int) x, (int) y);

								doubleClickLeft(myRobot);

								myRobot.delay(1500 + ran.nextInt(1000));

								myRobot.mouseMove(538, 179);

								singleClickLeft(myRobot);

								myRobot.delay(1000 + ran.nextInt(1000));

								singleClickLeft(myRobot);

								myRobot.delay(7500 + ran.nextInt(1000));

								if (status.getText() == "wait-to-pause") {
									status.setText("paused");
									myMonitor.wait();
								}
							}
						}
					}

					status.setText("--任务完成--");
				} catch (AWTException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});

		InstagramRobot7 display = new InstagramRobot7();

		myThread.start();

		display.addKeyListener(new KeyListener() {

			@Override
			public void keyTyped(KeyEvent arg0) {
				// TODO Auto-generated method stub

			}

			@Override
			public void keyReleased(KeyEvent arg0) {
				// TODO Auto-generated method stub

			}

			@Override
			public void keyPressed(KeyEvent arg0) {
				// TODO Auto-generated method stub
				if (arg0.getKeyCode() == KeyEvent.VK_ESCAPE) {
					System.exit(0);
				} else if (arg0.getKeyChar() == ' ') {
					if (status.getText() == "paused") {
						status.setText("wait-to-run");
					} else if (status.getText() == "running") {
						status.setText("wait-to-pause");
					}
				}
			}
		});

		try {
			Thread.sleep(2550);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		while (true) {
			synchronized (myMonitor) {
				if (status.getText() == "wait-to-run") {
					myMonitor.notify();
					try {
						status.setText("running");
						myMonitor.wait(10);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}

	}

	public static void singleClickLeft(Robot myRobot) {
		myRobot.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
		myRobot.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
	}

	public static void doubleClickLeft(Robot myRobot) {
		singleClickLeft(myRobot);
		singleClickLeft(myRobot);
	}

	public InstagramRobot7() {
		setTitle("Ins机器人");
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		Dimension screenSize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
		setBounds((int) (screenSize.getWidth() - 256), (int) (screenSize.getHeight() - 128), 200, 100);
		setAlwaysOnTop(true);
		getContentPane().setLayout(new BorderLayout());
		getContentPane().add(status, BorderLayout.CENTER);
		setVisible(true);
	}

}
