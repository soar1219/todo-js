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
    /* 押された完了ボタンの親タグ(ul)を未完了リストから削除 */
    deleateFromIncompleateList(completeButton.parentNode);

    /* 完了リストに追加する要素 */
    const addTarget = completeButton.parentNode;
    
    /* TODOテキスト内容を取得 */
    const text = addTarget.firstElementChild.innerText;

    /* div以下を初期化 */
    addTarget.textContent = null;

    /* liタグを生成 */
    const li = document.createElement("li");
    li.innerText = text;

    /* 戻すボタンを生成 */
    const buckButton = document.createElement("button");
    buckButton.innerText = "戻す";
    buckButton.addEventListener("clic", () => {

    })

    /* divタグの子要素に各要素を設定 */
    addTarget.appendChild(li);
    addTarget.appendChild(buckButton);

    /* 完了リストに追加 */
    document.getElementById("complete_list").appendChild(addTarget)
  });

  /* ボタン（削除）タグの生成 */
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  deleateButton.addEventListener("click", () => {
    /* 押された削除ボタンの親タグ(ul)を未完了リストから削除 */
    deleateFromIncompleateList(deleateButton.parentNode);
  });


  /* ulタグの子要素に各要素を設定 */
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleateButton);


  /* 未完了リストに追加 */
  document.getElementById("incomplete_list").appendChild(ul);

  /* 未完了リストから指定の要素を削除 */
  const deleateFromIncompleateList = (target) => {
    document.getElementById("incomplete_list").removeChild(target);
  }
  
}

document.getElementById("add_button")
.addEventListener("click",() => onClickAdd());