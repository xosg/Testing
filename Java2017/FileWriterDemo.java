package test;

import java.io.FileWriter;
import java.io.IOException;

public class FileWriterDemo {
	public static void main(String[] args) {
		FileWriter fileWriter = null;
		try {
			try {
				fileWriter = new FileWriter("../demo.txt");
				fileWriter.write("demo");
			} finally {
				fileWriter.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}