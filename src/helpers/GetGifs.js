const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=w2bG22bjvxQvCm8A2n32rD90vIv62AhX`;
    const res = await fetch( url );
    const {data} = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;

}

export default getGifs;