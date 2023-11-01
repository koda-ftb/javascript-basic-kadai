const date = new Date();

// 年月日を取得
const [year, month, day] = [
  date.getFullYear(),
	date.getMonth(),
  date.getDate(),
];

// コンソールに出力
console.log(year + '年' + month + '月' + day + '日');
