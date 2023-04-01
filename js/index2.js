datalist = [];

const main_content = document.querySelector('#main_content');

let que = document.getElementById("add_que");
let count = 0;
j = 0;
let maindiv 
add_que.addEventListener('click', () =>{
  const main_div = document.createElement('div');
  main_div.setAttribute("class", maindiv)
  for (let i = 0; i < 6; i++) {
    count++;
    j++;
    var input = document.createElement('input');
    input.type = 'text';
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", i + 1 + ". Enter Your Question");
    input.name = count;
    input.id = j;
    main_div.appendChild(input);
  }


  main_content.appendChild(main_div);
});

submit_btn.addEventListener('click', () =>{
     let subject_data = document.getElementById("subject").value;
     console.log(subject_data);
     
     var div = document.getElementsByClassName(maindiv);
    // console.log(maindiv)
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
          //console.log("11111111111111111111111111111111", que)

          quiz_object["questions"].push(que)
          
          //var question = (document.getElementById(i).value = "");
        }
        console.log(quiz_object);

    
});