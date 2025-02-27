// btn,textというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // ボタンをクリックして2秒後に見出しのテキストを変更
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});