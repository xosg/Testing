package test;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class test2 {
	static String baseUrl = "http://blog.csdn.net/github_38885296/article/list/";
	static int page = 1;
	static String url;
	static File list = new File("C:\\Users\\Jim\\Desktop\\list.txt");

	public static void main(String[] args) {
		try {
			list.createNewFile();
			BufferedWriter fw = new BufferedWriter(new FileWriter(list));
			while (page <= 27) {
				url = baseUrl + page;
				Document document = Jsoup.parse(new URL(url), 5000);
				Elements elements = document
						.select("#main > div > ul.detail > li.blog-detail > ul.blog-units.blog-units-box > li");
				for (Element element : elements) {
					String href = element.selectFirst("a").attr("href");
					fw.write("http://blog.csdn.net" + href + "\r\n");
				}
				page++;
			}
			fw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}

	}
}
