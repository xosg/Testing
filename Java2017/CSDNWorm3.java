package test;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class CSDNWorm3 {

	/*
	 * 用于爬取csdn用户的所有文章的url 注意,目前只适用于博客模板为新推出的"大白"的用户
	 */
	static String username = "BaiHuaXiu123";
	static String baseUrl = "http://blog.csdn.net/" + username + "/article/list/";
	static int page = 1;
	static int count = 0;
	// 修改该用户博客有多少页
	static int page_num = 21;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {

			while (page <= page_num) {
				Document articleList = Jsoup.connect(baseUrl + page).get();
				for (Element element : articleList.select("li ul li.blog-unit h3 a")) {
					System.out.println("blog.csdn.net" + element.attr("href"));
					count++;
				}
				page++;
			}

			System.out.println("total : " + count);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
