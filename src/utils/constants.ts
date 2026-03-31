export const NO_VIDEO_ERROR = 'No video found';
export const NO_CHANNEL_ERROR = 'No video found';
export const NO_INTERNET_ERROR = 'No internet connection';
export const WRONG_API_KEY_ERROR = 'API key is wrong';

export const NO_INTERNET_CATCHING_ERROR = 'net::ERR_INTERNET_DISCONNECTED';

// chapters: \n${videoData.chapters.map((chapter) => `    - "${chapter}"\n`).join('')}
// hashtags: \n${videoData.hashtags.map((hashtag) => `    - "#${hashtag}"\n`).join('')}

export const ROOT_FOLDER = '/';
export const DEFAULT_CHAPTER_FORMAT = ' - "{{chapter}}"\n';
export const DEFAULT_HASHTAG_FORMAT = ' - "#{{hashtag}}"\n';

/**
 * [Reason for Change: Optimized YouTube Embedding]
 * 1. Native Obsidian Player: Using the ![]() syntax allows Obsidian to render its optimized internal player.
 * 2. UI Consistency: Player controls (volume, fullscreen, etc.) are displayed more reliably compared to the iframe method.
 * 3. Fixes Playback Errors: Prevents "Video unavailable" errors often caused by CORS or iframe restrictions in certain Markdown environments.
 * 4. Note: Even with a standard /watch URL, Obsidian handles the rendering so only the video player is displayed without the full YouTube UI.
 */
export const DEFAULT_TEMPLATE = `---
tags:
  - type/youtube
aliases: 
title: "{{title}}"
channel_name: "{{channelName}}"
subscribers: {{subscribers}}
length: "{{length}}"
publish_date: "{{publishDate}}"
chapters: \n{{chapters}}
hashtags: \n{{hashtags}}
thumbnail: "![[{{thumbnail}}]]"
description: "{{description}}"
note_created: "{{noteCreated}}"
note_modifiend: "{{noteCreatedDateTime}}"
youtube_url: "{{youtubeUrl}}"
template-type: "YouTube"
template-version: "1.0"
---

![[{{thumbnail}}]]

![{{title}}](https://www.youtube.com/watch?v={{id}})


# 🌍 What It's About
- 

# 🔍 How I Discovered IT
- 

# 🧠 Thoughts
- 

## What I Liked About IT
- 

## What I Didn't Like About it
- 

# ✍️ The Video in 3 Sentences

# ✍️ My Top 3 Quotes

# 🎨 Impressions

# ☘️ How the Video Changed Me

# 📒 Summary + Notes

# 🥰 Who Would Like it ?
- 

# 📚Related Videos
-  
`;
