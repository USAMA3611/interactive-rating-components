window.onload =function(){
    const submitButton = document.getElementById("btn-submit");
    const rates = document.querySelectorAll(".btn-rate");
    const result =  document.getElementById("result");
    const ratingState = document.getElementsByClassName("rating");
    const thankState = document.getElementsByClassName("thanks");

  let rateChoose = false;

  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        result.innerHTML  = rate.innerHTML;
        rateChoose = true;
    })
  })

  const changeBackground = () => {
    rates.forEach((rate) => {
        rate.computedStyleMap.backgroundColor = "#bd3535d2";
        setTimeout (() => {
            rate.style.backgroundColor = "";
        }, 500)
    })
  }

    submitButton.addEventListener("click", () => {
    if(rateChoose) {
        ratingState[0].style.display = "none";
        thankState[0].style.display = "flex";
    }
    else{ 
        changeBackground();
    }
  })
}
