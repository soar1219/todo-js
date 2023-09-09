import "./styles.css";

const onClickAdd = () => {
  /* テキストボックスの値を取得し、初期化する */
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  alert(inputText);
}

document.getElementById("add_button")
.addEventListener("click",() => onClickAdd());