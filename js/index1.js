datalist = [];

var submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", () => {
 
  console.log("data");
  var subject = document.getElementById("subject");
  var subject_data = document.getElementById("subject").value;
  console.log(subject_data);

  var question = document.getElementById("qestion");
  var question_data = document.getElementById("qestion").value;

  var option1 = document.getElementById("option1");
  var option11_data = document.getElementById("option1").value;

  var option2 = document.getElementById("option2");
  var option2_data = document.getElementById("option2").value;

  var option3 = document.getElementById("option3");
  var option3_data = document.getElementById("option3").value;

  var option4 = document.getElementById("option4");
  var option4_data = document.getElementById("option4").value;

  var answer = document.getElementById("answer");
  var answer_data = document.getElementById("answer").value;

  var question = (document.getElementById("qestion").value = "");
  var option1 = (document.getElementById("option1").value = "");
  var option2 = (document.getElementById("option2").value = "");
  var option3 = (document.getElementById("option3").value = "");
  var option4 = (document.getElementById("option4").value = "");
  var answer = (document.getElementById("answer").value = "");

  datalist.push(
    {
      subject: subject_data,
      question: question_data,
      option1: option11_data,
      option2: option2_data,
      option3: option3_data,
      option4: option4_data,
      answer: answer_data,
    });



  console.log(datalist);

var userdata = JSON.stringify(datalist);
localStorage.setItem("data", userdata);

});



