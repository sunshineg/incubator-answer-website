---
date: 2026-05-29
title: "Apache Answer 2.0.1: Semantic Search, Stability, and Safer Upgrades"
authors: [shuai]
category: Release
featured: true
image: 2026-05-29-cover@4x.png
description: "Apache Answer 2.0.1 adds semantic search for AI chat, introduces vector search support, improves local plugin development, and fixes a range of upgrade, security, and moderation issues."
---

We're pleased to announce **Apache Answer 2.0.1**, a focused patch release that builds on 2.0.0 with better AI retrieval, smoother plugin development, and a solid round of fixes across uploads, moderation, security, and UI details.

This is a small release, but it improves both day-to-day usage and the reliability of newer 2.0 workflows.

---

## ✨ Highlights

### Smarter AI Retrieval

- **Semantic search in AI chat** ([#1510](https://github.com/apache/answer/pull/1510)) by [@hgaol](https://github.com/hgaol)  
  AI chat can now use semantic search and embedding capabilities to retrieve more relevant community content.

- **Vector search plugin and sync service** by [@hgaol](https://github.com/hgaol)  
  This release adds the foundation for vector-based retrieval, including plugin support and sync services for question and answer embeddings.

### Better Plugin Development

- **Improved local plugin path resolution** ([#1520](https://github.com/apache/answer/pull/1520)) by [@hgaol](https://github.com/hgaol)  
  Local plugin development is now more predictable, especially when resolving local paths and handling module replacement.

### Fixes That Matter in Production

- **Attachment uploads fixed after upgrading to 2.0.0** ([#1527](https://github.com/apache/answer/pull/1527)) by [@robinv8](https://github.com/robinv8)
- **Helm install port aligned with service port** ([#1522](https://github.com/apache/answer/pull/1522)) by [@Herrtian](https://github.com/Herrtian)
- **Avatar field updated to support long URLs** ([#1499](https://github.com/apache/answer/pull/1499)) by [@maishivamhoo123](https://github.com/maishivamhoo123)
- **Better dark mode styling for user bubbles** ([#1505](https://github.com/apache/answer/pull/1505)) by [@MakiWinster72](https://github.com/MakiWinster72)

---

## 🔒 Reliability and Security Improvements

Alongside the release note items, the code changes between **v2.0.0** and **v2.0.1** also tighten several important areas:

- AI chat content rendering is handled more safely and correctly.
- Admin moderator visibility checks were improved for timeline objects, answers, and comments.
- API key scope validation was strengthened to improve authorization safety.
- Comment and object ID validation was normalized.
- Image decoding checks were improved for uploaded JPEG, PNG, and GIF files.
- Dynamic email template content now escapes HTML characters correctly.

These changes make 2.0.1 a recommended upgrade for teams already running 2.0.0.

---

## 🙌 Thanks to Our Contributors

Thank you to everyone who contributed code, fixes, and review to this release:

[@Herrtian](https://github.com/Herrtian), [@hgaol](https://github.com/hgaol), [@kumfo](https://github.com/kumfo), [@LinkinStars](https://github.com/LinkinStars), [@maishivamhoo123](https://github.com/maishivamhoo123), [@MakiWinster72](https://github.com/MakiWinster72), and [@robinv8](https://github.com/robinv8).

We appreciate your help in making Apache Answer more capable and more reliable with every release.
