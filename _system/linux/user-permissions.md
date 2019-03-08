---
title:  "Users and permissions"
topic: "linux"
tags: linux
---

# Users
* Add new user: useradd username
* Add new user and create a home: adduser -m username
* Add new user to the system and to a group: adduser username groupname
* Change a user home: usermod -d /my/new/home -m username
* Change a user login: usermod -l newname oldname
* Change a user shell: usermod -s /bin/bash username
* Delete user: userdel -r username

# Groups
* List all groups: cat /etc/group
* List the group a user is in: groups username
* Add group: groupadd groupname; addgroup groupname
* Add user to group: gpasswd -a user group; usermod -aG groupname username

# IDs
* `sudo -u tmp_user command`
* Userid: id, echo $UID
* ruid: real user id.
* euid: effective user id. Generally = ruid.
* Same thing for groups.
* root uid: 0


# Octal notation
* Read: 4
* Write: 2
* Execute: 1

# Directories permissions
* Write bit: create/rename/delete files within the directory, modify the directory's attributes
* Read bit: list the files within the directory
* Execute bit: enter the directory, access files and directories inside
* Sticky bit: files and directories within that directory may only be deleted/renamed by their owner
