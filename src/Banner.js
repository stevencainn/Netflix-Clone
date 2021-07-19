import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests'


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        //need the async function to fetch data from outside source
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor (Math.random() * request.data.results.length) -1]);
            return request;
        }
        fetchData()
    }, [])

    console.log(movie);


    return (
        <header 
        className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

            </div>
        
            {/*title */}

            {/*div with 2 bittons */}

            {/*desciption */}

        </header>
    )
}

export default Banner
