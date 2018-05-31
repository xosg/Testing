package test;

public class ThreadJoin {

	public static void main(String[] args) {

		Thread thread = new Thread(new Runnable() {

			@Override
			public void run() {
				System.err.println("线程" + Thread.currentThread().getId() + " 打印信息");
			}
		});
		thread.start();

		try {
			thread.join(); // 等待thread死亡
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.err.println("主线程打印信息");

	}

}