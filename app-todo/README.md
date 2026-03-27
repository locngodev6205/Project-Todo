# 📋 Team Todo App — Git Workshop

> Dự án mẫu dùng cho bài tập Git — môn học thực hành nhóm

## Mô tả

Một ứng dụng Todo đơn giản bằng HTML/CSS/JS. Mỗi nhóm sẽ **fork repo này**, làm việc trên các branch riêng, rồi merge lại — đúng như cách làm việc nhóm thực tế.

## Cấu trúc

```x
├── index.html   ← Cấu trúc trang
├── style.css    ← Giao diện (màu sắc, layout)
├── app.js       ← Logic JavaScript
└── README.md    ← File này
```

## Phân công trong bài tập

| Thành viên | Branch | Nhiệm vụ |
|------------|--------|----------|
| A | `feature/doi-mau-sac` | Đổi màu sắc trong `style.css` |
| B | `feature/sua-header` | Chỉnh header trong `style.css` và `index.html` |
| C | `feature/them-tinh-nang` | Implement hàm `deleteTask()` trong `app.js` |

## Hướng dẫn nhanh

```bash
# 1. Clone repo về
git clone <url-repo>

# 2. Tạo branch của mình
git checkout -b feature/ten-tinh-nang

# 3. Làm xong → commit
git add .
git commit -m "feat: mô tả ngắn gọn"

# 4. Push lên GitHub
git push origin feature/ten-tinh-nang

# 5. Tạo Pull Request trên GitHub
```
