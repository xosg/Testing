package test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class readLinesFromAFile2 {

	private BufferedReader br;

	public readLinesFromAFile2(File file) {
		try {
			this.br = new BufferedReader(new FileReader(file));

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public BufferedReader getBufferedReader() {
		return this.br;
	}

	// 测试
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			ArrayList<String> list = new ArrayList<String>();

			readLinesFromAFile2 rlf1 = new readLinesFromAFile2(new File("C:\\Users\\Jim\\Desktop\\content.txt"));
			readLinesFromAFile2 rlf2 = new readLinesFromAFile2(new File("C:\\Users\\Jim\\Desktop\\date.txt"));
			readLinesFromAFile2 rlf3 = new readLinesFromAFile2(new File("C:\\Users\\Jim\\Desktop\\version.txt"));

			for (int i = 1; i <= 26; i++) {

				list.add(0,
						"insert into t_history(date,version,content,isBig) values('"
								+ rlf2.getBufferedReader().readLine() + "','" + rlf3.getBufferedReader().readLine()
								+ "','" + rlf1.getBufferedReader().readLine() + "',false);");

			}
			for (String string : list) {
				System.out.println(string);
			}

			/*
			 * String str; readLinesFromAFile rlf = new readLinesFromAFile(new
			 * File("C:\\Users\\Jim\\Desktop\\test.txt")); while ((str =
			 * rlf.getBufferedReader().readLine()) != null) { System.out.println(str); }
			 */
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
