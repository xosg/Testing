package test;

public class TestThread {

	public static void main(String args[]) throws InterruptedException {

		Thread myThread22 = new Thread(new Runnable() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				try {
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					this.wait(1000);
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);

					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
					Thread.sleep(100);
					System.out.println("fuck : 22");
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});

		Thread myThread333 = new Thread(new Runnable() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				try {
					Thread.sleep(50);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
					Thread.sleep(100);
					System.out.println("fuck : 333");
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});

		myThread22.start();
		myThread333.start();
	}
}
