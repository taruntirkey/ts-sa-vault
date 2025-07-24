### In PowerShell

**Verify SSH Agent Installation**

```
ssh -V
```

**Check if SSH Agent Running Status**

```
Get-Service ssh-agent
```

**Start SSH Agent is not Running**

```
ssh-agent
```

**Go to directory**

```
cd C:\Users\{USER}\.ssh>
```

**Generate SSH Key Pair**
`ssh-keygen -t {type-of-key} -C "{username@emaildomain.com}" -f {ssh-key-name}`

_Example:_

```
ssh-keygen -t ed -C "tarun@dev.com" -f hp_compaq_netflix_ssh
```

**Add Key to SSH Agent**
`ssh-add {ssh-key-name}`

_Example:_

```
ssh-add hp_compaq_netflix_ssh
```

**List Added Identities**

```
ssh-add -L
```

> _Make sure the identity was added._

### In GitHub

1. Login
2. Open ==Settings== from menu by clicking on profile icon (Top-Right).
3. Navigate to ==SSH and GPG keys==.
4. Add ==New SSH key==.
5. Give the ==Title== and paste the public key from `hp_compaq_netflix_ssh.pub` file.
   If in PowerShell, use the following to copy the public key.

```
Get-Content .\hp_compaq_netflix_ssh.pub | Set-Clipboard
```

**Verify SSH Setup**
Use the following command in PowerShell.

```
ssh -T git@github.com
```

### Repository

1. Create a new repository.
2. Follow the steps to push the local repository to remote.

### Troubleshooting

**Authentication Fails**
Open `.ssh/config`and add configuration the following configuration.

```
Host git@github.com
AddKeysToAgent** yes
IdentityFile** ~/.ssh/hp_compaq_netflix_ssh
IdentitiesOnly yes
```

**Unable to push changes to remote repository**
Check remote **remote url**.

```
git remote -v
```

Try setting the **remote url** using the following command, if it is different.

```
git remote set-url origin git@github.com:tarun-dev/sample-react-project.git
```

Replace ==tarun-dev== with username ==sample-react-project== with the relevant repository name.

### Check Other Git Configs

```
git config --list --show-origin --show-scope
```
