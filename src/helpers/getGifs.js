export const getGifs= async(category)=>{
    const apiKey='WHPvHyxpaeXTj2wsVzk4ipYx298FytAX';
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
  
    const response= await fetch(url);
    const { data }= await response.json();
  
    const gifs= data.map(img=>({
      id:img.id,
      title:img.title,
      url:img.images.original.url
    }))
  
    return gifs;
  
  }