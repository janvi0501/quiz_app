quiz_array = []; 
const main_content = document.querySelector('#main_content');

let que = document.getElementById("add_que");
count = 0;
j = 0;
let maindiv
add_que.addEventListener('click', () =>{
    // var number = document.getElementById('number').value;
    //  var subject_data = document.getElementById('subject').value;
    //  console.log("data")
    //  console.log('subject name=======>>',subject_data)
    // console.log(number)
    const main_div = document.createElement('div');
    main_div.setAttribute("class", maindiv)
    for (let i = 0; i < 5; i++) {
      count++;
      j++;
      if(i == 0){
        var input = document.createElement('input');
        input.type = 'text';
        input.id = j;
        input.name = count;
        input.setAttribute("class", "form-control");
        input.setAttribute("placeholder", "ENTER YOUR QUE")
        main_div.appendChild(input);
      }
      if(1 <= i < 5){
        var inputoption = document.createElement('input');
        inputoption.type = 'text';
        inputoption.id = j;
        inputoption.name = count;
        inputoption.setAttribute("class", "form-control");
        inputoption.setAttribute("placeholder", i + 1 + ". ENTER YOUR OPTIONS")
        main_div.appendChild(inputoption);
      }
      if(i == 4){
        var answerinput = document.createElement("input");
        answerinput.type = 'text';
        answerinput.id = j;
        answerinput.name = count;
        answerinput.setAttribute("class", "form-control");
        answerinput.setAttribute("placeholder", "ENTER YOUR ANSWER")
        main_div.appendChild(answerinput);
      }
    }
    
    main_content.appendChild(main_div);

})

submit_btn.addEventListener('click', () =>{
  let subject_data = document.getElementById("subject").value;
  console.log(subject_data);
  
  var div = document.getElementsByClassName(maindiv);

  quiz_object = {
     "quiz_name": subject_data, 
     "questions": []  
   }
   
  console.log("div.length", div.length)
  for(let i = 0; i < div.length ; i++){
   let counter = 1
     let que = {
         Que1 :document.getElementById(counter).value,
         OP_1 :document.getElementById(counter+1).value,
         OP_2 :document.getElementById(counter+2).value,
         OP_3 :document.getElementById(counter+3).value,
         OP_4 :document.getElementById(counter+4).value,
         Ans :document.getElementById(counter+5).value
       }
       console.log("11111111111111111111111111111111", que)

       quiz_object["questions"].push(que)
       
       //var question = (document.getElementById(i).value = "");
     }
     console.log(quiz_object);

 
});