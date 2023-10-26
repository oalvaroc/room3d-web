import Jimp from 'jimp'

const TARGET_SIZE = 300

async function decode(buf) {
    const img = await Jimp.read(buf)

    return img.resize(TARGET_SIZE, TARGET_SIZE)
        .getBufferAsync(Jimp.MIME_JPEG)
}

export { decode }
