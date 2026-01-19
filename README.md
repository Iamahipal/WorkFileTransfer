# QuickDrop 📤

A simple, modern web app to transfer files from your PC browser directly to Telegram using the Bot API. No backend required - runs entirely in your browser!

## 🚀 Live Demo

Access the app at: `https://yourusername.github.io/WorkFileTransfer/`

*(Update this URL with your actual GitHub username after deployment)*

## ✨ Features

- **Drag & Drop Upload** - Intuitive file upload experience
- **Direct to Telegram** - Files sent directly to your Telegram chat via Bot API
- **Large File Support** - Handle files up to 50 MB (Telegram's limit)
- **Progress Tracking** - Real-time upload status for each file
- **Dark Theme UI** - Modern, responsive design that works on all devices
- **Secure Storage** - Bot credentials stored locally in your browser only
- **Connection Testing** - Built-in tool to verify your bot configuration
- **Batch Upload** - Send multiple files at once

## 🔧 Setup Instructions

### 1. Create Your Telegram Bot

1. Open Telegram and message [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the prompts to choose a name and username
4. Copy the **Bot Token** (looks like: `8566051800:AAE9JZt2zJw2va1zV0m8v8b4EGf-NQAZyuE`)

### 2. Get Your Chat ID

**For Groups:**
1. Add your bot to the group
2. Add [@myidbot](https://t.me/myidbot) to your group
3. Send `/getgroupid@myidbot`
4. Copy the **Chat ID** (starts with `-`, like: `-1003427078446`)

**For Personal Chat:**
1. Start a chat with your bot
2. Send any message
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find the `"chat":{"id":` value

### 3. Configure the App

1. Open QuickDrop in your browser
2. Click the **⚙️ Settings** button
3. Paste your **Bot Token** and **Chat ID**
4. Click **Save Settings**
5. Click **Test Connection** to verify everything works

### 4. Start Transferring Files!

1. Drag and drop files onto the upload zone (or click to browse)
2. Review the files in the list
3. Click **Send to Telegram**
4. Check your Telegram chat for the files!

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Active internet connection
- Telegram bot with proper permissions

## ⚠️ Important Notes

### File Size Limits
- Maximum file size: **50 MB** (Telegram API limitation)
- Files exceeding this limit will be rejected automatically

### CORS & Network Issues

The app makes direct requests to Telegram API from your browser. If you encounter connection issues:

1. **Corporate Firewall/Proxy** - If you're behind a corporate network (like Zscaler), the requests may be blocked
   - Solution: Use a mobile hotspot or home network

2. **CORS Errors** - Some networks may block cross-origin requests
   - Solution: Try a different network connection

3. **Connection Test** - Always use the "Test Connection" button in settings to verify your setup

### Privacy & Security

- Your bot token and chat ID are stored **only in your browser's localStorage**
- No data is sent to any server except Telegram's official API
- The app runs entirely client-side - no backend involved
- Clear your browser data to remove stored credentials

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **Telegram Bot API** - File transfer backend

## 📁 Project Structure

```
WorkFileTransfer/
├── index.html          # Main app (HTML + CSS + JS in single file)
├── README.md          # This file
└── Readme.txt         # Original readme
```

## 🚀 Deployment (GitHub Pages)

### Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select `main` branch
4. Click **Save**
5. Your app will be live at: `https://yourusername.github.io/WorkFileTransfer/`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain
2. Configure DNS settings at your domain registrar
3. Enable HTTPS in GitHub Pages settings

## 🔍 Troubleshooting

### "Connection failed" Error
- Verify your bot token is correct
- Ensure your bot is added to the chat (for groups)
- Check if chat ID includes the `-` prefix for groups
- Try using "Test Connection" to see detailed error messages

### Files Not Uploading
- Check file size (must be under 50 MB)
- Verify internet connection
- Look for CORS errors in browser console (F12)
- Try a different network if behind corporate firewall

### Settings Not Saving
- Check if browser allows localStorage
- Disable private/incognito mode
- Clear browser cache and try again

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

MIT License - Free to use and modify

## 💡 Use Cases

- Transfer files from PC to mobile phone
- Share files with team members via Telegram group
- Quick file backup to Telegram's cloud
- Send documents while working remotely
- Share screenshots and images instantly

## 🔗 Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [BotFather - Create Bots](https://t.me/BotFather)
- [Get Chat ID Bot](https://t.me/myidbot)

---

**Made with ❤️ for seamless file transfers**
