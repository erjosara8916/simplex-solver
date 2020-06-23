import  scraper from './scraper'

async function simplex(req:any, res:any) {
    const { url } = req.body
    const answer = await scraper(url)
    return res.json({answer})
}

export {simplex}