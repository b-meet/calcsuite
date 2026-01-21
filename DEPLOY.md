# Deployment Guide: Cloudflare Pages & AdSense

This guide covers how to deploy your **CalcSuite** application to **Cloudflare Pages** and enable **Google AdSense**.

## Part 1: Deploying to Cloudflare Pages

Cloudflare Pages is the recommended host for modern React/Vite applications because it offers global CDN performance, free SSL, and continuous integration.

### Option A: Connect to Git (Recommended)
If you have your code pushed to GitHub or GitLab:

1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  Select your repository (`calculator-suite`).
4.  **Build Settings**:
    *   **Framework Preset**: `Vite`
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Save and Deploy**.

### Option B: Direct Upload (Drag & Drop)
If you don't want to use Git:

1.  On your local machine, run the build command:
    ```bash
    npm run build
    ```
    (This creates a `dist` folder in your project root).
2.  Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
3.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Upload Assets**.
4.  Drag and drop the contents of your `dist` folder.

### Option C: CLI Deployment
You can deploy directly from your terminal using Wrangler (Cloudflare's CLI).

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Build the project**:
    ```bash
    npm run build
    ```
3.  **Login to Cloudflare** (if not already logged in):
    ```bash
    npx wrangler login
    ```
4.  **Deploy**:
    ```bash
    npx wrangler pages deploy dist --project-name=calc-suite
    ```

---

## Part 2: SPA Routing (Important)

Your app uses client-side routing (`react-router-dom`). Cloudflare Pages essentially handles this automatically with a `_redirects` file or standard SPA support.

If you encounter 404 errors when refreshing on a specific page (e.g., refreshing `/calculator/bmi`), ensure you create a `_redirects` file in your `public/` directory with the following content:

```text
/*  /index.html  200
```

*(Note: We have already configured this for you if you built the project using the standard build command, as Vite often handles asset generation, but explicitly adding this file is a safe best practice.)*

To be safe, run this command now to generate it:

```bash
echo "/* /index.html 200" > public/_redirects
```

---

## Part 3: Enabling Google AdSense

Once your site is live (e.g., `https://calc-suite.pages.dev` or your custom domain), you can activate AdSense.

1.  **Sign Up/Log In**: Go to [Google AdSense](https://adsense.google.com/).
2.  **Add Site**: Enter your deployed URL.
3.  **Get Code**: AdSense will provide a code snippet tailored to your publisher ID (looks like `ca-pub-123456789`).
4.  **Update Code**:
    *   Open `index.html`.
    *   Uncomment the script tag we added in the `<head>`.
    *   Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual ID.
    ```html
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID" crossorigin="anonymous"></script>
    ```
5.  **Re-deploy**: Push your changes to Git or re-run the build/deploy steps from Part 1.
6.  **Verify**: Click "I've placed the code" in the AdSense dashboard. Review usually takes a few days.

### Ad Tips
*   **Ads.txt**: Cloudflare treats `ads.txt` just like any other static file. Download it from Google and place it in your `public/` folder. It will be served at `your-site.com/ads.txt` automatically.
