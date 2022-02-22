const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？'
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

// 定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

// HTMLのオブジェクトを取ってくる場合は暗黙の了解で「$」を入れる
const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];


// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', () => {
  if (correct === $button[2].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
