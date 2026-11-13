# 🔗 Social Links Profile

A clean, responsive, and accessible social links profile page built with **HTML, CSS, and Vanilla JavaScript**.

I created this as a focused hands-on practice project to sharpen my core layout fundamentals, specifically **CSS Flexbox**, alignment, and **Web Accessibility (a11y)** and tested it directly using the **NVDA screen reader** to ensure an inclusive user experience.

---

### 💡 Why I Built This
- **Fundamentals Matter in an AI World:** Everyone says AI can write CSS and boilerplate code even better than developers themselves, which is absolutely right. However, refreshing my core layout and styling skills ensures I can spot what needs improvement, debug edge cases, and give sharper, more effective feedback when reviewing AI-generated code.
  
- **Small Wins Count:** Sometimes, building and shipping even a small, self-contained project from scratch is the best way to turn a slow day into a meaningful one.

---

### 🎯 What I Practiced & Learned
- **CSS Flexbox & Centering:** Practiced modern alignment techniques (`display: flex`, `justify-content`, `align-items`) to create a balanced, responsive card layout without relying on frameworks.
  
- **Web Accessibility & NVDA Testing:** Built with semantic HTML, logical tab order, and visible keyboard focus states. **Tested the page with the NVDA screen reader** to verify how assistive technology announces landmarks, headings, and interactive links.
  
- **Font Fallbacks:** Configured safe fallback fonts (`sans-serif` / `serif`) so typography degrades gracefully if external Google Fonts fail to load.
  
- **Script Loading & DOM Execution:** Debugged sequential HTML parsing issues (`appendChild` returning `null` when scripts execute in `<head>`) and resolved them properly using the `defer` attribute so JavaScript runs only after the DOM is built.

---

### 🏗️ Project Structure
```text
├── assets/         # Profile image & static media
├── index.html      # Semantic HTML markup
├── socials.css     # Flexbox layout, typography & focus styles
├── index.js        # Dynamic DOM rendering & link interactions
└── readme.md       # Project documentation
```

---

### 🛠️ Built With
- **HTML5** (Semantic elements & ARIA best practices)
- **CSS3** (Flexbox, responsive alignment, focus indicators)
- **JavaScript (ES6+)** (DOM manipulation)
- **Testing:** NVDA Screen Reader & Keyboard Navigation

---

### 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Open the project folder and launch `index.html` in your browser (or use **Live Server** in VS Code).



