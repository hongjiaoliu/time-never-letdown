---
icon: edit
date: 2023-09-27
category:
  - 通用技能
tag:
  - Linux
  - Linux文件
star: true
---

# 文件 | /etc/gshadow

/etc/gshadow 文件用于存储 Linux 系统中组账户的影子信息。

## 一、/etc/gshadow 文件简介

/etc/gshadow 文件存储着与 /etc/group 类似的组信息,但是它所存储的组信息更为敏感和重要。该文件只允许根用户读取。
/etc/gshadow 文件的组织格式如下:

```bash
groupname:passwd:admins:members
```

每个组条目一共有4个字段:

1. groupname - 组名

2. passwd - 组密码,通常被禁用,所以一般为空

3. admins - 组管理员账号列表

4. members - 组内用户账号列表
   示例:/etc/gshadow 文件

   ```
   wheel::root:root,alice,bob
   sales:*:jack:jim,tony
   ```

   这个示例中定义了两个组:
   wheel组:
    组管理员是root
    组用户是root、alice、bob
   sales组:
    没有组密码
    组管理员是jack
    组用户是jim、tony

## 二、/etc/gshadow文件的常见操作

### 1. 添加组

使用 groupadd 命令可以添加新组,同时会在/etc/gshadow 中增加相应的条目。

```bash
groupadd newgroup
```

### 2. 删除组

使用 groupdel 命令可以删除一个组,相应的 /etc/gshadow 条目也会被移除。

```bash
groupdel newgroup
```

### 3. 修改组

可以使用 groupmod 命令来修改组的信息。
例如,将newgroup组的管理员修改为alice:

```bash
groupmod -A alice newgroup
```

### 4. 更改组密码

可以使用 gpasswd 命令为某个组设置密码。

```bash
# gpasswd newgroup 

Changing the password for group newgroup
New Password: 
Re-enter new password:
```


输入两次新密码后,newgroup的密码就设置好了。

### 5. 添加组管理员

可以使用 gpasswd 命令添加组管理员。

```bash
gpasswd -A bob newgroup
```

这会将bob添加为newgroup组的管理员。

### 6. 删除组管理员

可以使用 gpasswd 命令删除组管理员。

```bash
gpasswd -d alice newgroup
```

这会将alice从newgroup的管理员中删除。

### 7. 添加组用户

可以使用 gpasswd 命令添加组用户。

```bash
gpasswd -M tim newgroup
```

这会将tim添加到newgroup组中作为组用户。

### 8. 删除组用户

可以使用 gpasswd 命令删除组用户。

```bash
gpasswd -d tim newgroup 
```

这会将tim从newgroup组中删除。

## 三、/etc/gshadow文件的访问控制

/etc/gshadow文件中存储着敏感信息,只允许根用户读取。
可以通过设置文件权限进行访问控制。

```bash
chmod 400 /etc/gshadow
```

这将设置/etc/gshadow为只读,只有root可以读取文件。
也可以在/etc/pam.d/gshadow中设置适当的访问控制规则。
综上,/etc/gshadow存储Linux系统组的敏感信息,了解其用法和加强其访问控制很重要。文件权限控制和访问控制规则可以防止非授权访问。