# 🚀 Jay Harish P - Full Stack Developer Portfolio

Modern, responsive single-page portfolio website built with **React 19 + Vite + Tailwind CSS**.

[![Portfolio Preview](https://via.placeholder.com/1200x600/3b82f6/ffffff?text=Jay+Harish+P+Portfolio)](http://localhost:5173/)

## ✨ Features

- **Single Page Application** - Smooth scrolling navigation
- **Fully Responsive** - Mobile-first design (Tailwind CSS)
- **Dark Mode** - System preference support
- **Modern UI** - Glassmorphism, gradients, hover animations, cards
- **Sections**: Hero, About, Skills, Certifications, Projects, Contact
- **Performance** - Vite fast HMR, optimized Tailwind

## 📱 Live Demo

```
http://localhost:5173/
```

- **Desktop**: Full navbar, large hero
- **Mobile**: Hamburger menu, touch-friendly

## 🛠 Tech Stack

| Frontend | Styling      | Build  | Other            |
| -------- | ------------ | ------ | ---------------- |
| React 19 | Tailwind CSS | Vite 8 | React Router DOM |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Output: `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
day5/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed responsive nav w/ smooth scroll
│   │   ├── Hero.jsx         # Animated landing section
│   │   ├── About.jsx        # Bio + stats
│   │   ├── Skills.jsx       # Grouped skills grid
│   │   ├── Certifications.jsx # 5 cert cards
│   │   ├── Projects.jsx     # 3 projects w/ Student Dashboard details
│   │   └── Contact.jsx      # Social links
│   ├── App.jsx              # Main layout
│   └── index.css            # Tailwind + globals
├── tailwind.config.js       # Custom theme/dark mode
├── postcss.config.js        # Tailwind PostCSS
├── vite.config.js
└── package.json
```

## 🎨 Design Highlights

- **Navbar**: Fixed, backdrop-blur, mobile hamburger
- **Hero**: Oversized gradient text, CTA button w/ scale hover
- **Cards**: 3D hover transforms, gradient overlays
- **Skills**: Categorized, skill badges w/ icons
- **Projects**: Content from `docs/student_dashboard.md`, tech chips
- **Animations**: Tailwind transitions, hover effects
- **Accessibility**: Semantic HTML, keyboard nav, focus states

## 📱 Responsive Breakpoints

| Screen          | Features                       |
| --------------- | ------------------------------ |
| Mobile <640px   | Stacked layout, hamburger menu |
| Tablet 640px+   | 2-col grids                    |
| Desktop 1024px+ | 3-col projects, full nav       |
| Large 1280px+   | Max-w-6xl container            |

## 🌙 Dark Mode

System preference (`prefers-color-scheme: dark`) + Tailwind `dark:` classes.

## 🔧 Customization

1. **Contact Links**: Update `Contact.jsx`
2. **Project Links**: Add GitHub URLs in `Projects.jsx`
3. **Profile Image**: Replace `/src/assets/hero.png`
4. **Colors**: Edit `tailwind.config.js` theme.extend.colors

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

Drag `dist/` to [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages

```bash
npm run build
# Deploy dist/ to gh-pages branch
```

## 📊 Scripts

```bash
npm run dev      # Development server (5173)
npm run build    # Production build (dist/)
npm run preview  # Local production preview
npm run lint     # ESLint
```

## 🤝 Contributing

1. Fork repo
2. `npm install`
3. Create feature branch
4. `npm run dev`
5. PR to `main`

## 📄 License

MIT License - Feel free to use/modify!

## 🙏 Acknowledgments

- **Tailwind CSS** - Rapid styling
- **Vite** - Lightning-fast dev server
- **React 19** - Component library
- **Student Dashboard** docs for project content

---

**Made with ❤️ by Jay Harish P**  
[Portfolio](http://localhost:5173/) | [GitHub](https://github.com/jayharishp) | [LinkedIn](https://linkedin.com/in/jayharishp)

⭐ **Star this repo if you found it useful!**
