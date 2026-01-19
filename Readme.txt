# QuickDrop 📤

A simple web app to transfer files from PC to mobile via Telegram Bot API.

## 🚀 Live Demo
`https://yourusername.github.io/quickdrop/`

## ✨ Features
- Drag & drop file upload
- Send files directly to Telegram (up to 50 MB)
- Dark theme, mobile responsive
- Credentials stored locally in browser

## 🔧 Setup

### 1. Create Telegram Bot
- Message [@BotFather](https://t.me/BotFather) → `/newbot`
- Copy the **Bot Token**

### 2. Get Chat ID
- Add [@myidbot](https://t.me/myidbot) to your group
- Type `/getgroupid@myidbot`
- Copy the **Chat ID** (starts with `-`)

### 3. Configure App
- Open the app
- Enter Bot Token and Chat ID in settings
- Test connection → Start uploading!

## ⚠️ Notes
- Max file size: 50 MB (Telegram limit)
- If blocked by corporate firewall, use mobile hotspot
- Credentials are stored only in your browser (localStorage)

## 🛠️ Tech Stack
HTML + CSS + JavaScript (No backend required)

## 📄 License
MIT