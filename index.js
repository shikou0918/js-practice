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
    console.log('ボンバ')
  }
};

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint'
}
