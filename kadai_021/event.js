// HTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたら、2秒の待ち時間後に処理を実行する
btn.addEventListener('click', () => {
	setTimeout(() =>{
		text.textContent = 'ボタンをクリックしました';
	}, 2000);
});
