package test;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;

import javax.swing.JOptionPane;

import org.jsoup.Connection;
import org.jsoup.Connection.Response;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class LOFTERWormDemo {
	/*
	 * 求教如何fuck AJAX :D
	 * 
	 * 
	 */
	static String username = "maskathehusky";
	static String baseUrl = "http://" + username + ".lofter.com/?page=";
	static int page = 1;
	static int count = 0;
	// 修改该用户博客有多少页
	static int page_num = 35;
	static ArrayList urlList = new ArrayList();
	static String url;
	static File file;
	static int fileName = 1;
	static String path = "E:\\爬虫\\husky\\";
	static byte[] buffer;
	static String type;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			while (page <= page_num) {
				Connection conn = Jsoup.connect(baseUrl + page);
				Response response = conn.execute();
				type = response.header("content-type");
				Document articleList = Jsoup.parse(response.body());
				for (Element element : articleList
						.select("div.block.photo > div.main > div.content > div.img > a > img")) {
					url = element.attr("src").split("\\?")[0];
					urlList.add(url);
					count++;
				}
				page++;
			}
			for (Object url : urlList) {
				System.out.println((String) url);
			}
			System.out.println("total : " + count);

			int flag;
			flag = JOptionPane.showConfirmDialog(null, "核对url列表,是否继续?", "console提示", JOptionPane.YES_NO_OPTION);
			if (flag == JOptionPane.NO_OPTION) {
				System.exit(0);
			}
			System.out.println("正在下载....");

			for (Object url : urlList) {
				file = new File(path + fileName + ".jpg");
				file.createNewFile();
				URLConnection urlConn = new URL((String) url).openConnection();
				InputStream is = urlConn.getInputStream();
				buffer = new byte[1024];
				int len;
				OutputStream os = new FileOutputStream(file);

				while ((len = is.read(buffer)) != -1) {
					os.write(buffer, 0, len);
				}
				is.close();
				os.close();

				fileName++;
			}

			System.out.println("全部下载完成");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
