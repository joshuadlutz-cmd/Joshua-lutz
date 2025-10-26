export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ reply: "Please ask a question." }), { headers: { "Content-Type": "application/json" }, status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Server not configured. Missing API key." }), { headers: { "Content-Type": "application/json" }, status: 500 });
    }

    const systemPrompt = [
      "You are Joshua Lutz’s Photography Assistant for students and visitors.",
      "Tone: concise, clear, warm; academically literate but accessible.",
      "If asked about grades, registration, or private records, provide general guidance and direct them to official channels (Brightspace, Registrar, department email).",
      "If you don't know, say so briefly and suggest where to look (syllabus, department site)."
    ].join("\n");

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ]
      })
    });

    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ reply: "Upstream error: " + text.slice(0, 300) }), { headers: { "Content-Type": "application/json" }, status: 500 });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't reply.";
    return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ reply: "Server error." }), { headers: { "Content-Type": "application/json" }, status: 500 });
  }
}
