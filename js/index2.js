quiz_array = []; 
const main_content = document.querySelector('#main_content');

let que = document.getElementById("add_que");
count = 0;
j = 0;
add_que.addEventListener('click', () =>{
    // var number = document.getElementById('number').value;
     var subject_data = document.getElementById('subject').value;
     console.log("data")
     console.log(subject_data)
    // console.log(number)
    const main_div = document.createElement('div');

    for (let i = 0; i < 6; i++) {
      count++;
      j++;
      var input = document.createElement('input');
      input.type = 'text';
      input.setAttribute("class", "form-control");
      input .setAttribute("placeholder", i + 1 + ". ENTER YOUR QUE")
      input.name = count;
      input.id = j;
      main_div.appendChild(input);
    }
    
    main_content.appendChild(main_div);
    quiz_object = {
      "quiz_name": subject_data, 
      "question": []  
    }

    let que = {
        Que1 : "",
        OP_1 : "",
        OP_2 : "",
        OP_3 : "",
        OP_4 : "",
        Ans : ""
    }

    quiz_object["question"].push(que)
    
   console.log(quiz_object)

})