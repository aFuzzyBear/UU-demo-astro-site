import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function getStaticPaths() {
    const allPNG = await import.meta.glob('../../../content/introducing-astro.png');
    return [
        {
            params: {
                image: 'introducing-astro'
            }
        }
    ]
}

export async function get({ params }) {
    const pathname = `../../../content/${params.image}.png`
    const resolvedPath = path.resolve(fileURLToPath(import.meta.url), pathname).replace('src/', '')
    const buffer = await fs.readFile(resolvedPath, 'binary')

    return {
        headers:{
            "Content-type":'image/jpeg'
        },
        body: buffer.toString('binary')
    }
}