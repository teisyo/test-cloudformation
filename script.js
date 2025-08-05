let clickCount = 0;

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ja-JP');
    document.getElementById('currentTime').textContent = timeString;
}

function showMessage(text) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 3000);
}

function handleClick() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
    
    const messages = [
        'ボタンがクリックされました！',
        'ECSで正常に動作しています！',
        'CodeBuildテスト成功！',
        'すばらしい！',
        'また押してください！'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showMessage(randomMessage);
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    
    document.getElementById('clickBtn').addEventListener('click', handleClick);
    
    console.log('ECS Test App initialized successfully');
});