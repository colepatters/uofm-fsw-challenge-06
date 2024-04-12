const apiKey = "4dd0597ea0ca2343fa8a94a80cd7ba6f"

async function getCityByName(query) {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}&units=imperial`)
    if (!res.ok) throw new Error('Response not OK')
    const data = await res.json()
    return data[0]
}

async function getForecast(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    const res = await fetch(url)
    if (!res.ok) throw new Error('Response not OK')
    const data = await res.json()
    return data
}

const openWeather = {
    getCityByName,
    getForecast
}