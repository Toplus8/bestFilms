const getMovieById = async (movieId) => {
   
    const url= `https://api.themoviedb.org/3/movie/${movieId}?api_key=1c8eba188e0ddf2a4dc3938ff158ec4b`
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
  
      const data = await response.json();
    
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getMovieById;