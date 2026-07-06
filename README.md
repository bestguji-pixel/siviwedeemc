# SiwiDeeMC - Portfolio & Branding Website

A modern, responsive portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## 🎵 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern Aesthetics**: Dark theme with orange gradient accents
- **Fast Performance**: Optimized with Next.js 14 App Router
- **SEO Friendly**: Metadata configuration and semantic HTML
- **Smooth Animations**: CSS animations and transitions throughout
- **Contact Form**: Fully functional contact form
- **Social Links**: Easy integration with social media profiles

## 📁 Project Structure

```
siviwedeemc/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and animations
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio showcase page
│   ├── about/
│   │   └── page.tsx        # About & experience page
│   └── contact/
│       └── page.tsx        # Contact form page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bestguji-pixel/siviwedeemc.git
cd siviwedeemc
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```ts
colors: {
  primary: "#1a1a1a",
  secondary: "#ff6b35",
  accent: "#f7931e",
  light: "#f5f5f5",
  dark: "#0a0a0a",
}
```

### Content
- **Home Page**: Edit `app/page.tsx`
- **Portfolio Projects**: Update `app/portfolio/page.tsx`
- **About Section**: Modify `app/about/page.tsx`
- **Contact Info**: Update `app/contact/page.tsx`

### Navigation
Update links in `components/Navbar.tsx`

## 📧 Contact Form

The contact form is currently set up to log data to the console. To enable email functionality:

1. Integrate with your email service (SendGrid, Mailgun, AWS SES, etc.)
2. Update the form handler in `app/contact/page.tsx`
3. Set up environment variables for API keys

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Support

For questions or issues, feel free to reach out through the contact form on the website.

---

**Built with ❤️ by SiwiDeeMC**
