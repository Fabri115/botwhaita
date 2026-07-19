<div align="center">

![Wave](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24&height=150&section=header&text=based&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35)
<img src="https://i.gifer.com/YdBN.gif" width="200">

![Retro](https://readme-typing-svg.herokuapp.com?font=VT323&size=24&duration=2500&pause=10000&color=8A2BE2&center=true&vCenter=true&width=250&height=25&lines=$+by+Sam+aka+Vare)
<br>
<p align="center">
  <img src="https://img.shields.io/npm/v/@realvare/baileys?style=for-the-badge&color=8a2be2&labelColor=2d1b69" alt="NPM Version">
  <img src="https://img.shields.io/npm/dm/@realvare/baileys?style=for-the-badge&color=8a2be2&labelColor=2d1b69" alt="NPM Downloads">
  <img src="https://img.shields.io/badge/License-MIT-8a2be2.svg?style=for-the-badge&labelColor=2d1b69" alt="MIT License">
  <img src="https://img.shields.io/github/stars/realvare/based?style=for-the-badge&color=8a2be2&labelColor=2d1b69" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/realvare/based?style=for-the-badge&color=8a2be2&labelColor=2d1b69" alt="GitHub Forks">
</p>
<p align="center">
  <a href="#-main-features"><img src="https://img.shields.io/badge/_Features-8a2be2?style=flat-square&logo=github&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="#-installation"><img src="https://img.shields.io/badge/_Installation-8a2be2?style=flat-square&logo=npm&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="#-quick-guide"><img src="https://img.shields.io/badge/_Quick_Guide-8a2be2?style=flat-square&logo=rocket&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="#-api-documentation"><img src="https://img.shields.io/badge/_API_Documentation-8a2be2?style=flat-square&logo=book&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="#-support-and-community"><img src="https://img.shields.io/badge/_Support-8a2be2?style=flat-square&logo=teamspeak&logoColor=white"/></a>
</p>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&duration=4000&pause=2500&color=8A2BE2&center=true&vCenter=true&width=800&lines=💜+A+modern%2C+powerful+and+fast+WhatsApp+Web+API+library;🔄+With+support+for+LID%2FJID+and+multi-device;">

----

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [🚀 Performance Optimization Guide](#-performance-optimization-guide)
  - [🎯 Performance Optimizations](#-performance-optimizations)
  - [🔧 JID/LID Validation and Normalization](#-jidlid-validation-and-normalization)
  - [📈 Key Benefits](#-key-benefits)
  - [🎛️ Usage Example](#️-usage-example)
  - [💡 Best Practices](#-best-practices)
- [✨ Main Features](#-main-features)
- [🚀 Quick Guide](#-quick-guide)
  - [Basic Example - Starting Bot](#basic-example---starting-bot)
  - [Anti-Ban Example - Recommended Configuration to Avoid Bans](#anti-ban-example---recommended-configuration-to-avoid-bans)
- [📊 Advanced Cache Management](#-advanced-cache-management)
  - [Advanced Cache Configuration](#advanced-cache-configuration)
- [🔍 Troubleshooting](#-troubleshooting)
  - [Connection Issues](#connection-issues)
  - [Memory Management](#memory-management)
  - [Advanced Logging](#advanced-logging)
  - [Basic Message Management with LID/JID](#basic-message-management-with-lidjid)
- [📚 API Documentation](#-api-documentation)
  - [🏗️ Fundamental Methods](#️-fundamental-methods)
  - [🎯 Main Events](#-main-events)
- [🎪 Messages and Interactive Features](#-messages-and-interactive-features)
  - [Basic Messages](#basic-messages)
    - [Text with Formatting](#text-with-formatting)
    - [Basic Media](#basic-media)
    - [Advanced Media](#advanced-media)
      - [Sticker Packs](#sticker-packs)
      - [Stickers on Status (2025 Feature)](#stickers-on-status-2025-feature)
    - [Interactive Messages](#interactive-messages)
      - [Messages with Simple Buttons](#messages-with-simple-buttons)
      - [Messages with Buttons and Image](#messages-with-buttons-and-image)
      - [List Messages](#list-messages)
      - [Collection Messages (Catalog)](#collection-messages-catalog)
      - [Invoice Messages](#invoice-messages)
      - [Carousel Messages with Card Types](#carousel-messages-with-card-types)
      - [Interactive Messages with Audio Footer](#interactive-messages-with-audio-footer)
      - [Interactive Messages with Product Header](#interactive-messages-with-product-header)
      - [Interactive Response Messages](#interactive-response-messages)
      - [Poll Messages](#poll-messages)
      - [Poll Result Snapshot](#poll-result-snapshot)
      - [Poll Update](#poll-update)
      - [Comment Messages](#comment-messages)
      - [Question Messages](#question-messages)
      - [Question Response Messages](#question-response-messages)
      - [Status Question Answer Messages](#status-question-answer-messages)
      - [Status Quoted Messages](#status-quoted-messages)
      - [Status Sticker Interaction Messages](#status-sticker-interaction-messages)
      - [AI Rich Response Messages](#ai-rich-response-messages)
    - [Other Messages](#other-messages)
      - [Business Call Messages (BCall)](#business-call-messages-bcall)
      - [Call Log Messages](#call-log-messages)
      - [Event Response Messages](#event-response-messages)
      - [Status Mention Messages](#status-mention-messages)
      - [Group Status Messages](#group-status-messages)
      - [Bot Task Messages](#bot-task-messages)
      - [Limit Sharing Messages](#limit-sharing-messages)
      - [Status Add Yours Messages](#status-add-yours-messages)
      - [Bot Forwarded Messages](#bot-forwarded-messages)
      - [Event Cover Image Messages](#event-cover-image-messages)
      - [Poll Creation Message V4](#poll-creation-message-v4)
      - [Poll Creation Message V5](#poll-creation-message-v5)
      - [Poll Result Snapshot Message V3](#poll-result-snapshot-message-v3)
      - [Encrypted Comment Messages](#encrypted-comment-messages)
      - [Encrypted Event Response Messages](#encrypted-event-response-messages)
      - [Message History Bundle](#message-history-bundle)
      - [Message History Notice](#message-history-notice)
      - [Newsletter Follower Invite](#newsletter-follower-invite)
      - [Placeholder Messages](#placeholder-messages)
      - [Secret Encrypted Messages](#secret-encrypted-messages)
      - [Status Notification Messages](#status-notification-messages)
      - [Sticker Sync RMR Messages](#sticker-sync-rmr-messages)
      - [Request Payment](#request-payment)
      - [Send Payment](#send-payment)
      - [Decline Payment Request](#decline-payment-request)
      - [Cancel Payment Request](#cancel-payment-request)
      - [Scheduled Call Creation](#scheduled-call-creation)
      - [Scheduled Call Edit](#scheduled-call-edit)
      - [Pin/Unpin Messages](#pinunpin-messages)
  - [Response Management](#response-management)
  - [🎭 Group Features](#-group-features)
    - [Basic Group Management](#basic-group-management)
    - [Participant Management](#participant-management)
    - [Group Settings](#group-settings)
    - [Advanced Group Messages](#advanced-group-messages)
    - [Ghost Messages](#ghost-messages)
- [🔧 Fix LID/JID in Your Own Main and Handler](#-fix-lidjid-in-your-own-main-and-handler)
  - [Best Practices for LID/JID](#best-practices-for-lidjid)
  - [Integrated Example](#integrated-example)
  - [🚀 Smart LID/JID Cache](#-smart-lidjid-cache)
  - [🛡️ Advanced JID Validation](#️-advanced-jid-validation)
  - [📊 Conditional Logging](#-conditional-logging)
  - [🔧 Performance Configuration](#-performance-configuration)
- [🧩 Events: LID and JID Management](#-events-lid-and-jid-management)
- [⚙️ Advanced Configuration](#️-advanced-configuration)
  - [🔧 Complete Options for makeWASocket](#-complete-options-for-makewasocket)
  - [🛡️ Security and Encryption](#️-security-and-encryption)
- [🌐 Support and Community](#-support-and-community)
  - [📞 Contacts and Resources](#-contacts-and-resources)
- [🙏 Acknowledgments](#-acknowledgments)
- [⚠️ Disclaimer \& License](#️-disclaimer--license)
  - [📋 Legal Note](#-legal-note)
  - [📜 MIT License](#-mit-license)

----

## 🚀 Performance Optimization Guide

This section explains the built-in performance optimizations and JID/LID validation improvements.

### 🎯 Performance Optimizations

The library now includes comprehensive performance optimizations with these default settings:

```javascript
// Performance settings
{
  enableCache: true,              // Enable caching for faster data retrieval
  batchSize: 50,                  // Process messages in batches of 50
  maxRetries: 5,                  // Maximum reconnection attempts
  retryDelay: 5000,               // Initial retry delay (5 seconds)
  retryBackoffMultiplier: 1.5,    // Exponential backoff multiplier
  maxRetryDelay: 60000,           // Maximum retry delay (60 seconds)
  syncFullHistory: false,         // Disable full history sync to prevent slowdowns
  enableLidLogging: true,        // Enable LID logging for debugging
  logLevel: 'debug'               // Detailed logging for troubleshooting
}

// Cache settings
{
  lidCache: {
    ttl: 300000,                  // 5 minutes TTL
    maxSize: 10000,               // Maximum 10,000 entries
    cleanupInterval: 120000      // Cleanup every 2 minutes
  },
  jidCache: {
    ttl: 300000,                  // 5 minutes TTL
    maxSize: 10000,               // Maximum 10,000 entries
    cleanupInterval: 120000      // Cleanup every 2 minutes
  },
  lidToJidCache: {
    ttl: 300000,                  // 5 minutes TTL
    maxSize: 5000,                // Maximum 5,000 entries
    cleanupInterval: 180000      // Cleanup every 3 minutes
  },
  groupMetadataCache: {
    ttl: 600000,                  // 10 minutes TTL
    maxSize: 2000,                // Maximum 2,000 entries
    cleanupInterval: 300000      // Cleanup every 5 minutes
  }
}
```

### 🔧 JID/LID Validation and Normalization

The library includes comprehensive JID/LID validation utilities:

```javascript
const { validateJid, getSenderLid, toJid, normalizeJid, isValidJid } = require('@realvare/baileys');

// Validate JID with detailed error information
const result = validateJid('1234567890@s.whatsapp.net');
console.log(result.isValid, result.error);

// Extract sender information from messages
const sender = getSenderLid(message);
console.log(sender.jid, sender.lid, sender.user, sender.isValid, sender.timestamp, sender.error);

// Convert LID to JID format
const jid = toJid('1234567890@lid'); // Returns '1234567890@s.whatsapp.net'

// Normalize JID format
const normalized = normalizeJid('1234567890@lid'); // Returns '1234567890@s.whatsapp.net'

// Simple validation check
const isValid = isValidJid('1234567890@s.whatsapp.net');
```

**Events behavior**: all emitted events (e.g. `messages.upsert`, `messages.update`, `group-participants.update`) will expose standard JIDs (`@s.whatsapp.net`, `@g.us`, etc.) in `msg.key.remoteJid` and `msg.key.participant` whenever possible. When WhatsApp provides LIDs, the original values are preserved in `msg.key.remoteLid` and `msg.key.participantLid`.

### 📈 Key Benefits

**Performance Improvements:**
- ✅ **Reduced Latency**: Caching reduces repeated API calls by 80-90%
- ✅ **Better Throughput**: Batch processing handles message bursts efficiently
- ✅ **Improved Stability**: Exponential backoff prevents rapid reconnection attempts
- ✅ **Lower Ban Risk**: Disabled full history sync and reduced online presence marking

**Error Reduction:**
- ✅ **JID/LID Validation**: Prevents undefined errors from invalid IDs
- ✅ **Automatic Conversion**: Handles WhatsApp's LID format changes seamlessly
- ✅ **Detailed Logging**: Helps identify and debug ID-related issues
- ✅ **Graceful Fallback**: Maintains functionality even with invalid IDs

### 🎛️ Usage Example

```javascript
const { makeWASocket, useMultiFileAuthState } = require('@realvare/baileys');

// Set up authentication
const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

// Create socket
const sock = makeWASocket({
  auth: state,
  printQRInTerminal: true
});
```

### 💡 Best Practices

1. **Always validate JIDs** before processing messages
2. **Enable caching** for production environments
3. **Disable syncFullHistory** to prevent performance issues
4. **Use exponential backoff** for reconnection attempts
5. **Monitor cache metrics** to optimize TTL and size settings
6. **Implement proper error handling** for invalid JIDs/LIDs

## ✨ Main Features

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=18&duration=2500&pause=2500&color=8A2BE2&center=true&vCenter=true&width=600&lines=🚀+Powerful+and+Intuitive;🔧+Based+on+Baileys+with+Improvements" alt="Features">
</p>

<br>

This library, based on Baileys with specific improvements, offers an intuitive API to interact with WhatsApp Web. Here is a summary of the key features:

<table align="center">
  <tr>
    <td align="center" width="25%">
      <h3>🔄 Core Features</h3>
      <p>• Intelligent LID/JID mapping<br>• Multi-device support<br>• E2E Signal encryption<br>• Modern TypeScript</p>
    </td>
    <td align="center" width="25%">
      <h3>💬 Messages</h3>
      <p>• Text, media, interactive<br>• Buttons, lists, albums<br>• Polls, reactions<br>• Advanced templates</p>
    </td>
    <td align="center" width="25%">
      <h3>🛠️ Developer</h3>
      <p>• Real-time events<br>• Full TypeScript<br>• Extensive documentation<br>• Extensible APIs</p>
    </td>
    <td align="center" width="25%">
      <h3>⚡ Performance</h3>
      <p>• Intelligent reconnection<br>• Advanced TTL cache<br>• Performance monitoring</p>
    </td>
  </tr>
</table>
<p align="center">
<img src="https://64.media.tumblr.com/13bc9e3c3b332dfc008cb4b9e8571558/2a577b39b15547dc-cc/s400x600/3db051b3117b695a61ad8e0b686f2774b971d210.gifv" width="800">


## 🚀 Quick Guide

- This section includes basic examples for authentication and connection management.

### Basic Example - Starting Bot

```typescript
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@realvare/baileys';

async function startBot() {
    // 🔐 Multi-file authentication setup for persistent sessions
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    // 🌐 Socket creation with basic configuration
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: console,
        browser: ['VareBot', 'Chrome', '4.0.0'],
    });

    // Improved reconnection system
    let reconnectAttempts = 0;
    const maxRetries = 5;
    const retryDelay = 5000;
    const retryBackoffMultiplier = 1.5;
    const maxRetryDelay = 60000;

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

            if (shouldReconnect) {
                reconnectAttempts++;
                const delay = Math.min(
                    retryDelay * Math.pow(
                        retryBackoffMultiplier,
                        reconnectAttempts - 1
                    ),
                    maxRetryDelay
                );

                console.log(`🔄 Reconnection attempt ${reconnectAttempts}/${maxRetries} in ${delay}ms`);

                if (reconnectAttempts <= maxRetries) {
                    setTimeout(startBot, delay);
                } else {
                    console.log('❌ Maximum number of reconnection attempts reached');
                }
            }
        } else if (connection === 'open') {
            console.log('🟢 Connected successfully!');
            reconnectAttempts = 0;
        }
    });

    sock.ev.on('creds.update', saveCreds);
}startBot().catch(console.error);
```

### Anti-Ban Example - Recommended Configuration to Avoid Bans

```typescript
import makeWASocket, { DisconnectReason, useMultiFileAuthState, getSenderLid, validateJid } from '@realvare/baileys';

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: console,
        browser: ['YourBotName', 'Chrome', '4.0.0'], // Customize browser fingerprint
        markOnlineOnConnect: false, // Crucial: Prevents always appearing online, reduces ban risk
        syncFullHistory: false      // Avoid syncing unnecessary data that could signal activity
    });

    let reconnectAttempts = 0;
    const maxRetries = 5;
    const retryDelay = 5000;
    const retryBackoffMultiplier = 1.5;
    const maxRetryDelay = 60000;

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

            if (shouldReconnect) {
                reconnectAttempts++;
                const delay = Math.min(
                    retryDelay * Math.pow(
                        retryBackoffMultiplier,
                        reconnectAttempts - 1
                    ),
                    maxRetryDelay
                );

                console.log(`Reconnecting attempt ${reconnectAttempts}/${maxRetries} in ${delay}ms`);

                if (reconnectAttempts <= config.performance.maxRetries) {
                    setTimeout(startBot, delay);
                } else {
                    console.log('Max reconnection attempts reached');
                }
            }
        } else if (connection === 'open') {
            console.log('Connected successfully!');
            reconnectAttempts = 0;
        }
    });

    // Monitor acks through message updates to ensure proper handling
    sock.ev.on('messages.update', (updates) => {
        for (const update of updates) {
            if (update.update.status) {
                console.log(`Message ${update.key.id} status: ${update.update.status}`); // Track acks (1=sent, 2=delivered, 3=read)
                // Add custom logic if necessary, but avoid overriding defaults to prevent detection
            }
        }
    });

    // Advanced LID/JID utilities for ack stability
    sock.ev.on('messages.upsert', ({ messages }) => {
        for (const msg of messages) {
            const info = getSenderLid(msg);
            const validation = validateJid(info.jid);
            if (validation.isValid) {
                // Process and ack safely
                console.log(`Valid JID: ${info.jid}, LID: ${info.lid}`);
            } else {
                console.warn(`Invalid JID detected: ${info.jid}`);
            }
        }
    });

    sock.ev.on('creds.update', saveCreds);
}

startBot().catch(console.error);
```

## 📊 Advanced Cache Management

The library now includes an advanced cache system with automatic memory management and configurable TTL:

```typescript
import { CacheManager } from '@realvare/baileys';

// Example of using the cache
const cache = CacheManager;

// Save a value in the cache
cache.set('lidCache', 'key', 'value', 300); // TTL of 300 seconds

// Retrieve a value
const value = cache.get('lidCache', 'key');

// Get cache statistics
const stats = cache.getStats('lidCache');
console.log('Cache statistics:', stats);
```

### Advanced Cache Configuration

The cache is pre-configured with optimal settings for production use:

```typescript
import { CacheManager } from '@realvare/baileys';

// Cache is automatically configured with:
// - lidCache: 5 minutes TTL, 10000 max entries
// - jidCache: 5 minutes TTL, 10000 max entries
// - Automatic cleanup and memory management

// Monitor cache performance
const stats = CacheManager.getStats('lidCache');
console.log('Cache statistics:', stats);
```
## 🔍 Troubleshooting

### Connection Issues
- The library now implements a retry system with exponential backoff
- Automatic monitoring of connection status
- Configurable reconnection attempts

### Memory Management
- Automatic monitoring of memory usage
- Automatic cache cleanup when necessary
- Configurable TTL for each cache type

### Advanced Logging
```typescript
import { Logger } from '@realvare/baileys';

// Use the built-in Logger for conditional logging
Logger.debug('Debug info');
Logger.performance('Performance metrics');
Logger.error('Error occurred');
```

### Basic Message Management with LID/JID

```typescript
import makeWASocket, { getSenderLid, toJid, getCacheStats, validateJid, Logger } from '@realvare/baileys';

// ... (sock creation code here)

conn.ev.on('messages.upsert', ({ messages }) => {
  for (const msg of messages) {
    // 🔍 Extract sender LID with validation
    const info = getSenderLid(msg);
    
    // ✅ Validate JID before using it
    const validation = validateJid(info.jid);
    if (!validation.isValid) {
      Logger.error('Invalid JID:', validation.error);
      continue;
    }
    
    const jid = toJid(info.lid); // Normalize to JID
    
    Logger.info('💬 Message from:', jid, 'Valid:', info.isValid);
    console.log('📝 Content:', msg.message?.conversation);
    
    // Automatically reply only if valid
    if (info.isValid) {
      conn.sendMessage(jid, { text: 'Message received!' });
    }
  }
  
  // 📊 Monitor cache performance
  const stats = getCacheStats();
  Logger.performance('Cache stats:', stats);
});
```

---

## 📚 API Documentation

This section expands on the main methods, with detailed examples and parameters. All methods are typed in TypeScript for a safe development experience.

### 🏗️ Fundamental Methods

| Method | Description | Import |
|--------|-------------|--------|
| `makeWASocket(config)` | **Core**: Creates WhatsApp socket | ✅ Included |
| `useMultiFileAuthState(folder)` | **Auth**: Persistent credentials management | ✅ Included |
| `getSenderLid(msg)` | **LID**: Extracts LID from message | ✅ Included |
| `toJid(lid)` | **JID**: Converts LID → JID | ✅ Included |
| `validateJid(jid)` | **Validation**: Verifies JID | ✅ Included |
| `getCacheStats()` | **Performance**: Cache statistics | ✅ Included |
| `clearCache()` | **Cleanup**: Clears cache | ✅ Included |

**🔥 Note**: All the above methods are **ready to use** and shown in the Quick Guide. Go directly to the advanced sections for specific features!

---

### 🎯 Main Events

| Event              | Description                          | Callback Signature                  |
|---------------------|--------------------------------------|-------------------------------------|
| `connection.update` | Connection status updates      | `(update: Partial<ConnectionState>) => void` |
| `creds.update`      | Credentials update            | `() => void`                        |
| `messages.upsert`   | New messages or updates       | `({ messages: WAMessage[], type: MessageUpsertType }) => void` |
| `messages.update`   | Changes to existing messages       | `(update: WAMessageUpdate[]) => void` |
| `group-participants.update` | Group participant changes | `(update: GroupParticipantEvent) => void` |

**Event Registration Example:**
```typescript
conn.ev.on('group-participants.update', (update) => {
  console.log('Participant updated:', update);
});
```

---

## 🎪 Messages and Interactive Features

### Basic Messages

#### Text with Formatting
```typescript
// Text with formatting and mentions
await conn.sendMessage(jid, { 
    text: `*Bold* _italic_ ~strikethrough~ \`monospace\`\n@mention`, 
    mentions: ['393476686131@s.whatsapp.net'] 
});
```

#### Basic Media
```typescript
// Image
await conn.sendMessage(jid, { 
    image: { url: './media/varebot.jpg' }, // Also supports Buffer
    caption: 'zwag'
});

// Video
await conn.sendMessage(jid, { 
    video: { url: './media/oppastoppa.mp4' },
    caption: 'brrrr',
    gifPlayback: false // true to play as GIF
});

// Audio
await conn.sendMessage(jid, { 
    audio: { url: './media/audio.mp3' },
    mimetype: 'audio/mp4',
    ptt: true // true for voice message, false for normal audio
});

// Document
await conn.sendMessage(jid, { 
    document: { url: './media/doc.pdf' },
    mimetype: 'application/pdf',
    fileName: 'document.pdf'
});
```

#### Advanced Media

```typescript
// Album (Multiple images)
await conn.sendMessage(jid, {
    album: imageBuffers.map(buffer => ({ image: buffer })),
    caption: 'ts gettin real'
});
```

##### Sticker Packs

```typescript
await conn.sendMessage(jid, {
  stickerPack: {
    name: 'My Sticker Pack',
    publisher: 'My Bot',
    description: 'A cool sticker pack',       // Optional: pack description
    cover: { url: './cover.webp' },            // Optional: tray icon (uses first sticker if omitted)
    stickerPackId: 'pack-uuid-here',           // Optional: auto-generated UUID v4 if not provided
    origin: 2,                                 // Optional: 0 = FIRST_PARTY, 1 = THIRD_PARTY, 2 = USER_CREATED (default)
    caption: 'Check out my stickers!',         // Optional
    contextInfo: {},                           // Optional
    stickers: [
      {
        sticker: { url: './sticker1.webp' },   // Buffer, URL or stream
        emojis: ['🎉', '🎊'],                 // Optional: defaults to ['']
        isAnimated: false,                     // Optional: defaults to false
        isLottie: false,                       // Optional: defaults to false
        accessibilityLabel: 'Celebration',     // Optional: defaults to ''
        mimetype: 'image/webp'                 // Optional: auto-detected from upload
        // fileName is auto-generated as base64(sha256(sticker)) + '.webp'
      },
      {
        sticker: { url: './sticker2.webp' },
        emojis: ['😄'],
        isAnimated: false
      },
      {
        sticker: Buffer.from(/* webp data */),
        emojis: ['🔥']
      }
    ]
  }
});
```
##### Stickers on Status (2025 Feature)

The new interactive stickers on Status (e.g., with lyrics or questions) can be sent by sending a sticker to `status@broadcast`.

```typescript
await conn.sendMessage('status@broadcast', {
  sticker: { url: './sticker.webp' },
  caption: 'Interactive sticker on Status'
}, { statusJidList: ['user1@s.whatsapp.net', 'user2@s.whatsapp.net'] });
```

#### Interactive Messages

These messages include interactive elements like buttons, lists, polls, carousels, collections, and invoices.

##### Messages with Simple Buttons

Send quick reply buttons.

```typescript
await conn.sendMessage(jid, {
  text: 'Choose an option:',
  footer: 'Footer',
  buttons: [
    { buttonId: 'cmd1', buttonText: { displayText: 'Option 1' }, type: 1 },
    { buttonId: 'cmd2', buttonText: { displayText: 'Option 2' }, type: 1 },
  ],
});
```

##### Messages with Buttons and Image

Combine an image with buttons.

```typescript
await conn.sendMessage(jid, {
  image: { url: 'https://i.ibb.co/hJW7WwxV/varebot.jpg' },
  caption: 'Message with buttons and image',
  footer: 'vare ✧ bot',
  buttons: [
    { buttonId: 'cmd', buttonText: { displayText: 'text1' }, type: 1 },
  ],
});
```

##### List Messages

Send a list of options (only in private chats).

```typescript
await conn.sendMessage(jid, {
  text: 'This is a list!',
  footer: 'purplepurplepurple!',
  title: 'List Title',
  buttonText: 'View List',
  sections: [
    { 
      title: 'Section 1', 
      rows: [ 
        { title: 'Option 1', rowId: 'opt1',description: 'Descriptionx' }, 
        { title: 'Option 2', rowId: 'opt2', description: 'Descriptiony' } 
      ] 
    },
  ],
});
```

##### Collection Messages (Catalog)

Send a collection/catalog message to browse products.

```typescript
await conn.sendMessage(jid, {
  text: 'Browse our catalog!',
  footer: 'Shop now',
  title: 'Our Products',
  collection: {
    bizJid: 'business@s.whatsapp.net',
    id: 'catalog123',
    messageVersion: 1
  }
});
```

##### Invoice Messages

Send an invoice with attachment (image or PDF).

```typescript
await conn.sendMessage(jid, {
  invoice: {
    note: 'Invoice for your order',
    token: 'invoice_token_123',
    attachmentType: 1, // 0 = IMAGE, 1 = PDF
    attachment: { url: './invoice.pdf' } // or image
  }
});
```

##### Carousel Messages with Card Types

Send a carousel of cards with different card types.

```typescript
await conn.sendMessage(jid, {
  text: 'Check out these options!',
  footer: 'Swipe to see more',
  cards: [
    {
      title: 'Card 1',
      body: 'Description 1',
      footer: 'Footer 1',
      image: { url: './image1.jpg' },
      buttons: [
        { name: 'quick_reply', buttonParamsJson: '{"display_text":"Button 1"}' }
      ]
    },
    {
      title: 'Card 2',
      body: 'Description 2',
      video: { url: './video.mp4' }
    }
  ],
  carouselCardType: 1 // 1 = HSCROLL_CARDS (horizontal scroll), 2 = ALBUM_IMAGE - futureproof
});
```

##### Interactive Messages with Audio Footer

Send interactive messages with audio in the footer.

```typescript
await conn.sendMessage(jid, {
  text: 'Listen to this message!',
  title: 'Audio Message',
  interactiveButtons: [
    { name: 'action1', buttonParamsJson: '{"display_text":"Action"}' }
  ],
  footer: {
    text: 'Footer text',
    audio: { url: './audio.mp3' } // Audio attachment in footer
  }
});
```

##### Interactive Messages with Product Header

Send interactive messages with a product in the header.

```typescript
await conn.sendMessage(jid, {
  text: 'Check out this product!',
  title: 'Featured Product',
  interactiveButtons: [
    { name: 'buy', buttonParamsJson: '{"display_text":"Buy Now"}' }
  ],
  headerProduct: {
    productImage: { url: './product.jpg' },
    productId: 'prod123',
    title: 'Product Name',
    description: 'Product Description',
    currency: 'EUR',
    priceAmount1000: 10000
  }
});
```

##### Interactive Response Messages

Send responses to interactive messages (e.g., Native Flow responses).

```typescript
await conn.sendMessage(jid, {
  interactiveResponse: {
    body: {
      text: 'Response text',
      format: 0 // 0 = DEFAULT, 1 = EXTENSIONS_1
    },
    nativeFlowResponse: {
      name: 'flow_name',
      paramsJson: '{"key":"value"}',
      version: 1
    },
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Poll Messages

Create a poll for users to vote on.

```typescript
await conn.sendMessage(jid, { 
  poll: { 
    name: 'Favorite Anime?', 
    values: ['Aot', 'Bleach', 'Death note'], 
    selectableCount: 1 // or >1 for multi-select
  } 
});
```

##### Poll Result Snapshot

Send a snapshot of poll results.

```typescript
await conn.sendMessage(jid, {
  pollResultSnapshot: {
    name: 'Favorite Anime?',
    pollVotes: [
      { optionName: 'Aot', optionVoteCount: 10 },
      { optionName: 'Bleach', optionVoteCount: 5 },
      { optionName: 'Death note', optionVoteCount: 3 }
    ],
    pollType: 0, // 0 = POLL, 1 = QUIZ
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Poll Update

Send a poll vote update.

```typescript
await conn.sendMessage(jid, {
  pollUpdate: {
    pollCreationMessageKey: {
      remoteJid: jid,
      fromMe: false,
      id: 'pollMessageId123'
    },
    vote: {
      encPayload: Buffer.from('encrypted_vote_payload'),
      encIv: Buffer.from('encryption_iv')
    },
    senderTimestampMs: Date.now()
  }
});
```

##### Comment Messages

Comment on a specific message in a chat.

```typescript
await conn.sendMessage(jid, {
  comment: {
    message: { text: 'This is a comment!' },
    targetMessageKey: {
      remoteJid: jid,
      fromMe: false,
      id: 'messageId123'
    }
  }
});
```

##### Question Messages

Create a question message that users can respond to.

```typescript
await conn.sendMessage(jid, {
  question: {
    text: 'What is your favorite programming language?',
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Question Response Messages

Respond to a question message.

```typescript
await conn.sendMessage(jid, {
  questionResponse: {
    key: {
      remoteJid: jid,
      fromMe: false,
      id: 'questionMessageId123'
    },
    text: 'My answer is TypeScript!'
  }
});
```

##### Status Question Answer Messages

Answer a question posted on status.

```typescript
await conn.sendMessage('status@broadcast', {
  statusQuestionAnswer: {
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'statusQuestionId123'
    },
    text: 'My answer to the status question'
  }
}, {
  statusJidList: [jid]
});
```

##### Status Quoted Messages

Quote a status message (e.g., question-answer reshare).

```typescript
await conn.sendMessage('status@broadcast', {
  statusQuoted: {
    type: 1, // QUESTION_ANSWER
    text: 'This is my response',
    thumbnail: buffer, // optional thumbnail
    originalStatusId: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'originalStatusId123'
    }
  }
}, {
  statusJidList: [jid]
});
```

##### Status Sticker Interaction Messages

Interact with stickers on status (e.g., reactions).

```typescript
await conn.sendMessage('status@broadcast', {
  statusStickerInteraction: {
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'statusMessageId123'
    },
    stickerKey: 'stickerKey123',
    type: 1 // REACTION
  }
}, {
  statusJidList: [jid]
});
```

##### AI Rich Response Messages

Send AI-generated rich responses with multiple content types (tables, code, images, maps, etc.).

```typescript
await conn.sendMessage(jid, {
  ai: true,
  richResponse: {
    messageType: 1, // AI_RICH_RESPONSE_TYPE_STANDARD
    submessages: [
      {
        messageType: 2, // AI_RICH_RESPONSE_TEXT
        messageText: 'Here is the answer to your question'
      },
      {
        messageType: 4, // AI_RICH_RESPONSE_TABLE
        tableMetadata: {
          title: 'Data Table',
          rows: [
            { items: ['Header 1', 'Header 2'], isHeading: true },
            { items: ['Value 1', 'Value 2'], isHeading: false }
          ]
        }
      },
      {
        messageType: 5, // AI_RICH_RESPONSE_CODE
        codeMetadata: {
          codeLanguage: 'javascript',
          codeBlocks: [
            {
              highlightType: 0, // DEFAULT
              codeContent: 'console.log("Hello World");'
            }
          ]
        }
      }
    ],
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

Note: AI rich responses may show as "not supported" on some WhatsApp clients/accounts depending on app version and feature availability.

#### Other Messages

##### Business Call Messages (BCall)

Send business call messages with media.

```typescript
await conn.sendMessage(jid, {
  bCall: {
    sessionId: 'call_session_123',
    mediaType: 2, // 0 = UNKNOWN, 1 = AUDIO, 2 = VIDEO
    masterKey: Buffer.from('master_key_bytes'),
    caption: 'Business call'
  }
});
```

##### Call Log Messages

Send call log information.

```typescript
await conn.sendMessage(jid, {
  callLog: {
    isVideo: true,
    callOutcome: 0, // 0 = CONNECTED, 1 = MISSED, 2 = FAILED, 3 = REJECTED, etc.
    durationSecs: 120,
    callType: 0, // 0 = REGULAR, 1 = SCHEDULED_CALL, 2 = VOICE_CHAT
    participants: [
      { jid: 'user@s.whatsapp.net', callOutcome: 0 }
    ]
  }
});
```

##### Event Response Messages

Respond to an event message (e.g., RSVP for an event).

```typescript
await conn.sendMessage(jid, {
  eventResponse: {
    response: 1, // GOING = 1, NOT_GOING = 2, MAYBE = 3
    timestampMs: Date.now(),
    extraGuestCount: 0
  }
});
```

##### Status Mention Messages

Mention a status in another status.

```typescript
await conn.sendMessage('status@broadcast', {
  statusMention: {
    quotedStatus: {
      key: {
        remoteJid: 'status@broadcast',
        fromMe: false,
        id: 'statusId123'
      },
      message: {
        conversation: 'Original status message'
      }
    }
  }
}, {
  statusJidList: [jid]
});
```

##### Group Status Messages

Send a status message specific to a group.

```typescript
await conn.sendMessage(jid, {
  groupStatus: {
    message: {
      conversation: 'Group status update!'
    }
  }
});
```

##### Bot Task Messages

Send a message related to a bot task.

```typescript
await conn.sendMessage(jid, {
  botTask: {
    message: {
      conversation: 'Bot task completed.'
    }
  }
});
```

##### Limit Sharing Messages

Send a message to limit sharing.

```typescript
await conn.sendMessage(jid, {
  limitSharing: {
    message: {
      conversation: 'Sharing limited for this message.'
    }
  }
});
```

##### Status Add Yours Messages

Send a "Add Yours" status message.

```typescript
await conn.sendMessage('status@broadcast', {
  statusAddYours: {
    message: {
      conversation: 'Add yours to this trend!'
    }
  }
}, {
  statusJidList: [jid]
});
```

##### Bot Forwarded Messages

Send a message that was forwarded by a bot.

```typescript
await conn.sendMessage(jid, {
  botForwarded: {
    message: {
      conversation: 'This message was forwarded by a bot.'
    }
  }
});
```

##### Event Cover Image Messages

Send a cover image for an event.

```typescript
await conn.sendMessage(jid, {
  eventCoverImage: {
    message: {
      imageMessage: {
        url: 'https://example.com/event_cover.jpg',
        mimetype: 'image/jpeg'
      }
    }
  }
});
```

##### Poll Creation Message V4

Create a poll with additional options (version 4).

```typescript
await conn.sendMessage(jid, {
  pollV4: {
    name: 'Favorite color (V4)?',
    selectableCount: 1,
    values: ['Red', 'Green', 'Blue'],
    pollType: 0 // Default poll type
  }
});
```

##### Poll Creation Message V5

Create a poll with additional options (version 5).

```typescript
await conn.sendMessage(jid, {
  pollV5: {
    name: 'Favorite food (V5)?',
    selectableCount: 2,
    values: ['Pizza', 'Pasta', 'Sushi'],
    pollType: 1 // Quiz poll type
  }
});
```

##### Poll Result Snapshot Message V3

Send a snapshot of poll results (version 3).

```typescript
await conn.sendMessage(jid, {
  pollResultSnapshotV3: {
    pollCreationMessageKey: {
      remoteJid: jid,
      fromMe: true,
      id: 'pollMessageId123'
    },
    pollResult: {
      vote: {
        selectedOptions: [Buffer.from('Red')]
      },
      senderTimestampMs: Date.now()
    },
    contextInfo: {
      mentionedJid: [jid]
    },
    pollType: 0 // Default poll type
  }
});
```

##### Encrypted Comment Messages

Send encrypted comments on messages.

```typescript
await conn.sendMessage(jid, {
  encComment: {
    targetMessageKey: {
      remoteJid: jid,
      fromMe: false,
      id: 'messageId123'
    },
    encPayload: Buffer.from('encrypted_payload'),
    encIv: Buffer.from('encryption_iv')
  }
});
```

##### Encrypted Event Response Messages

Send encrypted event responses.

```typescript
await conn.sendMessage(jid, {
  encEventResponse: {
    eventCreationMessageKey: {
      remoteJid: jid,
      fromMe: false,
      id: 'eventMessageId123'
    },
    encPayload: Buffer.from('encrypted_payload'),
    encIv: Buffer.from('encryption_iv')
  }
});
```

##### Message History Bundle

Send a bundle of message history.

```typescript
await conn.sendMessage(jid, {
  messageHistoryBundle: {
    mimetype: 'application/octet-stream',
    media: { url: './history.bundle' },
    messageHistoryMetadata: {
      historyReceivers: ['user1@s.whatsapp.net', 'user2@s.whatsapp.net'],
      oldestMessageTimestamp: Date.now() - 86400000,
      messageCount: 100
    },
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Message History Notice

Send a notice about message history.

```typescript
await conn.sendMessage(jid, {
  messageHistoryNotice: {
    messageHistoryMetadata: {
      historyReceivers: ['user1@s.whatsapp.net'],
      oldestMessageTimestamp: Date.now() - 86400000,
      messageCount: 50
    },
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Newsletter Follower Invite

Invite followers to a newsletter.

```typescript
await conn.sendMessage(jid, {
  inviteFollower: {
    newsletterJid: '120363418582531215@newsletter',
    newsletterName: 'My Newsletter',
    thumbnail: buffer, // Optional thumbnail
    caption: 'Join our newsletter!',
    contextInfo: {
      mentionedJid: [jid]
    }
  }
});
```

##### Placeholder Messages

Send placeholder messages (e.g., to mask linked devices).

```typescript
await conn.sendMessage(jid, {
  placeholder: {
    type: 0 // MASK_LINKED_DEVICES = 0
  }
});
```

##### Secret Encrypted Messages

Send secret encrypted messages (for event or message edits).

```typescript
await conn.sendMessage(jid, {
  secretEncrypted: {
    targetMessageKey: {
      remoteJid: jid,
      fromMe: false,
      id: 'targetMessageId123'
    },
    encPayload: Buffer.from('encrypted_payload'),
    encIv: Buffer.from('encryption_iv'),
    secretEncType: 2 // 0 = UNKNOWN, 1 = EVENT_EDIT, 2 = MESSAGE_EDIT
  }
});
```

##### Status Notification Messages

Send status notification messages (for status interactions).

```typescript
await conn.sendMessage('status@broadcast', {
  statusNotification: {
    responseMessageKey: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'responseId123'
    },
    originalMessageKey: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'originalId123'
    },
    type: 1 // 0 = UNKNOWN, 1 = STATUS_ADD_YOURS, 2 = STATUS_RESHARE, 3 = STATUS_QUESTION_ANSWER_RESHARE
  }
}, {
  statusJidList: [jid]
});
```

##### Sticker Sync RMR Messages

Sync stickers via RMR (Recent Media Request).

```typescript
await conn.sendMessage(jid, {
  stickerSyncRMR: {
    filehash: ['hash1', 'hash2', 'hash3'],
    rmrSource: 'source_identifier',
    requestTimestamp: Date.now()
  }
});
```

// Payment Messages

##### Request Payment
```typescript
await conn.sendMessage(jid, {
    requestPayment: {
        currency: 'EUR',
        amount1000: 5000,
        requestFrom: '393514357738@s.whatsapp.net',
        note: 'js gimme my money' // https://paypal.me/samakavare
    }
});
```

##### Send Payment
```typescript
await conn.sendMessage(jid, {
    sendPayment: {
        requestMessageKey: {
            remoteJid: jid,
            fromMe: false,
            id: 'paymentRequestId123'
        },
        noteMessage: { text: 'Payment sent' },
        background: {
            id: 'payment_bg_id',
            type: 1 // DEFAULT = 1
        },
        transactionData: 'transaction_data_string'
    }
});
```

##### Decline Payment Request
```typescript
await conn.sendMessage(jid, {
    declinePayment: {
        key: {
            remoteJid: jid,
            fromMe: false,
            id: 'paymentRequestId123'
        }
    }
});
```

##### Cancel Payment Request
```typescript
await conn.sendMessage(jid, {
    cancelPayment: {
        key: {
            remoteJid: jid,
            fromMe: true,
            id: 'paymentRequestId123'
        }
    }
});
```

##### Scheduled Call Creation
```typescript
await conn.sendMessage(jid, {
    call: {
        callKey: {
            fromMe: true,
            id: Date.now().toString(),
            remoteJid: jid
        },
        type: 'ACCEPT',  // 'MISSED', 'OFFER', 'ACCEPT', 'REJECT'..
        time: Date.now() + 3600000, // Scheduled time (optional)
        title: 'Team Meeting' // Optional title
    }
});
```

##### Scheduled Call Edit
```typescript
await conn.sendMessage(jid, {
    scheduledCallEdit: {
        key: {
            remoteJid: jid,
            fromMe: true,
            id: 'scheduledCallId123'
        },
        editType: 1 // 0 = UNKNOWN, 1 = CANCEL
    }
});
```

##### Pin/Unpin Messages

Pin or unpin a message in a chat.

```typescript
// Pin a message (type 1 = PIN_FOR_ALL)
await conn.sendMessage(jid, {
    pin: {
        key: {
            remoteJid: jid,
            fromMe: false,
            id: 'messageId123'
        },
        type: 1, // 1 = PIN_FOR_ALL, 2 = UNPIN_FOR_ALL
        time: 86400 // Duration in seconds (24 hours = 86400, 7 days = 604800, 30 days = 2592000)
    }
});

// Or use simplified syntax
await conn.sendMessage(jid, {
    pin: {
        remoteJid: jid,
        fromMe: false,
        id: 'messageId123'
    },
    type: 1, // 1 = PIN_FOR_ALL, 2 = UNPIN_FOR_ALL
    time: 86400 // Optional: duration in seconds
});

// Unpin a message (type 2 = UNPIN_FOR_ALL)
await conn.sendMessage(jid, {
    pin: {
        key: {
            remoteJid: jid,
            fromMe: false,
            id: 'messageId123'
        },
        type: 2 // UNPIN_FOR_ALL
    }
});
```

### Response Management

To manage responses to interactive messages, use the `messages.upsert` listener and check the response type:

```typescript
conn.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    
    // Button response
    if (msg.message?.buttonsResponseMessage) {
        const selectedId = msg.message.buttonsResponseMessage.selectedButtonId;
        console.log(`Selected button: ${selectedId}`);
    }
    
    // List response
    if (msg.message?.listResponseMessage) {
        const selectedId = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
        console.log(`Selected option: ${selectedId}`);
    }
    
    // Poll response
    if (msg.message?.pollResponseMessage) {
        const selectedOptions = msg.message.pollResponseMessage.selectedOptions;
        console.log('Selected options:', selectedOptions);
    }
    
    // Comment response
    if (msg.message?.commentMessage) {
        const comment = msg.message.commentMessage;
        console.log('Comment on message:', comment.targetMessageKey?.id);
        console.log('Comment content:', comment.message);
    }
    
    // Question response
    if (msg.message?.questionResponseMessage) {
        const response = msg.message.questionResponseMessage;
        console.log('Response to question:', response.key?.id);
        console.log('Answer:', response.text);
    }
    
    // Status question answer
    if (msg.message?.statusQuestionAnswerMessage) {
        const answer = msg.message.statusQuestionAnswerMessage;
        console.log('Status question answer:', answer.text);
    }
    
    // AI Rich Response
    if (msg.message?.richResponseMessage) {
        const richResponse = msg.message.richResponseMessage;
        console.log('AI Rich Response type:', richResponse.messageType);
        console.log('Submessages:', richResponse.submessages);
    }
    
    // Interactive Response (Native Flow Response)
    if (msg.message?.interactiveResponseMessage) {
        const response = msg.message.interactiveResponseMessage;
        console.log('Interactive response body:', response.body?.text);
        if (response.nativeFlowResponseMessage) {
            console.log('Native flow response:', response.nativeFlowResponseMessage.name);
            console.log('Params:', response.nativeFlowResponseMessage.paramsJson);
        }
    }
    
    // Sticker Pack
    if (msg.message?.stickerPackMessage) {
        const pack = msg.message.stickerPackMessage;
        console.log('Sticker pack:', pack.name);
        console.log('Publisher:', pack.publisher);
        console.log('Stickers count:', pack.stickers?.length);
        console.log('Pack ID:', pack.stickerPackId);
        console.log('Origin:', pack.stickerPackOrigin);
    }
    
    // Collection/Catalog response
    if (msg.message?.interactiveMessage?.collectionMessage) {
        const collection = msg.message.interactiveMessage.collectionMessage;
        console.log('Collection opened:', collection.id);
        console.log('Business JID:', collection.bizJid);
    }
    
    // Invoice response
    if (msg.message?.invoiceMessage) {
        const invoice = msg.message.invoiceMessage;
        console.log('Invoice token:', invoice.token);
        console.log('Invoice note:', invoice.note);
        console.log('Attachment type:', invoice.attachmentType === 0 ? 'IMAGE' : 'PDF');
    }
    
    // Business Call
    if (msg.message?.bcallMessage) {
        const bcall = msg.message.bcallMessage;
        console.log('Business call session:', bcall.sessionId);
        console.log('Media type:', bcall.mediaType === 1 ? 'AUDIO' : 'VIDEO');
    }
    
    // Call Log
    if (msg.message?.callLogMesssage) {
        const callLog = msg.message.callLogMesssage;
        console.log('Call outcome:', callLog.callOutcome);
        console.log('Duration:', callLog.durationSecs, 'seconds');
        console.log('Participants:', callLog.participants);
    }
    
    // Encrypted Comment
    if (msg.message?.encCommentMessage) {
        const encComment = msg.message.encCommentMessage;
        console.log('Encrypted comment on message:', encComment.targetMessageKey?.id);
    }
    
    // Encrypted Event Response
    if (msg.message?.encEventResponseMessage) {
        const encEvent = msg.message.encEventResponseMessage;
        console.log('Encrypted event response for:', encEvent.eventCreationMessageKey?.id);
    }
    
    // Message History Bundle
    if (msg.message?.messageHistoryBundle) {
        const bundle = msg.message.messageHistoryBundle;
        console.log('History bundle receivers:', bundle.messageHistoryMetadata?.historyReceivers);
        console.log('Message count:', bundle.messageHistoryMetadata?.messageCount);
    }
    
    // Message History Notice
    if (msg.message?.messageHistoryNotice) {
        const notice = msg.message.messageHistoryNotice;
        console.log('History notice receivers:', notice.messageHistoryMetadata?.historyReceivers);
    }
    
    // Newsletter Follower Invite
    if (msg.message?.newsletterFollowerInviteMessageV2) {
        const invite = msg.message.newsletterFollowerInviteMessageV2;
        console.log('Newsletter invite:', invite.newsletterName);
        console.log('Newsletter JID:', invite.newsletterJid);
    }
    
    // Placeholder
    if (msg.message?.placeholderMessage) {
        const placeholder = msg.message.placeholderMessage;
        console.log('Placeholder type:', placeholder.type);
    }
    
    // Secret Encrypted
    if (msg.message?.secretEncryptedMessage) {
        const secret = msg.message.secretEncryptedMessage;
        console.log('Secret encrypted type:', secret.secretEncType);
        console.log('Target message:', secret.targetMessageKey?.id);
    }
    
    // Status Notification
    if (msg.message?.statusNotificationMessage) {
        const notification = msg.message.statusNotificationMessage;
        console.log('Status notification type:', notification.type);
        console.log('Original message:', notification.originalMessageKey?.id);
    }
    
    // Sticker Sync RMR
    if (msg.message?.stickerSyncRmrMessage) {
        const sync = msg.message.stickerSyncRmrMessage;
        console.log('Sticker sync filehashes:', sync.filehash);
        console.log('RMR source:', sync.rmrSource);
    }
    
    // Send Payment
    if (msg.message?.sendPaymentMessage) {
        const payment = msg.message.sendPaymentMessage;
        console.log('Payment sent for request:', payment.requestMessageKey?.id);
        console.log('Transaction data:', payment.transactionData);
    }
    
    // Decline Payment
    if (msg.message?.declinePaymentRequestMessage) {
        const decline = msg.message.declinePaymentRequestMessage;
        console.log('Payment declined for:', decline.key?.id);
    }
    
    // Cancel Payment
    if (msg.message?.cancelPaymentRequestMessage) {
        const cancel = msg.message.cancelPaymentRequestMessage;
        console.log('Payment cancelled for:', cancel.key?.id);
    }
    
    // Scheduled Call Edit
    if (msg.message?.scheduledCallEditMessage) {
        const edit = msg.message.scheduledCallEditMessage;
        console.log('Scheduled call edited:', edit.key?.id);
        console.log('Edit type:', edit.editType === 1 ? 'CANCEL' : 'UNKNOWN');
    }
    
    // Poll Result Snapshot
    if (msg.message?.pollResultSnapshotMessage) {
        const snapshot = msg.message.pollResultSnapshotMessage;
        console.log('Poll snapshot:', snapshot.name);
        console.log('Votes:', snapshot.pollVotes);
    }
    
    // Poll Update
    if (msg.message?.pollUpdateMessage) {
        const update = msg.message.pollUpdateMessage;
        console.log('Poll update for:', update.pollCreationMessageKey?.id);
    }
    
    // Pin/Unpin
    if (msg.message?.pinInChatMessage) {
        const pin = msg.message.pinInChatMessage;
        console.log('Pin action:', pin.type === 1 ? 'PIN_FOR_ALL' : 'UNPIN_FOR_ALL');
        console.log('Pinned message:', pin.key?.id);
    }
});
```

### 🎭 Group Features

#### Basic Group Management

```typescript
// Group creation - the jid is for adding participants
const group = await conn.groupCreate('Angels 🩸🕊️', ['user@s.whatsapp.net']);

// Get group info
const metadata = await conn.groupMetadata(jid);

// Get invite code
const code = await conn.groupInviteCode(jid);

// Revoke invite link
await conn.groupRevokeInvite(jid);

// Leave group
await conn.groupLeave(jid);
```

#### Participant Management

```typescript
// Add participants
await conn.groupParticipantsUpdate(
    jid, 
    ['user@s.whatsapp.net'],
    'add'
);

// Remove participants
await conn.groupParticipantsUpdate(
    jid,
    ['user@s.whatsapp.net'],
    'remove'
);

// Promote to admin
await conn.groupParticipantsUpdate(
    jid,
    ['user@s.whatsapp.net'],
    'promote'
);

// Demote from admin
await conn.groupParticipantsUpdate(
    jid,
    ['user@s.whatsapp.net'],
    'demote'
);
```

#### Group Settings

```typescript
// Change group name
await conn.groupUpdateSubject(jid, 'New Name');

// Change description
await conn.groupUpdateDescription(jid, 'New description');

// Change group photo
await conn.updateProfilePicture(jid, { url: './img/group.jpg' });

// Remove group photo
await conn.removeProfilePicture(jid);

// Set group as admin only
await conn.groupSettingUpdate(jid, 'announcement');

// Set group as open to all
await conn.groupSettingUpdate(jid, 'not_announcement');

// Set who can edit info - admin only
await conn.groupSettingUpdate(jid, 'locked');

// Set who can edit info - all
await conn.groupSettingUpdate(jid, 'unlocked');

// Set who can add members - admin only
await conn.groupMemberAddMode(jid, 'admin_add');

// Set who can add members - all
await conn.groupMemberAddMode(jid, 'all_member_add');

// Enable/disable temporary messages (24 hours)
await conn.groupToggleEphemeral(jid, 86400); // seconds

// Disable temporary messages
await conn.groupToggleEphemeral(jid, 0);

// Enable/disable membership approval mode
await conn.groupJoinApprovalMode(jid, 'on'); // requires approval
await conn.groupJoinApprovalMode(jid, 'off'); // open

// Get all groups
const groups = await conn.groupFetchAllParticipating();

// Get pending invites
const invites = await conn.groupGetInviteInfo(code);

// Accept group invite
await conn.groupAcceptInvite(code);

// Get group info from link
const groupInfo = await conn.groupGetInviteInfo('https://chat.whatsapp.com/ABC123');

// Listen to settings changes
conn.ev.on('group-settings.update', async ({ id, announce, restrict }) => {
    if (announce !== undefined) {
        await conn.sendMessage(id, { text: `The group has been set to ${announce ? 'admin only' : 'all'}` });
    }
    if (restrict !== undefined) {
        await conn.sendMessage(id, { text: `Group info can be edited by ${restrict ? 'admin only' : 'all'}` });
    }
});
```

#### Advanced Group Messages

```typescript
// Message with multiple mentions
await conn.sendMessage(jid, {
    text: '@user1 @user2 @user3',
    mentions: [user1, user2, user3],
    contextInfo: {
        mentionedJid: [user1, user2, user3]
    }
});

// Message with Google search
await conn.sendMessage(jid, {
    text: 'ZWAG',
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true
    }
});
```

---

#### Ghost Messages

Send a message that is only visible to specific group members. Works in groups only.

##### Options

| Option | Type | Description |
|---|---|---|
| `ghostJids` | `string[]` | Only these members can see the message. If both `ghostJids` and `ghostExcludeJids` are set, `ghostJids` wins. |
| `ghostExcludeJids` | `string[]` | Everyone can see the message except these members. Ignored if `ghostJids` is set. |
| `ghostRevealTimeoutMs` | `number` | After this delay (ms), the message becomes visible. Requires `ghostJids`. |
| `ghostRevealJids` | `string[]` | Who can see the message after the reveal. If omitted, the message is revealed to all. Requires `ghostJids` + `ghostRevealTimeoutMs`. |

##### Examples

```typescript
// Only user1 can see this message
await conn.sendMessage(groupJid, { text: 'Secret message' }, {
    ghostJids: ['user1@s.whatsapp.net']
});

// Everyone EXCEPT user2 can see this message
await conn.sendMessage(groupJid, { text: 'Hidden from user2' }, {
    ghostExcludeJids: ['user2@s.whatsapp.net']
});

// Visible to admins only, then revealed to everyone after 30 seconds
await conn.sendMessage(groupJid, { text: 'Visible in 30s!' }, {
    ghostJids: adminJids,
    ghostRevealTimeoutMs: 30_000
});

// Visible to admins only, then revealed to a specific subset after 1 minute
await conn.sendMessage(groupJid, { text: 'Partially revealed' }, {
    ghostJids: adminJids,
    ghostRevealTimeoutMs: 60_000,
    ghostRevealJids: [...adminJids, 'user3@s.whatsapp.net']
});
```

---

## 🔧 Fix LID/JID in Your Own Main and Handler

*The LID/JID support is a strength of this library, solving common problems like sender identification in groups and private chats. Here's how to integrate it into your main code and handler.*

### Best Practices for LID/JID

- **JID Normalization**: The library automatically handles JID/LID normalization in most cases.
- **Use Built-in Functions**: Prefer `toJid()`, `normalizeJid()`, and `validateJid()` from the library.
- **Cache Management**: The library includes automatic caching for LID/JID conversions.

**Common Use Cases:**
- **Group Participants**: Use `toJid()` to normalize participant IDs before operations.
- **Message Sender**: Extract sender info with `getSenderLid()` for reliable identification.
- **Validation**: Always validate JIDs with `validateJid()` before critical operations.

### Integrated Example

```typescript
import makeWASocket, { getSenderLid, toJid, validateJid } from '@realvare/baileys';

conn.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message) return;

  const info = getSenderLid(msg);
  const senderJid = toJid(info.lid);
  
  // Validate before using
  const validation = validateJid(senderJid);
  if (validation.isValid) {
    await conn.sendMessage(senderJid, { text: 'Message received!' }, { quoted: msg });
  }
});
```

---

### 🚀 Smart LID/JID Cache

The library now includes an advanced cache system to optimize LID/JID conversions:

```typescript
import { getCacheStats, clearCache, CacheManager } from '@realvare/baileys';

// Cache is pre-configured with optimal settings
// Monitor performance
const stats = getCacheStats();
console.log('LID Cache:', stats.lidCache.size, '/', stats.lidCache.maxSize);

// Clear cache if necessary
clearCache();
```

### 🛡️ Advanced JID Validation

```typescript
import { validateJid, Logger } from '@realvare/baileys';

const jid = '1234567890@s.whatsapp.net';
const validation = validateJid(jid);

if (validation.isValid) {
    Logger.info('Valid JID:', jid);
} else {
    Logger.error('Invalid JID:', validation.error);
}
```

### 📊 Conditional Logging

```typescript
import { Logger } from '@realvare/baileys';

// Use the built-in Logger for conditional logging
Logger.debug('Debug info');
Logger.performance('Performance metrics');
Logger.error('Error occurred');
```

### 🔧 Performance Configuration

The library comes pre-configured with optimal settings. Cache and logging are automatically managed:

```typescript
import { CacheManager, Logger, getCacheStats } from '@realvare/baileys';

// Cache is automatically configured and managed
// Monitor cache performance
const stats = getCacheStats();
console.log('Cache enabled: true');
console.log('LID Cache:', stats.lidCache.size, '/', stats.lidCache.maxSize);

// Use Logger for conditional logging
Logger.debug('Debug info');
Logger.error('Error occurred');
```

---

## 🧩 Events: LID and JID Management

The library enriches event payloads to provide both JID and LID, eliminating ambiguity in multi-device and group contexts.

**Key Features:**
- Automatic JID/LID normalization in events
- Pre-normalized fields in `msg.key` (`remoteJidNormalized`, `remoteLid`, `participantLid`)
- Seamless conversion with `toJid()` and `normalizeJid()`

Refer to the examples in the **Quick Guide** and **API Documentation** sections for practical usage.

---

## ⚙️ Advanced Configuration

Customize the socket for performance and behavior.

### 🔧 Complete Options for makeWASocket

```typescript
const sock = makeWASocket({
  // 🔐 Authentication
  auth: state,
  
  // 🖥️ UI and Debug
  printQRInTerminal: true,
  logger: console,
  browser: ['VareBot', 'Chrome', '4.0.0'],
  
  // ⏱️ Timeout and Connection
  defaultQueryTimeoutMs: 60000,
  keepAliveIntervalMs: 30000,
  connectTimeoutMs: 60000,
  retryRequestDelayMs: 250,
  maxMsgRetryCount: 5,
  
  // 🎛️ Behavior
  markOnlineOnConnect: false, // Recommended: false to reduce ban risk
  syncFullHistory: false, // Keep false to prevent slowdowns
  fireInitQueries: true,
  generateHighQualityLinkPreview: true,
});
```
<div align="center">

### 🛡️ Security and Encryption

| Feature            | Description                              |
|---------------------------|------------------------------------------|
| 🔐 End-to-End Encryption | Signal protocol for secure messages    |
| 🔑 Key Management        | Automatic key generation/rotation  |
| 🔍 Authentication        | Security via QR code or pairing code |
| 🛡️ Data Protection       | Secure local credentials storage  |

---

## 🌐 Support and Community

Join the community for help and contributions.

### 📞 Contacts and Resources

| Channel           | Link/Info                                |
|------------------|------------------------------------------|
| **Email**        | [samakavare1@gmail.com](mailto:samakavare1@gmail.com) |
| **GitHub Issues**| [Report Bug](https://github.com/realvare/based/issues) |
| **PayPal**       | [Donate](https://www.paypal.me/samakavare) |
| **WhatsApp Channel**| [Channel](https://www.whatsapp.com/channel/0029VbB41Sa1Hsq1JhsC1Z1z) |

---

## 🙏 Acknowledgments

Thanks to the projects that inspire Based:

| Project                  | Contribution                               |
|---------------------------|------------------------------------------|
| [Baileys](https://github.com/WhiskeySockets/Baileys) | Original WhatsApp Web API               |
| [Yupra](https://www.npmjs.com/package/@yupra/baileys) | LID/JID Fix                     |
| [Signal Protocol](https://signal.org/) | End-to-end encryption                  |

---

## ⚠️ Disclaimer & License

### 📋 Legal Note

⚠️ **Important**: Not affiliated with WhatsApp Inc. or Meta. Educational/development use only.

🛡️ **Responsible Use**: Avoid spam, WhatsApp ToS violations. Risk of account ban.

### 📜 MIT License

MIT License © 2025 [realvare](https://github.com/realvare)

See [LICENSE](LICENSE) for details.

---

<div align="center">
<table align="center">
  <tr>
    <td align="center">
      <img src="https://i.ibb.co/Cp0SQznC/sam2.png" width="120" height="120" alt="pfp" style="bysamakavare"/>
      <br><br>
      <h2>👨‍💻 Created by <a href="https://github.com/realvare" style="color: #8a2be2; text-decoration: none;">realvare</a></h2>
      <p><em>sam aka vare</em></p>
    </td>
  </tr>
</table>

<br>
<p align="center">
  <a href="https://github.com/realvare/based">
    <img src="https://img.shields.io/badge/⭐_Star_the_Project-8a2be2?style=for-the-badge&logo=github&logoColor=white&labelColor=2d1b69"/>
  </a>&nbsp;&nbsp;
  <a href="https://github.com/realvare/based/fork">
    <img src="https://img.shields.io/badge/🔄_Fork_Repository-8a2be2?style=for-the-badge&logo=github&logoColor=white&labelColor=2d1b69"/>
  </a>&nbsp;&nbsp;
  <a href="https://paypal.me/samakavare">
    <img src="https://img.shields.io/badge/💰_Donate-8a2be2?style=for-the-badge&logo=paypal&logoColor=white&labelColor=2d1b69"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/realvare">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=8a2be2"/>
  </a>&nbsp;
  <a href="https://wa.me/393476686131">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&color=8a2be2"/>
  </a>&nbsp;
  <a href="https://instagram.com/samakavare">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white&color=8a2be2"/>
  </a>&nbsp;
  <a href="mailto:samakavare1@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white&color=8a2be2"/>
  </a>
</p>
<div align="center">
  <p><strong>If it was useful to you, leave a star and/or consider a donation! ✧</strong></p>

<br>
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24&height=120&section=footer&text=&fontSize=30&fontColor=ffffff&animation=fadeIn&fontAlignY=35"/>

</div>