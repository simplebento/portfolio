# Images Folder Structure

This folder contains all image assets for the Ricky Lalli portfolio website.

## 📁 Folder Structure

```
images/
├── hero/          # Hero section images
├── profile/       # Profile and about section images
├── projects/      # Project showcase images
└── README.md      # This file
```

## 🖼️ Image Guidelines

### **Hero Images** (`hero/`)
- **Size**: 400x400px (square)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Main hero section visual
- **Naming**: `hero-main.jpg`, `hero-background.png`

### **Profile Images** (`profile/`)
- **Size**: 200x200px (square)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Profile photo for about section
- **Naming**: `profile-photo.jpg`, `rickylalli-profile.png`

### **Project Images** (`projects/`)
- **Size**: 400x200px (2:1 ratio)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Project thumbnails and screenshots
- **Naming**: `project-1.jpg`, `ecommerce-app.png`, `healthcare-dashboard.jpg`

## 📝 Usage in HTML

### Hero Section
```html
<img src="images/hero/hero-main.jpg" alt="Design Work" class="hero-img">
```

### Profile Section
```html
<img src="images/profile/rickylalli-profile.jpg" alt="Ricky Lalli" class="profile-img">
```

### Project Cards
```html
<img src="images/projects/ecommerce-app.jpg" alt="E-commerce Mobile App" class="project-img">
```

## 🎨 Image Optimization

- **Compress images** before adding to maintain fast loading
- **Use WebP format** when possible for better compression
- **Keep file sizes** under 200KB for optimal performance
- **Use descriptive alt text** for accessibility

## 📱 Responsive Images

Consider adding multiple sizes for responsive design:
- `project-1-small.jpg` (200x100px)
- `project-1-medium.jpg` (400x200px)
- `project-1-large.jpg` (800x400px)

## 🔄 Adding New Images

1. Place images in the appropriate folder
2. Update HTML references
3. Test on different screen sizes
4. Commit and push changes

---

**Note**: Replace placeholder images with actual project screenshots and professional photos for the live portfolio. 