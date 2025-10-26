# Joshua — DIY AI Chatbot (OpenAI API + Vercel)

This folder is your **starter kit**. Follow these steps **slowly**, one by one. No prior coding needed.

---

## 0) What you’ll end up with
- A webpage that shows a chat box.
- Anyone can use it. **No login required.**
- It runs on your OpenAI API key (pay-per-use, usually a couple bucks/month).

---

## 1) Make an OpenAI API key (2 minutes)
1. Visit: https://platform.openai.com/account/api-keys
2. Click **Create new secret key**.
3. Copy the key — it starts with `sk-...`. Keep it handy.

> This is different from your regular ChatGPT login. It’s the “developer key” that lets your site talk to the model.

---

## 2) Create a free Vercel account (3 minutes)
1. https://vercel.com – Sign up (Google/GitHub is fine).
2. Once logged in, you’ll see a **New Project** button.

---

## 3) Upload this project (3 minutes)
You have two simple paths — pick A or B.

**A) Drag & Drop**
- Zip this entire folder (if it isn’t already).
- In Vercel, click **New Project → Import** and drag the folder in.

**B) GitHub (optional)**
- Create a new GitHub repo and upload these files.
- In Vercel, choose **New Project → Import from GitHub**.

Vercel will scan and prepare to deploy.

---

## 4) Add your API key to Vercel (2 minutes)
1. In Vercel dashboard → your new project → **Settings → Environment Variables**.
2. Add a variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-...` (paste the key you created)
3. Save.

> Never put the key inside the code. Environment Variables keep it hidden.

---

## 5) Deploy (1 minute)
- Back on the project page, click **Deploy**.
- In ~30 seconds, you’ll get a live URL like: `https://photo-assistant.vercel.app`.

Open it — you should see your chat UI. Type a question. It should respond.

If you see an error about the API key, double-check Step 4.

---

## 6) Embed in Squarespace (2 minutes)
On your Squarespace page:
1. Add a **Code** block where you want the chat to appear.
2. Paste this:
```html
<iframe src="YOUR_VERCEL_URL_HERE" width="100%" height="640" style="border:none;"></iframe>
```
3. Replace `YOUR_VERCEL_URL_HERE` with the URL from Step 5.
4. Save the page.

Done — now it lives on your site.

---

## 7) Customize the assistant (optional, 5 minutes)
- Open `api/chat.js` and edit the **systemPrompt** text. Keep it short and clear.
- Change the title and copy in `index.html` to match your vibe.
- If you want cheaper/faster replies, keep **model** as `gpt-4o-mini`. For higher quality, try `gpt-4o`.

> After edits, redeploy from Vercel (click **Deploy** again).

---

## 8) Safety & guardrails (recommended)
- The prompt already avoids private advising/grades.
- You can add phone/email for handoff (e.g., “For advising, email …”).
- You can later add file-based knowledge (syllabi) using a retrieval service — easy to bolt on later.

---

## 9) Typical costs
Example: 300 chats/month × ~400 tokens each ≈ 120,000 tokens.  
At ~$0.01 per 1K tokens → **about $1.20/month**.

---

## 10) Troubleshooting
- **Nothing loads:** Your Vercel project may not have deployed. Click **Deploy** again.
- **API key error:** Check the Environment Variable name exactly: `OPENAI_API_KEY`.
- **No reply:** Try a simple question first (“What class is this for?”). If still broken, check Vercel **Logs** (Project → Deployments → View Function Logs).

---

## You did it
This is your “darkroom setup.” From here, we can add file search, analytics, or a nicer UI — but you already have a working bot. 🥂
