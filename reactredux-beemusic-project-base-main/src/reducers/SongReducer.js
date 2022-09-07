import {
    FETCH_ALL_SONGS,
    FETCH_ALL_SONGS_IN_API,
    FETCH_CHECKED_SONGS,
    FETCH_FAV_SONGS,
    FETCH_PLAYING_SONGS
} from "../consts";


const InitialState = {
    SongList: [],
    id: undefined
}

export const SongReducer = (state = InitialState, actions) => {
    let id = actions.payload
    console.log('123')
    let newSongList = [...state.SongList]
    switch (actions.type){
        case FETCH_ALL_SONGS:
            console.log(`[reducer] ${FETCH_ALL_SONGS}`, actions?.payload)
            return{...state, SongList: actions?.payload}
        case FETCH_CHECKED_SONGS:
            newSongList = newSongList.map(s=> s.id === id ? {...s, checked: !s.checked} : s)
            return {...state, SongList: newSongList}
        case FETCH_FAV_SONGS:
            newSongList = newSongList.map(s=> s.id === id ? {...s, liked: !s.liked} : s)
            return {...state, SongList: newSongList}
        case FETCH_PLAYING_SONGS:
            newSongList = newSongList.map(s=> s.id === id ? {...s, playing: !s.playing} : {...s, playing: false})
            return {...state, SongList: newSongList}
        case 'TEST':
            console.log('test?')
            return {...state}
        case FETCH_ALL_SONGS_IN_API:
            return {...state, SongList: actions?.payload}
        default:
            return state
    }
}