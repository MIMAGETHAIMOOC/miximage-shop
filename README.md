# miximage.shop — MIX-IMAGE Art & Audio

เว็บไซต์ร้านสร้างภาพ MIX-IMAGE Art & Audio  
โดเมน: **[miximage.shop](https://miximage.shop)**

## 🗂️ โครงสร้างโปรเจค
```
miximage-shop/
├── index.html          # หน้าเว็บหลัก
├── CNAME               # Custom domain สำหรับ GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css   # CSS หลัก (แยกออกจาก HTML)
│   ├── js/
│   │   └── main.js     # JavaScript หลัก
│   ├── images/         # รูปภาพทั้งหมด (optimize แล้ว)
│   └── audio/          # ตัวอย่างเพลง (ถ้ามี)
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deploy ผ่าน GitHub Actions
├── .gitignore
└── README.md
```

## 🚀 การ Deploy

### 1. Push ขึ้น GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/miximage-shop.git
git add .
git commit -m "initial commit"
git push -u origin main
```

### 2. ตั้งค่า GitHub Pages
- Settings → Pages → Source: **GitHub Actions**

### 3. ตั้งค่า DNS บน Namecheap
ดูไฟล์ `DNS-SETUP.md` สำหรับขั้นตอนละเอียด

## 📞 ติดต่อ
- Line: miximage
- Tel: 081-5921229
- Web: miximage.shop
