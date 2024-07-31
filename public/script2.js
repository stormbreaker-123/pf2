

       
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            var formData = new FormData(this);
            

            fetch('/signup', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData.entries())), //fromEntries converts into 
                //                                                           javascript plain object where formData.entries makes it iterable
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json()) // parsing the recieved data from the server  from json to js plain object 
            .then(data => {
                if (data.message === "Record inserted successfully") {
                    document.getElementById("success-popup").style.display = "block";
                }
            })
            .catch(error => console.error('Error:', error));
        });

     