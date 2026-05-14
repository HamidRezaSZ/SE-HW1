# Software Engineering Lab - Static Frontend + Git Workflow

## Project Overview
This repository contains a static frontend project implemented with pure HTML/CSS/JS and deployed automatically to GitHub Pages using GitHub Actions.

## Run Locally
Because this project is static, you can run it with any simple local server:

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node
npx serve .
```

Then open `http://localhost:8080`.

## Team Collaboration Plan (2 Teammates, Equal Share)
Suggested teammate aliases:
- Teammate A
- Teammate B

Equal contribution target:
- 20 meaningful commits minimum
- 10 commits by Teammate A
- 10 commits by Teammate B

To verify contribution ratio:

```bash
git shortlog -sn --all
```

## Branching Strategy
At least three meaningful branches are used:
- `main`: protected release branch, only merge via Pull Request
- `dev`: integration branch for ongoing work
- `feature/ui-foundation`: initial static UI and layout
- `feature/content-interactions`: content blocks and JS interactions
- `hotfix/mobile-nav`: focused bug fix branch

You can keep exactly three branches (`main`, `dev`, one `feature/*`) if desired, but this plan provides clearer workflow evidence.

## Required Process Checklist
- [x] Static frontend implementation
- [x] `.gitignore` configured
- [x] GitHub Actions workflow for Pages deployment
- [ ] At least 20 meaningful commits
- [ ] At least 3 meaningful branches
- [ ] Resolve at least 2 merge conflicts
- [ ] Protect `main` branch in GitHub settings
- [ ] Merge branches through Pull Requests only
- [ ] Final README report completion

## Suggested 20-Commit Timeline (10 + 10)
Use this as a template. Replace names with your actual teammate identities.

1. A: Initialize repository with README and `.gitignore`
2. B: Add base HTML skeleton
3. A: Add initial typography and color system in CSS
4. B: Add responsive header and navigation section
5. A: Add hero section content and CTA area
6. B: Add feature cards layout
7. A: Add timeline section markup
8. B: Add task checklist form and list container
9. A: Add initial JS rendering for milestones
10. B: Add form submit logic and validation
11. A: Improve accessibility attributes and semantic tags
12. B: Add mobile breakpoint refinements
13. A: Add first intentional conflict change on shared heading text
14. B: Add conflicting change on same heading text
15. A: Resolve conflict #1 and merge with clear commit message
16. B: Add GitHub Actions workflow for Pages deploy
17. A: Add second intentional conflict on button label/style
18. B: Add conflicting button label/style in another branch
19. A: Resolve conflict #2 and merge via PR
20. B: Final README completion with report + Q&A answers

## Creating Two Intentional Conflicts
### Conflict #1 (text conflict)
- Branch X edits the same line in `index.html` (e.g., hero title)
- Branch Y edits that exact same line differently
- Merge one branch first, then merge the second and resolve conflict manually

### Conflict #2 (style conflict)
- Branch X edits the same CSS property in `styles.css` (e.g., button background)
- Branch Y edits that exact property differently
- Merge and resolve conflict, then commit resolution

## GitHub Main Branch Protection
In GitHub:
1. Go to Settings -> Branches -> Add branch protection rule
2. Branch name pattern: `main`
3. Enable `Require a pull request before merging`
4. Optionally enable:
   - Require approvals
   - Require status checks to pass
   - Restrict who can push to main

## Pull Request and Merge Flow
1. Create branch from `dev` or `main`.
2. Implement small coherent changes.
3. Push branch and open PR.
4. Review changes with teammate.
5. Resolve conflicts if any.
6. Merge PR (no direct push to `main`).

## CI/CD Deployment (GitHub Pages)
Workflow file: `.github/workflows/deploy-pages.yml`

After first push to `main`:
1. Go to Settings -> Pages
2. Ensure source is set to GitHub Actions
3. Wait for workflow success
4. Your site URL will look like:
   - `https://<username>.github.io/<repository-name>/`

Replace the line below with your real URL after deployment:
- GitHub Pages URL: `https://<username>.github.io/<repository-name>/`

---

## Questions and Answers

### 1) What is the `.git` directory? What does it store? How is it created?
`.git` is the hidden metadata directory of a Git repository. It stores:
- commit objects and trees
- refs (branches/tags)
- HEAD pointer
- index (staging area metadata)
- configuration and hooks

It is created with:

```bash
git init
```

(or cloned from remote via `git clone`, which also creates `.git`.)

### 2) What does atomic mean in atomic commit and atomic pull request?
Atomic means each change unit is self-contained, coherent, and focused on one purpose.
- Atomic commit: one logical change per commit (easy to review/revert)
- Atomic PR: one clear feature/fix per PR (clean discussion and safer merge)

### 3) Difference between fetch, pull, merge, rebase, cherry-pick
- `git fetch`: downloads remote updates, does not integrate into current branch.
- `git pull`: usually equals fetch + merge (or fetch + rebase if configured).
- `git merge`: combines histories by creating a merge commit (unless fast-forward).
- `git rebase`: replays commits onto a new base for linear history.
- `git cherry-pick`: applies one specific commit from another branch onto current branch.

### 4) Difference between reset, revert, restore, switch, checkout
- `git reset`: moves HEAD/branch pointer; can unstage or rewrite local history.
- `git revert`: creates a new commit that reverses a previous commit safely.
- `git restore`: restores file content from index/commit to working tree.
- `git switch`: changes branches (modern, safer alternative for branch switching).
- `git checkout`: older multi-purpose command for branch switch and file restore.

### 5) What is stage/index? What does stash do?
- Stage/index is the intermediate area between working directory and commit.
- You add selected changes to stage (`git add`) before committing.
- `git stash` temporarily saves uncommitted changes and cleans working directory so you can switch context quickly.

### 6) What is snapshot? Relation to commit?
A snapshot is Git's saved state of tracked files at a point in time. A commit is a named, timestamped snapshot plus metadata (author, message, parent links). Git commits are snapshots, not line-by-line diffs.

### 7) Difference between local repository and remote repository
- Local repository: your machine copy, full history, private workspace for development.
- Remote repository: shared server copy (GitHub/GitLab) used for collaboration, backup, PR workflow, and CI/CD triggers.

---

## Final Report Section (Fill Before Submission)
- Team members:
  - Member 1: <name>
  - Member 2: <name>
- Number of commits by Member 1:
- Number of commits by Member 2:
- Branches used:
- Conflict #1 description and resolution summary:
- Conflict #2 description and resolution summary:
- PR links:
- Protected branch screenshot evidence:
- GitHub Actions successful run link:
- GitHub Pages URL:
- Video recording link or attachment reference:
