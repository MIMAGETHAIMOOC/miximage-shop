# DNS Setup — miximage.shop บน Namecheap → GitHub Pages

## ขั้นตอนตั้งค่า DNS บน Namecheap

### 1. Login เข้า Namecheap
https://www.namecheap.com/myaccount/login/

### 2. ไปที่ Domain List → miximage.shop → Manage

### 3. คลิก Advanced DNS แล้วเพิ่ม Records ตามนี้:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | YOUR_USERNAME.github.io | Automatic |

> ⚠️ แทน YOUR_USERNAME ด้วย GitHub username จริง

### 4. ลบ Record เดิมที่ขัดแย้ง
- ลบ CNAME Default ที่ Namecheap ใส่ให้ (ถ้ามี)
- ลบ A Record เดิมทั้งหมด (ถ้ามี)

### 5. รอ DNS propagate 10–30 นาที (บางครั้งถึง 24 ชั่วโมง)

---

## ตั้งค่า GitHub Pages

1. GitHub repo → Settings → Pages
2. Source: **GitHub Actions** (ไม่ใช่ Branch)
3. Custom domain: `miximage.shop`
4. ✅ Enforce HTTPS (รอให้ certificate ออกก่อน ~15 นาที)

---

## ตรวจสอบ DNS

```bash
# ตรวจสอบว่า A Record ชี้ถูกต้อง
nslookup miximage.shop

# ตรวจสอบ www
nslookup www.miximage.shop
```

Expected output: 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
