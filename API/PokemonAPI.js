// API/TMDBApi.js
import axios from 'axios'
// import { API_TOKEN } from '@env'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(50)
}

const getPOkemonFromApi = async (id) => {
  await slowNetwork()
  let url =
    'https://pokeapi.co/api/v2/type/'+ id
    let response = await axios.get(url)
    console.log('--getPOkemonFromApi--')
    console.log(url)
    console.log(response.data)
    console.log('--fin getPOkemonFromApi--')
    return response.data
  }
  


  export { getPOkemonFromApi }