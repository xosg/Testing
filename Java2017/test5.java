package test;

import java.io.File;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class test5 {
	static String url;
	static File list = new File("C:\\Users\\Jim\\Desktop\\list.txt");

	public static void main(String[] args) {
		final ExecutorService exec = Executors.newFixedThreadPool(1);

		Callable call = new Callable() {
			public Object call() throws Exception {
				// 开始执行耗时操作
				while (true) {
					System.out.println("test");
					Thread.sleep(500);
				}
			}
		};

		Future future = exec.submit(call);

		try {
			future.get(1000 * 3, TimeUnit.MILLISECONDS); // 任务处理超时时间设为 3 秒
			System.out.println("ok");
		} catch (TimeoutException ex) {
			System.out.println("处理超时啦....");
			future.cancel(true);
			System.out.println(Thread.activeCount());
			ex.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 关闭线程池
		exec.shutdown();
	}

}
