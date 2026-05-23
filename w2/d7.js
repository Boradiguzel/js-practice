//Pratik: Nüfusu 10 milyondan büyük ülkeleri filter + map ile listele
async function countries(){
    try{
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population")
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
        }
        const data = await response.json()
        if (!Array.isArray(data)) {
            throw new Error("Unexpected response shape")
        }
        const crowded = data
        .filter((c) => c.population > 10_000_000)
        .map((c) => ({name: c.name.common , population : c.population}))
        .sort((a,b) => a.population - b.population)
        //console.table(crowded)
    } catch(error){
        console.error(error)
    }
}

countries()

// Bitcoin + Ethereum anlık fiyat
async function coins(){
    try{
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
        const data = await response.json()
        const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

        console.log("Bitcoin:", usd.format(data.bitcoin.usd))
        console.log("Ethereum:", usd.format(data.ethereum.usd))
    }catch(err){
        console.log(err)
    }
}

coins()
