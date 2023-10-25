const API_TOKEN = process.env.API_TOKEN
const MODEL_URL = process.env.MODEL_URL

async function predict(buf) {
    const res = await fetch(MODEL_URL, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: buf,
    })
    const result = await res.json()
    return { status: res.status, result }
}

export { predict }
