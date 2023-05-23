// add = document.getElementById("add");
        // add.addEventListener("click", () => 
        function getAndupdate() {
            console.log("updating list....");
             tit = document.getElementById('title').value;
             desc = document.getElementById('description').value;
            //  const itemList = {tit,desc};
            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
                // console.log("if");
            }
            else{

                itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray = JSON.parse(itemJsonArrayStr); 
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
                // console.log(tit);
                // console.log(desc);
            }

            update();

        }

           function update(){
            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
                // console.log("if");
            }
            else{

                itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray = JSON.parse(itemJsonArrayStr); 
              
                // console.log(tit);
                // console.log(desc);
            }
            // populate the  table
           let tableBody = document.getElementById("tableBody");
            let str = "";
            itemJsonArray.forEach((element,index) => {
                  
                str += `
                <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
                    </tr>`;

                
            });

            tableBody.innerHTML = str;
        }
        add = document.getElementById("add");
        add.addEventListener("click",getAndupdate);
        update();

        function deleted(itemIndex){
            console.log("Delete",itemIndex);
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            
            // Delete itemIndex from the array
            itemJsonArray.splice(itemIndex,1);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            update();

        }

            function clearStorage(){
                if(confirm("Do you want clear?")){
                console.log("Clearing the storage")
                localStorage.clear();
                update();
                }
            }