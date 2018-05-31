package test;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.Arrays;

/**
 * 使用URLConnection下载文件或图片并保存到本地。
 *
 * @author 老紫竹(laozizhu.com)
 */
public class URLConnectionDownloader {

	static String url = "http://img05.tooopen.com/images/20140326/sy_57640132134.jpg";

	public static void main(String[] args) throws Exception {
		download(url, "../test.png");
	}

	/**
	 * 下载文件到本地
	 *
	 * @param urlString
	 *            被下载的文件地址
	 * @param filename
	 *            本地文件名
	 * @throws Exception
	 *             各种异常
	 */
	public static void download(String urlString, String filename) throws Exception {
		// 构造URL
		URL url = new URL(urlString);
		// 打开连接
		URLConnection con = url.openConnection();
		System.out.println(con.getHeaderField("Content-Type").split("/")[1]);
		// 输入流
		InputStream is = con.getInputStream();
		// 1K的数据缓冲
		byte[] bs = new byte[1024];
		byte[] bs2;
		// 读取到的数据长度
		int len;
		// 输出的文件流
		OutputStream os = new FileOutputStream(filename);
		// 开始读取
		while ((len = is.read(bs)) != -1) {
			bs2 = Arrays.copyOfRange(bs, 0, len);
			// System.out.println(len + "\t" + bs2.length);
			os.write(bs2);
		}

		// 完毕，关闭所有链接
		os.close();
		is.close();
	}
}