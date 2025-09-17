# Development Checklist 🚀

## Before Every Commit ✅

### Automatic Checks (via Husky pre-commit hook)
- [ ] ESLint passes (`npm run lint`)
- [ ] TypeScript compiles (`npm run build`)

### Manual Checks
- [ ] Test in browser (no console errors)
- [ ] Responsive design works on mobile/tablet
- [ ] All forms work correctly
- [ ] Database operations function properly

## Common Issues to Watch For 🔍

### 1. **Unescaped Entities in JSX**
❌ **Wrong:**
```jsx
<p>We'd love to help you!</p>
<p>"Great service"</p>
```

✅ **Correct:**
```jsx
<p>We&apos;d love to help you!</p>
<p>&ldquo;Great service&rdquo;</p>
```

### 2. **Navigation Links**
❌ **Wrong:**
```jsx
<a href="/about">About</a>
```

✅ **Correct:**
```jsx
import Link from 'next/link';
<Link href="/about">About</Link>
```

### 3. **Images**
❌ **Wrong:**
```jsx
<img src="/logo.png" alt="Logo" />
```

✅ **Correct:**
```jsx
import Image from 'next/image';
<Image src="/logo.png" alt="Logo" width={100} height={50} />
```

### 4. **Unused Variables**
❌ **Wrong:**
```jsx
const [data, setData] = useState();
const unusedVar = "something";
```

✅ **Correct:**
```jsx
const [data, setData] = useState();
// Remove unused variables or use them
```

## Quick Fix Commands 🛠️

```bash
# Fix auto-fixable ESLint issues
npm run lint:fix

# Check types without building
npm run type-check

# Full build test
npm run build

# Install and setup Husky (one time)
npm install
npm run prepare
```

## IDE Setup Recommendations 💻

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- TypeScript Hero
- Auto Rename Tag

### VS Code Settings
Add to `.vscode/settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "typescript.preferences.includePackageJsonAutoImports": "auto"
}
```
