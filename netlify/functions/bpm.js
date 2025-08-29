export async function handler(event, context) {
  const query = event.queryStringParameters.q;
  if (!query) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Informe ?q=nome da música' }) };
  }

  try {
    const url = `https://tunebat.com/Search?q=${encodeURIComponent(query)}`;
    const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await response.text();

    let bpmMatch = html.match(/(\d{2,3})\s*(?:BPM|bpm)/i);
    let keyMatch = html.match(/Key:\s*<\/span>\s*<span[^>]*>([A-G][#b]?\s?(?:maj|min|m)?)/i);

    const bpm = bpmMatch ? bpmMatch[1] : null;
    const key = keyMatch ? keyMatch[1] : null;

    if (!bpm) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Não encontrado' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ title: query, bpm, key })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Falha ao buscar BPM' }) };
  }
}
