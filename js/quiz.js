//only allows one checkbox option to be selected
$('input[type="checkbox"]').on('change', function () {
    $(this).siblings('input[type="checkbox"]').prop('checked', false);
});

//submit function to add all user's answers to array
function submit() {
    answerArr = []
    $("input:checked").each(function () {
        answerArr.push($(this).val());
    });
    console.log(answerArr);
}
$("#answers").hide();
$("#submit").click(function () {
    $("#answers").show();
})
correctArr = ["C", "C", "C", "C", "C"]

function viewResults() {

    $("#answer1").append(answerArr[0])
    $("#answer2").append(answerArr[1])
    $("#answer3").append(answerArr[2])
    $("#answer4").append(answerArr[3])
    $("#answer5").append(answerArr[4])

    const result = answerArr.filter((ans) => {
        return correctArr.includes(ans)
    }).length
    const resultperc = (result / correctArr.length * 100).toFixed(2) + '%'
    $("#perc").append("<p>" + resultperc + "</p>")
    console.log(resultperc);
}
for (var i = 0; i < correctArr.length; i++) {
    $("#correct").append("<p>" + correctArr[i] + "</p>")
}

