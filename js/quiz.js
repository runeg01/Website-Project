//only allows one checkbox option to be selected
$('input[type="checkbox"]').on('change', function() {
   $(this).siblings('input[type="checkbox"]').prop('checked', false);
});

//submit function to add all user's answers to array
function submit(){
  answerArr = []
$("input:checked").each(function(){
    answerArr.push($(this).val());
});
console.log(answerArr);  
}
$("#answers").hide();
$("#submit").click(function(){
    $("#answers").show();
})

function viewResults(){
    correctArr = ["C","C","C","C","C"]
    $("#answer1").append(answerArr[0])
    $("#answer2").append(answerArr[1])
    $("#answer3").append(answerArr[2])
    $("#answer4").append(answerArr[3])
    $("#answer5").append(answerArr[4])
    //if(answerArr.sort().join(',') === correctArr.sort().join(',')){
        
    //}else
}

