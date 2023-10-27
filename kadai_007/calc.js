// 変数を宣言、0〜20のランダムな整数を代入する
let num = Math.floor(Math.random() * 21);

if(num % 3 === 0 && num % 5 === 0){
	console.log(num + ' 3と5の倍数です');
}
else if(num % 3 === 0){
	console.log(num + ' 3の倍数です');
}
else if(num % 5 === 0){
	console.log(num + ' 5の倍数です');
}
else{
	console.log(num);
}