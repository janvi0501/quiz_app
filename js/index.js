// datalist = [{}];

// const main_content = document.querySelector('#main_content');

// let que = document.getElementById("add_que");
// let count = 0;
// add_que.addEventListener('click', () =>{
//   const main_div = document.createElement('div');

//   for (let i = 0; i < 1; i++) {
//     count++;
//     var input = document.createElement('input');
//     input.type = 'text';
//     input.setAttribute("class", "form-control");
//     input .setAttribute("placeholder", "ENTER YOUR QUE")
//     input.name = count;
//     input.id = i;
//     main_div.appendChild(input);
//   }

//   for (let i = 0; i < 5; i++) {
//     count++;
//     var input = document.createElement('input');
//     input.type = 'text';
//     input.setAttribute("class", "form-control");
//     input .setAttribute("placeholder", "ENTER YOUR OPTION")
//     input.name = count;
//     input.id = i;
//     main_div.appendChild(input);
//   }

//   // for (let i = 0; i < 1; i++) {
//   //   count++;
//   //   var input = document.createElement('input');
//   //   input.type = 'text';
//   //   input.setAttribute("class", "form-control");
//   //   input .setAttribute("placeholder", "ENTER YOUR ANS")
//   //   input.name = count;
//   //   input.id = "count"+count;
//   //   main_div.appendChild(input);
//   // }

//   main_content.appendChild(main_div);
// });

// submit_btn.addEventListener('click', () =>{
//      console.log('submit');

//      var input = document.getElementsByTagName('input');

//       for(let i = 0; i < input.length ; i++){

//         var question = document.getElementById(i);
//         console.log(question.value);
//         var data = [{
//             question: question.value
//         }]

//         datalist.push(data)

//         console.log(datalist)
//     }
//     //  var subject = document.getElementById('subject');
//     //  var subject_data = document.getElementById('subject').value;
//     //  console.log(subject_data);

//     //  var question = document.getElementById('qestion');
//     //  var option1 = document.getElementById('option1');
//     //  var option2 = document.getElementById('option2');
//     //  var option3= document.getElementById('option3');
//     //  var option4 = document.getElementById('option4');
//     //  var answer = document.getElementById('answer');

//     // var data = [{
//     //     question: question.value,
//     //     option1: option1.value,
//     //     option2: option2.value,
//     //     option3: option3.value,
//     //     option4: option4.value,
//     //     answer: answer.value,
//     // }]
//     // datalist.push(data)

//     // console.log(datalist)
// });

datalist = [];

count = 0;
j = 0;
add_que.addEventListener("click", () => {
  const main_div = document.createElement("div");
  for (let i = 0; i < 6; i++) {
    //count++;
    j++;
    var input = document.createElement("input");
    input.type = "text";
    input.setAttribute("class", "question form-control");
    input.setAttribute("placeholder", "Enter Your Question");
    input.name = count;
    //input.id = "count"+count;
    input.id = j;
    main_div.appendChild(input);
  }
  main_content.appendChild(main_div);
});

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", () => {
  //let questionrrr = document.getElementById("question");
  //console.log(questionrrr);
  console.log("data");
  let subject_data = document.getElementById("subject").value;
  console.log(subject_data);

  let input = document.getElementsByTagName("input");
  count = 0;
  let questionObject = {};
  questionObject["quiz_data"] = {
    quiz_name: subject_data,
    quesions: [],
  };
  let optionArray = [];
  for (let i = 1; i < input.length; i++) {
    var question_data = document.getElementById(i).value;
    optionArray.push(question_data);
  }
  questionObject["quiz_data"]["quesions"].push(optionArray);
  console.log("CHECKING QUIZ DATA : ", questionObject);
  // var data = [
  //   {
  //     que1: question_data,
  //   },
  // ];

  // datalist.push(data);
  //var userdata = JSON.stringify(datalist);

  console.log(datalist);
});
