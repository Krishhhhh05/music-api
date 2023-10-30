import React, { useEffect } from 'react'
import { useState } from 'react';
// for 1st
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c392ed3835msh9fdae36c4da7f33p179becjsn8614f2f9d408',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};


// const url = 'https://shazam.p.rapidapi.com/albums/get-details?id=850576570&l=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c392ed3835msh9fdae36c4da7f33p179becjsn8614f2f9d408',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

const Home = () => {


  const [homeData, setHomeData] = useState('')
  // for 1st
  useEffect(() => {
    fetch('https://shazam.p.rapidapi.com/charts/track', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setHomeData(data);

      })
      .catch(err => console.error(err));
  }, []);
  console.log(homeData);
  const modifiedSongs = homeData.map((song) => ({
    ...song,
    liked: false
  }));
  const [songs, setSongs] = useState(modifiedSongs);

  // end 1st
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       const jsonData = JSON.parse(result);
  //       console.log(jsonData);
  //       setHomeData(jsonData.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);


  const [liked, setLiked] = useState(false);

  const handleLike = (songId) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === songId ? { ...song, liked: !song.liked } : song
      )
    );
  };
  const handleUnlike = () => {
    // Update the like status to false
    setLiked(false);
  };
  return (
    <div className='main'>
      <img class="top-image" src="https://i.pinimg.com/564x/bc/8c/03/bc8c03ba12f286713f826efc3b908e0f.jpg" alt="background" />
      <h3>World charts trending </h3>
      <div className="horizontal-scroll-container">
        {homeData && homeData.length > 0 && homeData.map((track, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={track.images.coverart} alt="Track" />
            </div>
            <div className="card-content">
              <h2>{track.share.subject}</h2>
              {track.liked ? (
                <button onClick={handleUnlike}>Unlike</button>
              ) : (
                <button onClick={handleLike}>Like</button>
              )
              }
              {songs.map((song) => (
                <div key={song.id}>
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                  <button onClick={() => handleLike(song.id)}>
                    {song.liked ? 'Unlike' : 'Like'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="card" >
          <div className="card-image">
          </div>
          <div className="card-content">
          </div>
        </div>



      </div>
      <h2>helloo</h2>
    </div>
  );
};

export default Home;

// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       Home
//     </div>
//   )
// }

// export default Home
