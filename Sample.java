import java.util.*;
class Sample{
	public static void main(String s[])
	{
		// System.out.println("Hello World");
		
		// Scanner sc = new Scanner(System.in);

		// int i,n,a;
		// Set <Integer> set = new HashSet<>();
		// System.out.println("Size of Set");
		// n= sc.nextInt();
		// for(i=0;i<n;i++)
		// {
		// 	System.out.print("Enter value of  a " + (i+1));
			
		// 	a=sc.nextInt();
		// 	if(set.contains(a)){
		// 		System.out.print("Enter value of  a " + (i+1));
		// 		a=sc.nextInt();
		// 		set.add(a);
		// 	}
		// 	else
		// 		set.add(a);


		// }

		// System.out.println("OutPut");
		// for(int se:set)
		// {
		// 	System.out.println(se);
		// }
		// System.out.println("Size:");
		// System.out.println(set.size());

		// Object [] array = set.toArray();

		// for(i=0;i<n;i++)
		// {
		// 	System.out.println(array[i]);
		// }


		Set<Integer> set1 = new HashSet<Integer>(); 
		set1.add(66); 
		set1.add(77); 
		set1.add(88);
		set1.add(99);
		set1.add(111);
		System.out.println("seti values: "+set1); 
		ArrayList<Integer> arr = new ArrayList<Integer>(); 
		arr.add(88); 
		arr.add(99); 
		arr.add(111); 
		arr.add(55); 
		System.out.println("arr values: "+arr);
		set1.retainAll(arr);
		System.out.println("seti after removing arr elements "+set1);

	}
}