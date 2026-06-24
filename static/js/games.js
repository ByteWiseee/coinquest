// Click Game
let clickCount = 0;
document.getElementById('click-btn')?.addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-score').textContent = clickCount;
    if (clickCount >= 50) {
        fetch('/api/game_score', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({game_name: 'click', score: clickCount})
        });
        alert('عالی! ۱۰۰ کوین گرفتی (از کوئست)');
    }
});

// Guess Game
let secretNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('guess-btn')?.addEventListener('click', () => {
    let guess = parseInt(document.getElementById('guess-input').value);
    let feedback = document.getElementById('guess-feedback');
    if (guess === secretNumber) {
        feedback.textContent = 'درست! ۵۰ کوین!';
        fetch('/api/game_score', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({game_name: 'guess', score: guess}) });
    } else if (guess < secretNumber) {
        feedback.textContent = 'بالاتر!';
    } else {
        feedback.textContent = 'پایین‌تر!';
    }
});

// Memory Game (ساده)
document.getElementById('memory-start')?.addEventListener('click', () => {
    // ساده: ۵ کارت رندوم – بعداً کامل می‌کنیم
    alert('بازی شروع شد! (نمونه ساده)');
    fetch('/api/game_score', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({game_name: 'memory', score: 5}) });
});