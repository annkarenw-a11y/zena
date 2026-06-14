# Contributing to ZENA AI

Thank you for your interest in contributing to ZENA AI! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Report issues professionally
- No discrimination or harassment

## How to Contribute

### 1. Fork the Repository
```bash
git clone https://github.com/annkarenw-a11y/zena.git
cd zena
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make Your Changes
- Write clear, descriptive commit messages
- Follow the code style
- Add tests for new features
- Update documentation

### 4. Commit Changes
```bash
git commit -m "feat: add amazing feature"
```

### 5. Push to Branch
```bash
git push origin feature/amazing-feature
```

### 6. Open a Pull Request
- Describe your changes clearly
- Link related issues
- Request reviewers
- Respond to feedback

## Code Style

### Frontend (React/TypeScript)
```typescript
// Use functional components
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>
}

// Use hooks for state
const [state, setState] = useState(initial)

// Use TypeScript types
interface Props {
  title: string
  onClick: () => void
}
```

### Backend (Express/TypeScript)
```typescript
// Use arrow functions
const handler = async (req: Request, res: Response) => {
  // implementation
}

// Use descriptive variable names
const getUserById = async (userId: string) => {
  // implementation
}

// Add type annotations
const calculateTotal = (items: Item[]): number => {
  // implementation
}
```

## Commit Message Format

```
type: subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

**Example:**
```
feat: add medical report analysis

- Implement OCR for PDF reports
- Add AI summarization
- Include abnormal value detection

Closes #123
```

## Testing

### Run Tests
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Write Tests
```typescript
describe('getUserById', () => {
  it('should return user when found', async () => {
    const user = await getUserById('123')
    expect(user).toBeDefined()
  })

  it('should throw error when not found', async () => {
    await expect(getUserById('invalid')).rejects.toThrow()
  })
})
```

## Pull Request Process

1. **Ensure tests pass**
   ```bash
   npm test
   ```

2. **Lint your code**
   ```bash
   npm run lint
   ```

3. **Type check**
   ```bash
   npm run type-check
   ```

4. **Update documentation** if needed

5. **Self-review** before submitting

6. **Request review** from maintainers

## Reporting Issues

### Bug Report
```markdown
**Describe the bug**
Clear description of what happened

**Steps to Reproduce**
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happened

**Screenshots**
If applicable

**Environment**
- OS: Windows/Mac/Linux
- Node version: 18.x
- Browser: Chrome/Firefox
```

### Feature Request
```markdown
**Describe the feature**
Clear description of the desired feature

**Motivation**
Why is this needed?

**Proposed Solution**
How should this work?

**Additional Context**
Any other relevant information
```

## Development Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git

### Setup Steps
```bash
# 1. Clone repository
git clone https://github.com/annkarenw-a11y/zena.git
cd zena

# 2. Install dependencies
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# 3. Setup environment
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# 4. Configure environment variables
# Edit .env files with your API keys

# 5. Setup database
cd backend
npx prisma generate
npx prisma migrate dev --name init
cd ..

# 6. Start development
npm run dev
```

## Documentation

### Update README
- Add new features to features section
- Update installation instructions if needed
- Keep examples current

### Add Comments
```typescript
/**
 * Calculates the total cost including tax
 * @param items - Array of items to sum
 * @param taxRate - Tax rate as decimal (0.1 = 10%)
 * @returns Total cost including tax
 */
const calculateTotal = (items: Item[], taxRate: number): number => {
  // implementation
}
```

## Code Review Guidelines

**For Reviewers:**
- Be constructive and respectful
- Suggest improvements, don't demand changes
- Acknowledge good work
- Ask clarifying questions

**For Authors:**
- Be open to feedback
- Explain your reasoning
- Update code based on feedback
- Thank reviewers

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create GitHub release
4. Deploy to production

## Questions?

- Open an issue for questions
- Check documentation first
- Ask in discussions
- Contact maintainers

## License

By contributing, you agree your code will be under the MIT License.

---

**Thank you for contributing to ZENA AI! 🎉**
