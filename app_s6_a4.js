/* This is the script file from where we are passing the value */	
/* Session 6 Assignment 4 */
	
	
	var employee =[
		
					{firstname: 'Bryan', lastname:'Smith', age: 28, salary: '12 Lakh per annum', 
					address:{City: 'Bangalore', State: 'Karnataka', Pincode: 680013}},
					
					{firstname: 'John', lastname:'James', age: 29, salary: '13 Lakh per annum', 
					address:{City: 'Delhi',State: 'Delhi',Pincode: 110013}},
					
					{firstname: 'Jim', lastname:'Isaac', age: 30, salary: '8 Lakh per annum', 
					address:{City: 'Delhi', State: 'Delhi', Pincode: 110074 }},
					
					{firstname: 'Arun', lastname:'Kumar', age: 18, salary: '2 Lakh per annum', 
					address:{City: 'Chennai',State: 'Tamil Nadu',Pincode: 680015}},
					
					{firstname: 'King', lastname:'Soloman', age: 48, salary: '52 Lakh per annum', 
					address:{City: 'Goa',State: 'Goa',Pincode: 450013}},
	];
	/* Object is been created here */
	
	var text ="";
	var i;
	
	for (i in employee){
				document.write("</br> Details are as below: ");
				document.write("</br> First Name: " + employee[i].firstname);
				document.write("</br> Last Name: " + employee[i].lastname);
				document.write("</br> Age: " + employee[i].age);
				document.write("</br> Salary: " + employee[i].salary);
				document.write("</br> Address: ")
				document.write("</br> City: " + employee[i].address.City);
				document.write("</br> State: " + employee[i].address.State);
				document.write("</br> Pincode: " + employee[i].address.Pincode);
				document.write("</br>------------------------------------------------------------------");
				document.write("</br></br>");
	}