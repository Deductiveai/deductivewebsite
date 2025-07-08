# Deductive Website 🤖

A modern, lightning-fast Hugo website for **Deductive** - an AI solutions company focused on transforming Dutch businesses with intelligent automation. Built with the Hugo Saasify theme, extensively customized with Dutch content and unique process timeline designs.

## 🌟 Live Demo

Visit the live website: **[deductive.ai](https://deductive.ai)** *(Update with actual URL)*

## 🚀 About This Project

This website showcases **6 unique process timeline designs** and serves as a complete AI company website template. Built using modern web technologies:

- **Hugo Extended**: Lightning-fast static site generator
- **Hugo Saasify Theme**: Heavily customized SaaS-focused theme
- **TailwindCSS**: Utility-first CSS framework with custom AI brand colors
- **PostCSS**: Advanced CSS processing and optimization
- **Vanilla JavaScript**: Interactive timeline animations and components

### Theme Features
- Lightning-fast performance with Hugo's static generation
- Responsive design that works on all devices
- Modern UI components and layouts
- Built-in blog functionality
- Contact forms and call-to-action sections
- Client logo carousel
- Testimonials section
- SEO-optimized structure

## ⭐ Key Features

### 🎨 6 Unique Process Timeline Designs
This project's standout feature - six completely different ways to showcase your company's process:

| Design | Style | Best For | Features |
|--------|-------|----------|----------|
| **Vertical Timeline** | Classic alternating cards | Traditional companies | Clean, familiar layout |
| **Horizontal Roadmap** | Journey with milestones | Project-focused businesses | Progress tracking, metrics |
| **Circular Process** | Dark theme with rotation | Creative/tech companies | Hover tooltips, animations |
| **Animated Cards** | Interactive progress bars | Dynamic presentations | Click-triggered animations |
| **Accordion Style** | Collapsible sections | Detailed explanations | Expandable content areas |
| **Dashboard View** | Metrics & data focus | Data-driven companies | Real-time style indicators |

### 🚀 AI-Focused Customizations
- **Dutch content** optimized for AI/tech companies
- **Custom branding** with Deductive colors (#4534DA, #08D5F9, #FFFFFF)
- **Dark header/footer** design for modern tech aesthetic
- **AI solution pages**: Chatbot, AI-Agents, Offertetool
- **Interactive demo buttons** for timeline comparisons
- **Dutch blog content** focused on AI implementation
- **Social media integration**: Discord, LinkedIn, Instagram

### 🎯 Business Features
- **Contact forms** with custom "Klantportaal" integration
- **Team section** with co-founder profiles
- **Testimonials** from AI implementation clients
- **Careers page** with "not hiring" message customization
- **SEO optimization** for Dutch AI market

## Prerequisites

### macOS
- **Homebrew**: Package manager for macOS
- **Git**: Version control (usually pre-installed)
- **Node.js**: JavaScript runtime for TailwindCSS

### Windows
- **Git**: Version control
- **Node.js**: JavaScript runtime for TailwindCSS
- **Hugo**: Static site generator

## Installation Guide

### macOS Setup

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Hugo Extended**:
   ```bash
   brew install hugo
   ```

3. **Install Node.js and npm**:
   ```bash
   brew install node
   ```

4. **Clone the repository**:
   ```bash
   git clone https://github.com/Deductiveai/deductivewebsite.git
   cd deductivewebsite
   ```

5. **Initialize git submodules** (for the theme):
   ```bash
   git submodule update --init --recursive
   ```

6. **Install dependencies**:
   ```bash
   npm install
   ```

7. **Run the development server**:
   ```bash
   hugo server -D
   ```

8. **Open your browser** and navigate to `http://localhost:1313`

### Windows Setup

1. **Install Git**:
   - Download from [git-scm.com](https://git-scm.com/download/win)
   - Follow the installation wizard

2. **Install Node.js**:
   - Download from [nodejs.org](https://nodejs.org/en/download/)
   - Choose the LTS version and follow the installer

3. **Install Hugo Extended**:
   - Download the latest Hugo Extended release from [GitHub releases](https://github.com/gohugoio/hugo/releases)
   - Extract the `hugo.exe` file
   - Add Hugo to your PATH environment variable

4. **Clone the repository**:
   ```cmd
   git clone https://github.com/Deductiveai/deductivewebsite.git
   cd deductivewebsite
   ```

5. **Initialize git submodules** (for the theme):
   ```cmd
   git submodule update --init --recursive
   ```

6. **Install dependencies**:
   ```cmd
   npm install
   ```

7. **Run the development server**:
   ```cmd
   hugo server -D
   ```

8. **Open your browser** and navigate to `http://localhost:1313`

## Project Structure

```
deductivewebsite/
├── assets/                 # Images and other assets
├── content/               # Markdown content files
│   ├── _index.md         # Homepage content
│   ├── contact.md        # Contact page
│   ├── blog/             # Blog posts
│   └── ...
├── layouts/              # Custom layout overrides
│   └── partials/
│       └── header.html   # Custom header layout
├── static/               # Static files (images, logos, etc.)
│   ├── logo.png         # Main logo
│   └── images/
│       └── logos/       # Client/software logos
├── themes/              # Hugo themes
│   └── hugo-saasify-theme/
├── hugo.toml           # Hugo configuration
├── package.json        # Node.js dependencies
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md           # This file
```

## Configuration

### Hugo Configuration (`hugo.toml`)

Key configuration options:
- **Site title**: "Deductive"
- **Language**: en-us (with Dutch content)
- **Theme**: hugo-saasify-theme
- **Base URL**: Update for production deployment
- **Brand colors**: Configured in params section

### TailwindCSS Configuration (`tailwind.config.js`)

Custom brand colors defined:
- **Primary**: #4534DA (purple/blue)
- **Secondary**: #08D5F9 (light blue/cyan)
- **Background**: #FFFFFF (white)

## Development Workflow

### Making Changes

1. **Content changes**: Edit markdown files in `content/` directory
2. **Styling changes**: Modify `tailwind.config.js` or CSS files
3. **Layout changes**: Edit templates in `layouts/` directory
4. **Configuration**: Update `hugo.toml` for site settings

### Building for Production

```bash
# Build static files
hugo --minify

# The built site will be in the `public/` directory
```

### Adding New Content

1. **New page**:
   ```bash
   hugo new content/page-name.md
   ```

2. **New blog post**:
   ```bash
   hugo new content/blog/post-title.md
   ```

## 🌐 Deployment Options

The site generates static files that can be deployed to any web server or CDN:

### Option 1: GitHub Pages (Recommended)
1. **Enable GitHub Pages** in repository settings
2. **Create workflow** in `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy Hugo site to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
           with:
             submodules: true
         - name: Setup Hugo
           uses: peaceiris/actions-hugo@v2
           with:
             hugo-version: 'latest'
             extended: true
         - name: Build
           run: hugo --minify
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./public
   ```
3. **Configure**: Go to repository Settings > Pages > Source: Deploy from a branch > gh-pages
4. **Access**: Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. **Connect GitHub**: Link your repository to Netlify
2. **Build settings**: 
   - Build command: `hugo --minify`
   - Publish directory: `public`
3. **Deploy**: Automatic deployments on every push to main

### Option 3: Vercel
1. **Import repository**: Connect your GitHub repository
2. **Framework preset**: Select "Hugo"
3. **Deploy**: Automatic builds and deployments

### Option 4: Traditional Hosting
1. **Build**: Run `hugo --minify`
2. **Upload**: Upload contents of `public/` directory to your web server

## 🚀 Quick GitHub Pages Setup

To quickly set up GitHub Pages hosting:

1. **Create the workflow directory**:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create the deploy workflow**:
   ```bash
   cat > .github/workflows/deploy.yml << 'EOF'
   name: Deploy Hugo site to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
           with:
             submodules: true
         - name: Setup Hugo
           uses: peaceiris/actions-hugo@v2
           with:
             hugo-version: 'latest'
             extended: true
         - name: Build
           run: hugo --minify
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./public
   EOF
   ```

3. **Commit and push**:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Save

Your site will be live at `https://yourusername.github.io/deductivewebsite` within a few minutes!

## TODO Items

- [ ] Add software logos to carousel (see [Issue #1](https://github.com/Deductiveai/deductivewebsite/issues/1))
- [ ] Update contact information with real details
- [ ] Add more Dutch translations
- [ ] Create additional content pages

## Troubleshooting

### Common Issues

1. **Hugo command not found**:
   - Ensure Hugo is installed and in your PATH
   - On macOS, try `brew install hugo`

2. **CSS not loading**:
   - Run `npm install` to install TailwindCSS dependencies
   - Restart the Hugo server after changes

3. **Submodule theme not found**:
   - Run `git submodule update --init --recursive`

4. **Build errors**:
   - Check Hugo version (requires Extended version)
   - Ensure all dependencies are installed

### Getting Help

- Check the [Hugo documentation](https://gohugo.io/documentation/)
- Review the [Hugo Saasify theme documentation](https://github.com/chaoming/hugo-saasify-theme)
- Create an issue in the repository for project-specific problems

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `hugo server -D`
5. Submit a pull request

## License

This project uses the Hugo Saasify theme, which is licensed under the MIT license. See the theme's repository for details.
