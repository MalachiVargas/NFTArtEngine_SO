const fs = require('fs')
require('dotenv').config()
const { NFTStorage, File } = require('nft.storage')

const endpoint = 'https://api.nft.storage' // the default
const token = process.env.TOKEN // your API key from https://nft.storage/manage
const supply = 10000 //Enter supply here

const createFiles = async () => {
    files = []
    for (let i = 1; i <= supply; i++) {
        files.push(new File(
            [await fs.promises.readFile(`../build/images/${i}.png`)],
            `${i}.png`)
        )
    }

    console.log(await fs.promises.readFile(`../build/images/1.png`))
    return files
}

async function main() {
    const storage = new NFTStorage({ endpoint, token })
    const files = await createFiles()
    const cid = await storage.storeDirectory(files)
    console.log("hello")
    console.log({ cid })
    const status = await storage.status(cid)
    console.log(status)
}
main()