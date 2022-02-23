const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？'
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

// HTMLのオブジェクトを取ってくる場合は暗黙の了解で「$」を入れる
const $button = document.getElementsByTagName('button');

// ボタンの数
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  // 配列の分だけ数を取得
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength ) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
