# Download Repo

```
git clone https://github.com/taruntirkey/ts-sa-vault.git
```

# Info Commands

### Current status:

```
git status
```

### List local branches:

```
git branch
```

### List remote branches:

```
git branch -r
```

### List all branches:

```
git branch -a
```

### Commit History:

```
git log
```

# Branching Commands

### Checkout a local branch:

```
git checkout <branch> OR git switch <branch>
```

### Checkout a remote branch:

```
git checkout -t <remote>/<branch>
```

### Steps to switch to Remote Branch

1. Check the status: `git status`
2. Download all branches: `git fetch`
3. Checkout remote branch: `git checkout -t <branch>`

### Sync Commands

Download all branches: `git fetch OR git fetch <remote>`

Download specific branch: `git fetch <remote> <branch>`

Merge downloaded changes: `git merge <remote>/<branch>`

Update current branch local copy: `git pull <remote>`

### Steps before pushing changes to Remote Repo

1. Verify the branch to push: `git branch`
2. Switch to the branch: `git checkout <branch>`
3. Update local copy of branch: `git fetch <remote> <branch>`
4. Rebase local copy changes: `git rebase -i <remote>/<branch>`
5. Push changes: `git push <remote> <branch>`

# Recommended Branching Strategy

```
Master
    • Version 1
        • Release 1.1 UAT
        • Release 1.1
            • Hotfix
                ▪ Fix 1
                ▪ Fix 2
                ▪ Fix 3
            • Dev
                ▪ Feature 1
                    • Task 1
                    • Task 2
                    • Task 3
                ▪ Feature 2
                ▪ Feature 3
        • Release 1.2 UAT
        • Release 1.2
        • Release 1.3 UAT
        • Release 1.3
    • Version 2
    • Version 3
```
