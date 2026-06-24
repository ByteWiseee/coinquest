// این فایل فقط برای مینی‌اپ تلگرام لازمه
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();

    // دکمه اصلی تلگرام رو فعال کن (اختیاری)
    Telegram.WebApp.MainButton.setText("بازگشت به منو");
    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.onClick(() => {
        window.location.href = "/";
    });
}