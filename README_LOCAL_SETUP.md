# 🚀 Running WattGlow Website Locally

This is a static HTML website. Here are several ways to run it on your local machine:

---

## Option 1: Python HTTP Server (Recommended)

### Python 3 (Most Common)
```bash
# Navigate to the project directory
cd /Users/aishwaryakumari/Documents/wattglowWeb

# Start the server
python3 -m http.server 8000
```

### Python 2 (If Python 3 is not available)
```bash
python -m SimpleHTTPServer 8000
```

**Then open:** `http://localhost:8000` in your browser

---

## Option 2: Node.js HTTP Server

If you have Node.js installed:

### Using `http-server` (Install once, use forever)
```bash
# Install globally (one time only)
npm install -g http-server

# Navigate to project directory
cd /Users/aishwaryakumari/Documents/wattglowWeb

# Start the server
http-server -p 8000
```

### Using `npx` (No installation needed)
```bash
cd /Users/aishwaryakumari/Documents/wattglowWeb
npx http-server -p 8000
```

**Then open:** `http://localhost:8000` in your browser

---

## Option 3: PHP Built-in Server

If you have PHP installed:

```bash
cd /Users/aishwaryakumari/Documents/wattglowWeb
php -S localhost:8000
```

**Then open:** `http://localhost:8000` in your browser

---

## Option 4: VS Code Live Server Extension

If you're using VS Code:

1. Install the **"Live Server"** extension by Ritwick Dey
2. Right-click on `index.html`
3. Select **"Open with Live Server"**

The site will automatically open in your browser and auto-reload on file changes!

---

## Option 5: Using Browser's File Protocol (Limited)

⚠️ **Note:** This method has limitations (CORS issues, some features may not work)

Simply open `index.html` directly in your browser:
```bash
open index.html  # macOS
# or double-click index.html in Finder
```

**Limitations:**
- Some JavaScript features may not work
- External resources might be blocked
- Not recommended for development

---

## Quick Start (Recommended)

### For macOS/Linux:
```bash
cd /Users/aishwaryakumari/Documents/wattglowWeb
python3 -m http.server 8000
```

### For Windows:
```bash
cd C:\path\to\wattglowWeb
python -m http.server 8000
```

Then visit: **http://localhost:8000**

---

## Troubleshooting

### Port Already in Use?
If port 8000 is busy, use a different port:
```bash
python3 -m http.server 8080  # Use port 8080 instead
```

### Python Not Found?
- **macOS:** Python 3 should be pre-installed. If not, install via Homebrew: `brew install python3`
- **Windows:** Download from [python.org](https://www.python.org/downloads/)
- **Linux:** Install via package manager: `sudo apt install python3` (Ubuntu/Debian)

### Node.js Not Found?
- Download from [nodejs.org](https://nodejs.org/)
- Or use `npx` which doesn't require installation

---

## Development Tips

1. **Keep the server running** while you make changes
2. **Hard refresh** (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) to see CSS/JS changes
3. **Check browser console** (F12) for any errors
4. **Test on different browsers** to ensure compatibility

---

## File Structure

```
wattglowWeb/
├── index.html          # Main homepage
├── css/               # Stylesheets
├── js/                # JavaScript files
├── img/               # Images
├── lib/               # Third-party libraries
└── components/        # Reusable components
```

---

## Need Help?

- Check browser console (F12) for errors
- Ensure all file paths are correct
- Verify server is running on the correct port
- Make sure you're in the correct directory

---

**Happy coding! 🎉**

