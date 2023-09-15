import "./styles.css";

const onClickAdd = () => {
  /* テキストボックスの値を取得し、初期化する */
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  /* ulの生成 */
  const ul = document.createElement("ul");
  ul.className = "list_row"; /* クラスの追加 */

  /* liの生成 */
  const li = document.createElement("li");
  li.innerText = inputText;　/* テキストの追加 */

  /* ボタン（完了）タグの生成 */
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  /* ボタン（削除）タグの生成 */
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  deleateButton.addEventListener("click", () => {
    /* 押された削除ボタンの親タグ(ul)を未完了リストから削除 */
    const deleateTarget = deleateButton.parentNode;
    document.getElementById("incomplete_list").removeChild(deleateTarget);
  });

  /* ulタグの子要素に各要素を設定 */
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleateButton);


  /* 未完了リストに追加 */
  document.getElementById("incomplete_list").appendChild(ul);

}

document.getElementById("add_button")
.addEventListener("click",() => onClickAdd());