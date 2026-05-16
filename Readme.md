# Automated WallPaper

Display random wallpapers on your website or IPTV player.

## Installation with Cloudflare Workers

1. Go to [Cloudflare Workers](https://workers.cloudflare.com/)

2. Create a new Worker and paste the `worker.js` into the Code tab

3. Deploy the Worker

4. Use the Worker URL in your IPTV player or application as the background image URL

## Usage

Add wallpaper URLs to the `wallPaper` array in the Worker code. Each time the URL is accessed, a random wallpaper from the array will be returned.

## Troubleshooting

**Wallpaper not displaying:**
- Verify all image URLs are correct and accessible
- Check that the Worker is deployed successfully
- Ensure CORS settings allow the image source

**Images not scaling properly:**
- In your HTML/CSS, use `background-size: contain` to fit the entire image
- Use `background-size: cover` to fill the screen (may crop edges)
- Use `background-size: 100% 100%` to stretch the image

**Always getting the same wallpaper:**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- The cache-busting headers should prevent caching, but manual clearing helps