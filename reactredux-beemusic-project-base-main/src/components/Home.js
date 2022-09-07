import './Home.scss'
import AllList from './AllList'
import FavList from './FavList'
import PlayList from './PlayList'
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import {useEffect, useState} from "react";
import {APIURL} from "../consts";
import axios from "axios";

const Home = () => {

    const dispatch = useDispatch()
    // const songs = useSelector(state => state?.SongReducer?.SongList)
    useEffect(()=>{
        dispatch(actions.SongAction.fetchAllSongInAPI())
    } ,[])
    console.log(APIURL)
    const [newSongList, setNewSongList] = useState([])
    // useEffect(()=> fetchSong(), [])

    // const fetchSong = song =>
    //     axios.get(APIURL, {
    //         params: {
    //             query: song,
    //             orientation: 'landscape'
    //         }
    //     }).then(res => {
    //         let {data:{results}} =res
    //         let songList = results.map(item => ({
    //             id: item.id,
    //             title: item.title,
    //             artist: item.artist,
    //             length: item.length,
    //             // author: item.author,
    //             price: item.price,
    //             cover: item.cover
    //
    //         }))
    //         console.log('the songList is as above')
    //         // setNewSongList(songList)
    //
    //     }).catch(err => console.log('there is an error when fetching',err))

    return <section>
        {/*<button*/}
        {/*    onClick={() => dispatch(actions.SongAction.fetchAllSongInAPI())}*/}
        {/*>*/}
        {/*    Fetch Songs*/}
        {/*</button>*/}

        <div className="container">
            <AllList/>
            <FavList/>
            <PlayList/>
        </div>
    </section>
}
// onClick={() => dispatch(actions.SongAction.fetchAllSongs())}
export default Home