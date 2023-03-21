datalist = [{}];
quiz_data = [];

const main_content = document.querySelector('#main_content');

let que = document.getElementById("add_que");
count = 0;
j = 0;
add_que.addEventListener('click', () =>{
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

  // for (let i = 0; i < 4; i++) {
  //   count++;
  //   var input = document.createElement('input');
  //   input.type = 'text';
  //   input.setAttribute("class", "form-control");
  //   input .setAttribute("placeholder", "ENTER YOUR OPTION")
  //   input.name = count;
  //   input.id = i;
  //   main_div.appendChild(input);
  // }

  // for (let i = 0; i < 1; i++) {
  //   count++;
  //   var input = document.createElement('input');
  //   input.type = 'text';
  //   input.setAttribute("class", "form-control");
  //   input .setAttribute("placeholder", "ENTER YOUR ANS")
  //   input.name = count;
  //   input.id = i;
  //   main_div.appendChild(input);
  // }

  main_content.appendChild(main_div);
});

submit_btn.addEventListener('click', () =>{
    // console.log('submit');
     var subject_data = document.getElementById('subject').value;
     console.log('subject_data')
     var input = document.getElementsByTagName('input');
     
    
     let questionObject = {};
     questionObject["quiz_data"] = {
          quiz_name: subject_data, 
          question: [],
     }; 
     let optionArray = [];
     for (let i = 1; i < input.length; i++) {
         var question_data = document.getElementById(i).value;
         optionArray.push(question_data); 
         var question_data = document.getElementById(i).value = "";
     }

     questionObject["quiz_data"]["question"].push(optionArray);
        console.log("CHECKING QUIZ DATA : ", questionObject);
        var data = [
           {
            que: question_data,
          },
        ];


      // for(let i = 1; i < input.length ; i++){
      //   //console.log('value of i =======>' , i);
      //   var question = document.getElementById(i);
      //   console.log(question.value);
      //   // var data = [{
      //   //     question: question.value
      //   // }]

      //   // datalist.push(data)

      //   //  console.log('datalist====>',datalist)
      // }
      
      // let quiz_data = {
      //   "quiz_name": subject_data, 
      //   "question": []
      //  }
  
      //  datalist.push(quiz_data)
      //  console.log('datalist====>',datalist)

      datalist.push(data);
        var userdata = JSON.stringify(datalist);
      
         console.log(datalist);
});

// datalist = [];

// count = 0;
// j = 0;
// add_que.addEventListener("click", () => {
//   const main_div = document.createElement("div");
//   for (let i = 0; i < 6; i++) {
//     //count++;
//     j++;
//     var input = document.createElement("input");
//     input.type = "text";
//     input.setAttribute("class", "question form-control");
//     input.setAttribute("placeholder", "Enter Your Question");
//     input.name = count;
//     //input.id = "count"+count;
//     input.id = j;
//     main_div.appendChild(input);
//   }
//   main_content.appendChild(main_div);
// });

// let submit_btn = document.getElementById("submit_btn");

// submit_btn.addEventListener("click", () => {
//   //let questionrrr = document.getElementById("question");
//   //console.log(questionrrr);
//   console.log("data");
//   let subject_data = document.getElementById("subject").value;
//   console.log(subject_data);

//   let input = document.getElementsByTagName("input");
//   count = 0;
//   let questionObject = {};
//   questionObject["quiz_data"] = {
//     quiz_name: subject_data, 
//     quesions: [],
//   };
//   let optionArray = [];
//   for (let i = 1; i < input.length; i++) {
//     var question_data = document.getElementById(i).value;
//     optionArray.push(question_data);
//   }
//   questionObject["quiz_data"]["quesions"].push(optionArray);
//   console.log("CHECKING QUIZ DATA : ", questionObject);
//   // var data = [
//   //   {
//   //     que1: question_data,
//   //   },
//   // ];

//   // datalist.push(data);
//   //var userdata = JSON.stringify(datalist);

//   console.log(datalist);
// });

