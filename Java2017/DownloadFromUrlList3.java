package test;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class DownloadFromUrlList3 {
	static private int count = 0;
	static ThreadGroup myThreadGroup = new ThreadGroup("myGroup");
	static picThread myThread;
	public static int errCount = 0;
	static long timeOut = 8 * 1000;

	public static synchronized int updateCount() {
		count++;
		return count;
	};

	public static int download(ArrayList<String> urlList, String dirPath) {
		if (new File(dirPath).exists()) {
			if (!new File(dirPath).isDirectory()) {
				System.out.println("ERROR!! THE PATH GIVEN ISN'T A DIRECTORY");
				return 0;
			}
		} else {
			new File(dirPath).mkdir();
		}

		for (String urlstr : urlList) {
			String myUrlStr = urlstr;
			myThread = new picThread(myThreadGroup, new Runnable() {

				@Override
				public void run() {
					// TODO Auto-generated method stub
					try {
						URL url = new URL(myUrlStr);
						BufferedInputStream is;
						try {
							// 网络流量一定要用高效的buffered
							is = new BufferedInputStream(url.openStream());
						} catch (Exception e) {
							// TODO Auto-generated catch block
							System.out.println("发现一个url资源出错:\n" + myUrlStr);
							errCount++;
							return;
						}
						String extention = "." + HttpURLConnection.guessContentTypeFromStream(is).split("/")[1];
						File file = new File(dirPath + updateCount() + extention);
						((picThread) Thread.currentThread()).file = file;
						file.createNewFile();
						OutputStream os = new FileOutputStream(file);
						int len;
						byte[] buffer = new byte[1024];
						while ((len = is.read(buffer)) != -1) {
							os.write(buffer, 0, len);
						}
						is.close();
						os.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

				}
			});
			myThread.urlStr = myUrlStr;
			myThread.start();
			// threadList.add(myThread);
			try {
				myThread.join(timeOut);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		/*
		 * for (Thread iThread : threadList) { try { // 等待所有线程执行完毕 iThread.join(1000 *
		 * 15); } catch (InterruptedException e) { e.printStackTrace(); } }
		 */
		try {
			Thread.sleep(1024);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Thread[] activeThreads = new Thread[myThreadGroup.activeCount()];
		myThreadGroup.enumerate(activeThreads);
		for (Thread thread : activeThreads) {
			System.out.println("一张图片下载超时 :" + ((picThread) thread).file.getName() + "\n" + ((picThread) thread).urlStr);
			errCount++;
			// ((picThread) thread).file.delete();
		}
		return count - myThreadGroup.activeCount();
	}

	// 使用示例:
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
		list.add(
				"http://imglf1.nosdn.127.net/img/WnhZUEZYSVNPd1lsd1doNjVPSWVkREFwNTRrNTdUM2tQYkk2bHVabHpIYjJOZVFFeEdaUWRnPT0.jpg");
		list.add("http://imgsrc.baidu.com/imgad/pic/item/b58f8c5494eef01f2c2e59feebfe9925bc317dd6.jpg");
		list.add(
				"http://imglf1.nosdn.127.net/img/WnhZUEZYSVNPd1p2Wk54NlRNMTZKLzJnci9HanJsbUNFUTlJdWdFaDhJQUlQQ3h5Y1kzOFlRPT0.jpg");
		list.add("http://b.hiphotos.baidu.com/image/pic/item/7a899e510fb30f247b237cc9c195d143ac4b03ba.jpg");
		System.out.println("完成,成功下载了:" + download(list, "C:\\Users\\Jim\\Desktop\\testPic\\"));
		System.out.println("失败:" + DownloadFromUrlList3.errCount);
		System.exit(0);
	}

}

class picThread extends Thread {
	public String urlStr = "";
	public File file;
	/*
	 * public void setUrl(String url) { urlStr = url; }
	 * 
	 * public String getUrl() { return urlStr; }
	 */

	public picThread(ThreadGroup group, Runnable run) {
		super(group, run);
	}
}