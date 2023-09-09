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

  /* ulタグの子要素に各要素を設定 */
  ul.appendChild(li);

  /* 未完了リストに追加 */
  document.getElementById("incomplete_list").appendChild(ul);

}

document.getElementById("add_button")
.addEventListener("click",() => onClickAdd());