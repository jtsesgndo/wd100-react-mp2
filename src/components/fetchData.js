import {useEffect, useState}from "react";
import { Link } from "react-router-dom";



const FetchData = () => {
    let [albums, setAlbums] = useState([]);
    let [artists, setArtists] = useState([]);
    let [playlists, setPlaylists] = useState([]);
    let [podcasts, setPodcasts] = useState([]);

    useEffect(()=>{
        let getMusic = async () =>{
          const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '723ca26963mshc615a95d479fb51p14eba3jsn8620583a8b34',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
          };
          
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setAlbums(result.albums.items);
            setArtists(result.artists.items);
            setPlaylists(result.playlists.items);
            setPodcasts(result.podcasts.items);
          } catch (error) {
            console.error(error);
          }
              }
        getMusic();
    }, []);



    return(
          
        <>     

        
          <div className="row g-5 mt-1">
          <h2 className="albumsTitle">Popular Albums</h2>
          {
              albums.slice(0,6).map((albumsOutput) => 
                
              <>
                <div className="col-md-2">
                    <div className="card">
                      <img src={albumsOutput.data.coverArt.sources[2].url} className="card-img-top"alt=""></img>
                      <div className="card-body">
                          <h5 className="card-title text-start">{albumsOutput.data.name}</h5>
                      </div>
                    </div>
                  </div>
                  
              </>
              
              )
            }
                <a href="#" className="mb-3">See More..</a>
          </div>

          
          <div className="row g-5">
          <h2 className="playlistsTitle">Top Playlists</h2>
          {
              playlists.slice(0,6).map((playlistsOutput) => 
                
              <>
                <div className="col-md-2">
                    <div className="card">
                      <img src={playlistsOutput.data.images.items[.0].sources[0].url} className="card-img-top"alt=""></img>
                      <div className="card-body">
                          <h5 className="card-title text-start">{playlistsOutput.data.name}</h5>
                      </div>
                    </div>
                  </div>
              </>
              
              )
            }
                  <a href="#" className="mb-3">See More..</a>
          </div>

          <div className="row g-5">
          <h2 className="artistsTitle">Popular Artist</h2>
          {
              artists.slice(0,6).map((artistsOutput) => 
                
              <>
                <div className="col-md-2">
                    <div className="card">
                      <img src={artistsOutput.data.visuals.avatarImage.sources[2].url} className="card-img-top"alt=""></img>
                      <div className="card-body">
                          <h5 className="card-title text-start">{artistsOutput.data.profile.name}</h5>
                      </div>
                    </div>
                  </div>
              </>
              
              )
            }
              <a href="#" className="mb-3">See More..</a>
          </div>
          <div className="row g-5">
          <h2 className="podcastsTitle">Podcasts</h2>
          {
              podcasts.slice(0,6).map((podcastsOutput) => 
                
              <>
                <div className="col-md-2">
                    <div className="card">
                      <img src={podcastsOutput.data.coverArt.sources[2].url} className="card-img-top"alt=""></img>
                      <div className="card-body">
                          <h5 className="card-title text-start">{podcastsOutput.data.publisher.name}</h5>
                      </div>
                    </div>
                  </div>
              </>
              
              )
            }
                <a href="#" className="mb-3">See More..</a>
          </div>
        </>
    );

}

export default FetchData;
