// 変数
let unko = 'Hello World!;'

// unko = 'chinko';

// 定数
const bigUnko = 'Hello World! Hey!';

const inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！'];

// ループ分
// let index = 0;
// while (index < inoki.length) {
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++; //index = 1
// }

//if / else
// if (inoki.length > 5) {
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ')
// }

// 関数
const test = (arg) => {
  //ここに実行したい命令を書く
  //①同じ命令を何度も使いたい時
  //②任意のタイミングで命令を実行させたい時
  if (inoki.length > arg) {
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ');
  }
};

// オブジェクト 複数の値を持つことができる
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

// console.log(unko2.goToilet());

// windowはWebブラウザ全体のオブジェクト
console.log(window.innerWidth);

// documentは表示しているページ全体のオブジェクト
console.log(document);

// evenrtはユーザーがアクションしたタイミングで何かをしたいときに使う
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  // 命令を書く
  window.alert('Hello World!');
});
