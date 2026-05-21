# AURA Backend

FastAPI backend that powers AURA's transcription, memory, and AI chat pipeline.

For the full module reference see [`INDEX.md`](INDEX.md).

---

## What it does

| Feature | How |
|:---|:---|
| Audio transcription | Deepgram real-time STT over WebSocket |
| Vision analysis | GPT-4o processes images from the pendant |
| Memory storage | Pinecone vector DB + Firestore |
| Chat | LangGraph agentic system with RAG |
| Auth | Firebase Authentication |
| Caching | Redis (Upstash recommended) |

---

## Module Structure

```
backend/
├── main.py               ← FastAPI app entry point
├── dependencies.py       ← shared dependencies & auth
├── requirements.txt
├── .env.template         ← copy to .env
│
├── routers/              ← API endpoints
│   ├── transcribe.py     ← audio WebSocket
│   ├── conversations.py  ← memory CRUD
│   ├── chat.py           ← AI chat
│   ├── memories.py       ← memory operations
│   └── developer.py      ← developer API
│
├── database/             ← data access layer
│   ├── conversations.py
│   ├── memories.py
│   ├── vector_db.py      ← Pinecone
│   └── redis_db.py
│
└── utils/
    ├── llm/              ← LLM clients + processing
    ├── stt/              ← speech-to-text (Deepgram)
    └── retrieval/        ← RAG + LangGraph agent
```

See [`INDEX.md`](INDEX.md) for full module reference.
