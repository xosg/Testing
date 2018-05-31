package test;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;

public class MyClipboard {

	// 使用示例
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		setSysClipboardText("Fvck U , Gfvv");
		String testText = getSysClipboardText();
		System.out.println(testText);
	}

	/**
	 * 从剪切板获得字符串。
	 */
	public static String getSysClipboardText() {
		String ret = "";
		Clipboard sysClip = Toolkit.getDefaultToolkit().getSystemClipboard();
		// 获取剪切板中的内容
		Transferable clipTf = sysClip.getContents(null);

		if (clipTf != null) {
			// 检查内容是否是文本类型
			if (clipTf.isDataFlavorSupported(DataFlavor.stringFlavor)) {
				try {
					ret = (String) clipTf.getTransferData(DataFlavor.stringFlavor);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return ret;
			} else {
				System.out.println("THE CONTENT IN THE CLIPBOARD ISN'T A STRING");
				return null;
			}
		}

		return ret;
	}

	/**
	 * 将字符串复制到剪切板。
	 */
	public static void setSysClipboardText(String someText) {
		Clipboard clip = Toolkit.getDefaultToolkit().getSystemClipboard();
		Transferable tText = new StringSelection(someText);
		clip.setContents(tText, null);
	}

}
