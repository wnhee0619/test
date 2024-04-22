function calculateResult() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    // 질문 2부터 5까지의 값을 동일한 방식으로 가져옵니다.
    
    if (!q1) {
      alert("1번 질문에 대한 답을 선택해주세요.");
      return;
    }
    // 다른 질문들에 대해서도 동일한 방식으로 검사하고 alert를 통해 메시지를 보여줍니다.
    
    // 각 질문에 따라 점수를 계산하고 결과를 판단합니다.
    var totalScore = parseInt(q1.value);
    // 질문 2부터 5까지의 값을 더해주세요.
    
    var resultText = "";
    if (totalScore <= 5) {
      resultText = "'GPT'";
    } else if (totalScore <= 10) {
      resultText = "'clova'";
    } else {
      resultText = "'gemini'";
    }
    
    document.getElementById("resultText").innerHTML = "당신의 결과는 " + resultText + " 입니다.";
    document.getElementById("result").style.display = "block";
  }
  