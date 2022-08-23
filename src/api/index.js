const URL = 'https://dummyjson.com'

export const getAllProducts = async() => {
    try{
        const response = await fetch(`${URL}/products`)
        const data = await response.json()
        console.log(data)
        return data.products
        
      
    } catch(error) {
        console.log(error)
    }
}