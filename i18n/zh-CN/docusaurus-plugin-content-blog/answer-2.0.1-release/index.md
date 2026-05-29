---
date: 2026-05-29
title: "Apache Answer 2.0.1：语义搜索、更稳的升级体验与一批关键修复"
authors: [shuai]
category: Release
featured: true
image: 2026-05-29-cover@4x.png
description: "Apache Answer 2.0.1 为 AI Chat 增加语义搜索能力，引入向量检索支持，改进本地插件开发体验，并修复了一批升级、权限、安全和界面问题。"
---

我们很高兴发布 **Apache Answer 2.0.1**。这是一个聚焦打磨体验的小版本更新，围绕 2.0.0 的新能力继续补强，带来了更好的 AI 检索能力、更顺畅的插件开发体验，以及一批与升级、权限、安全和界面相关的重要修复。

虽然这是一次小版本发布，但它显著提升了 2.0 工作流在实际使用中的稳定性。

---

## ✨ 本次更新亮点

### 更智能的 AI 检索

- **AI Chat 支持语义搜索** ([#1510](https://github.com/apache/answer/pull/1510))，感谢 [@hgaol](https://github.com/hgaol)  
  AI Chat 现在可以结合 embedding 与语义检索能力，更准确地召回社区内容。

- **新增向量检索插件与同步服务**，感谢 [@hgaol](https://github.com/hgaol)  
  本版本加入了向量检索相关的插件能力，以及面向问题和回答 embedding 的同步服务，为更强的 AI 检索打下基础。

### 更好的插件开发体验

- **改进本地插件路径解析与模块替换处理** ([#1520](https://github.com/apache/answer/pull/1520))，感谢 [@hgaol](https://github.com/hgaol)  
  本地插件开发过程更稳定、更可预期，尤其是在本地路径解析和模块替换场景下。

### 一批对生产环境很重要的修复

- **修复从 2.0.0 升级后附件上传失效的问题** ([#1527](https://github.com/apache/answer/pull/1527))，感谢 [@robinv8](https://github.com/robinv8)
- **修复 Helm 安装端口与 Service 端口不一致的问题** ([#1522](https://github.com/apache/answer/pull/1522))，感谢 [@Herrtian](https://github.com/Herrtian)
- **头像字段改为支持更长的 URL** ([#1499](https://github.com/apache/answer/pull/1499))，感谢 [@maishivamhoo123](https://github.com/maishivamhoo123)
- **优化深色模式下用户气泡背景色** ([#1505](https://github.com/apache/answer/pull/1505))，感谢 [@MakiWinster72](https://github.com/MakiWinster72)

---

## 🔒 稳定性与安全性增强

除了 release note 中列出的内容之外，从 **v2.0.0** 到 **v2.0.1** 的代码改动还覆盖了几项很重要的底层修正：

- AI Chat 内容渲染更安全，也更符合预期。
- 增强了管理员/版主对时间线对象、回答和评论的可见性校验。
- 强化了 API Key scope 校验，进一步提升鉴权安全性。
- 统一了评论 ID 与对象 ID 的规范化和校验逻辑。
- 加强了 JPEG、PNG、GIF 上传时的图片解码检查。
- 修复了动态邮件模板内容中的 HTML 转义问题。

如果你已经在使用 **2.0.0**，我们建议尽快升级到 **2.0.1**。

---

## 🙌 致谢贡献者

感谢所有参与本次发布的贡献者：

[@Herrtian](https://github.com/Herrtian), [@hgaol](https://github.com/hgaol), [@kumfo](https://github.com/kumfo), [@LinkinStars](https://github.com/LinkinStars), [@maishivamhoo123](https://github.com/maishivamhoo123), [@MakiWinster72](https://github.com/MakiWinster72), [@robinv8](https://github.com/robinv8)。

正是这些持续的贡献，让 Apache Answer 每个版本都更可靠、更好用。
