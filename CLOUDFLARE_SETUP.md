# Cloudflare Worker Setup for Corporate Firewall Bypass

If TeleTransfer doesn't work at your office due to corporate firewall (like Zscaler), deploy this FREE Cloudflare Worker to bypass it!

## Why This Works
- Corporate firewalls block `api.telegram.org` directly
- Cloudflare Workers are rarely blocked
- Acts as a proxy between your browser and Telegram API
- **100% FREE** - No credit card required!

## Setup Steps (5 minutes)

### Step 1: Create Cloudflare Account
1. Go to https://workers.cloudflare.com
2. Click **"Sign Up"** (free account, no credit card)
3. Verify your email

### Step 2: Create a New Worker
1. Click **"Create a Service"** or **"Create a Worker"**
2. Give it a name like `telegram-proxy` or `teletransfer-proxy`
3. Click **"Create Service"**

### Step 3: Deploy the Code
1. Click **"Quick Edit"** button
2. **Delete all the default code**
3. Copy the code from `worker.js` file in this repository
4. Paste it into the editor
5. Click **"Save and Deploy"**

### Step 4: Get Your Worker URL
After deploying, you'll see a URL like:
```
https://telegram-proxy.YOUR-SUBDOMAIN.workers.dev
```

Copy this URL!

### Step 5: Configure TeleTransfer
1. Open TeleTransfer app
2. Click **Settings**
3. Scroll down to find **"Use Proxy (for corporate firewalls)"**
4. Enable the toggle
5. Paste your Worker URL
6. Click **Save Settings**
7. Click **Test Connection**

## That's It!

Now TeleTransfer will work even behind strict corporate firewalls! 🎉

## How It Works
```
Your Browser → Cloudflare Worker → Telegram API
            (Not Blocked)        (Proxied)
```

## Troubleshooting

**Worker deployment fails?**
- Make sure you deleted ALL the default code
- Copy the exact code from `worker.js`
- Don't modify the code

**Still not working?**
- Check if you enabled "Use Proxy" in settings
- Verify the Worker URL is correct (should end with `.workers.dev`)
- Test the Worker directly: `https://YOUR-WORKER.workers.dev/botYOUR_TOKEN/getMe`

**Worker URL not working?**
- Wait 1-2 minutes after deployment for propagation
- Make sure the URL doesn't have trailing slashes
- Check Cloudflare dashboard for worker status

## Free Tier Limits
- **100,000 requests per day**
- More than enough for personal use!
- No expiration

## Alternative: Public Worker (Use at your own risk)
If you don't want to create your own worker, you can use this public one:
```
https://telegram-bot-proxy.workers.dev
```

⚠️ **Note**: Using a public proxy means your bot token passes through someone else's server. It's safer to deploy your own worker!

## Cost
**$0.00** - Cloudflare Workers free tier is very generous!

## Privacy
- Only you have access to your worker
- All traffic is encrypted (HTTPS)
- Cloudflare doesn't log your bot token
- Source code is open in this repository
