package test;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class MimeTest {
	public static void main(String[] args) {

		try {
			BufferedInputStream bis = null;
			HttpURLConnection urlconnection = null;
			URL url = null;
			url = new URL("http://img.taopic.com/uploads/allimg/130226/234592-1302261U10533.jpg");
			urlconnection = (HttpURLConnection) url.openConnection();
			bis = new BufferedInputStream(urlconnection.getInputStream());
			System.out.println("file type:" + HttpURLConnection.guessContentTypeFromStream(bis));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
