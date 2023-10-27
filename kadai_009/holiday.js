// 配列の宣言と値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log('for文での出力です');
// 0〜15まで1つずつ増えていく変数iを配列のインデックスに代入する
for(let i = 0; i <= 15; i++){
	console.log(holidays[i]);
}

console.log('while文での出力です');
// 変数の宣言
let num = 0;

// 変数numをインデックスに代入し、15になるまでコンソールに出力
while(num <= 15){
	console.log(holidays[num]);
	num = num + 1;
}