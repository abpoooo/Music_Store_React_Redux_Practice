import {
    APIURL,
    FETCH_ALL_SONGS,
    FETCH_ALL_SONGS_IN_API,
    FETCH_CHECKED_SONGS,
    FETCH_FAV_SONGS,
    FETCH_PLAYING_SONGS
} from "../consts";
import axios from "axios";

const songs = [
    {id: 1, name: 'One kiss', artist: 'Taylor', length: '03:34', cover: 'img/gai.jpg'},
    {id: 2, name: 'One kiss2', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 3, name: 'One kiss3', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 4, name: 'One kiss4', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 5, name: 'One kiss5', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 6, name: 'One kiss6', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 7, name: 'One kiss7', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
]

const fetchAllSongs = () => {
    console.log(`${FETCH_ALL_SONGS}`)
    return{
        type: FETCH_ALL_SONGS,
        payload: songs.map(s => ({...s, liked: false, playing: false, checked: false}))
    }
}
const fetchFavSongs = id => {
    console.log('action')
    return{
        type: FETCH_FAV_SONGS,
        payload: id
    }
}
const fetchCheckedSongs = id => {
    return{
        type: FETCH_CHECKED_SONGS,
        payload: id
    }
}
const fetchPlayingSongs = id => {
    return{
        type: FETCH_PLAYING_SONGS,
        payload: id
    }
}
// export default class SongAction {
// }

const fetchTest = () => {
    console.log('test')
    return{
        type:'TEST',
        payload: null
    }
}

const fetchAllSongInAPI = song => dispatch => {
        axios.get(APIURL, {
            params: {
                query: song,
                orientation: 'landscape'
            }
        }).then(res => {
            // const {dataReducer: {rawData: {data: {data: {data}}}}
            let {data:{data}} = res
            console.log('data',data)
            let songList = data.map(item => ({
                id: item.id,
                title: item.title,
                artist: item.artist,
                length: item.length,
                // author: item.author,
                price: item.price,
                cover: item.cover

            }))
            console.log('the songList is as above')
            // setNewSongList(songList)
            dispatch({
                type:FETCH_ALL_SONGS_IN_API,
                payload: songList
            } )

        }).catch(err => console.log('there is an error when fetching',err))

}

export default {
    fetchAllSongs,
    fetchFavSongs,
    fetchCheckedSongs,
    fetchPlayingSongs,
    fetchTest,
    fetchAllSongInAPI
}