# Free-AI - Free Access to AI Models

[Live Website](http://ai.qeintech.in)

Free-AI is an experimental project designed to provide free access to AI models, aimed at helping students and developers explore and integrate artificial intelligence into their projects. This platform is currently under development, so please be aware that the APIs and models may be unstable and could occasionally generate incorrect or unexpected responses.

## API Reference

```bash
curl -X POST http:/api2.qeintech.in/v1/chat/completions \
     -H "Content-Type: application/json" \
     -d '{
           "model": "gpt-4",
           "messages": [
             { "role": "user", "content": "what happens to our consciousness when we sleep?" }
           ]
         }'
```

- Available Models: gpt-4, gemma2-9b, gemini, llama3-8b
- API Ratelimit - 10 requests/minute

## Tech Used:
- React Next.js
- Tailwind CSS
- [Flowbite](https://flowbite.com/docs/getting-started/next-js/)
- Extras: Ideogram AI, gitHub copilot (vscode) for content generation.
