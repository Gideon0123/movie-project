import axios from "axios"

const API_KEY = "638cab49dc623f80acc776f502f81ebb";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = 
    await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = response.data
    return data.results
}

export const searchMovies = async (query) => {
    const response = 
    await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = response.data
    return data.results
}