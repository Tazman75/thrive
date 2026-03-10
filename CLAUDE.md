# Thrive Family Counseling

Standalone website for Thrive Family Counseling practice.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Repo Structure

```
src/              React components, pages, styles, hooks
public/           Static assets (images, fonts, favicons)
```

## Tech Stack

- React 19 + Vite
- TypeScript
- Tailwind CSS (or CSS Modules — decide early)
- No monorepo, no Bazel — standalone project

## Development

- `npm install` — Install dependencies
- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

## Testing

- Test files live next to source code (`Component.test.tsx` alongside `Component.tsx`)
- Run tests: `npm test`

## Deployment

- TBD — static hosting (Netlify, Vercel, S3+CloudFront, or similar)

## Git Commit Conventions

- **Do NOT add** `Co-Authored-By: Claude` trailers to commits
- **NEVER force push** (`--force`, `--force-with-lease`) — always create new commits instead of amending published ones
- Write clear, descriptive commit messages following conventional commits style
- Use imperative mood in subject lines (e.g., "Add feature" not "Added feature")

## Screenshot Workflow
- After making visual changes, screenshot and review with the Read tool
- When comparing against a reference, be specific: exact px values, hex colors, spacing, alignment
