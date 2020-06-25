import  scraper from './scraper'
import scrapeGraphic from "./graphic";

async function simplex(req:any, res:any) {
    const { url } = req.body
    const answer = await scraper(url)
    return res.json({answer})
}

async function graphic(req:any, res:any) {
    
    const { url } = req.body
    const answer = await scrapeGraphic(url)
    return res.json({answer})
}

export { simplex, graphic }