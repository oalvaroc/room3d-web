import express from 'express'
import cors from 'cors'

import * as image from './image.js'
import * as hf from './hf.js'

const app = express()
app.use(cors())
app.use(express.raw({ limit: '1mb' }))

app.post('/api/v1/predict', async (req, res) => {
    try {
        const buf = await image.decode(req.body)
        console.log(`Image decoded: ${buf.length}`)

        const result = await hf.predict(buf)
        res.status(result.status).json(result)
    } catch(e) {
        console.log(e)
        res.status(404).json({ error: e.message })
    }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`server listening to http://localhost:${PORT}`))
