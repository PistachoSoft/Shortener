PistachoShortener
=========


# GitHelp
---------
| What to do | Command | Example |
| ------------- | ----------- | ------------- |
Select/checkout out a branch | `git checkout branchname` | `git checkout develop`
Add files to commit | `git add [ -A | pathtofile ]` | `git add src/main/java/HerpDerp.java`
Commit changes | `git commit -m "Message"` | `git commit -m "Fixed various bugs @FooBar.java`
Remove cached files | `git rm -r --cached [ pathtofile ]` | `git rm -r --cached *`
Download from repository | `git pull origin branchname` | `git pull origin master`
Upload local to repository | `git push origin branchname` | `git push origin develop`


# Repository structure

_*master* branch_

  - In this branch there will be **functional releases**

_*develop* branch_

  - Every change that is committed and pending for test will go here
