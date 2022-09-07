import './SongRow.scss'
import {useDispatch} from "react-redux";
import actions from '../actions'
import {CheckedIcons, FavIcons, PlayingIcons} from './FavIcons';


const SongRow = ({song}) => {
    const dispatch = useDispatch()

    return(
        <div className='songRow'>
            <div className='songRow_Index'>
                <div>
                    <div>{song.id}</div>
                    <CheckedIcons checked={song.checked} onClick = {() => dispatch(actions.SongAction.fetchCheckedSongs(song.id))}/>
                </div>
            </div>

            <div className='SongRow_Image'>
                <img width='70px' height='70px' src={song.cover} alt=""/>
            </div>

            <div className='content'>
                <div className='content_title'>
                    <div className='title_name'>{song.name}</div>
                    <div className='title_singer'>{song.artist}</div>
                </div>

                <div className='content_album'>
                    {song?.album ?? 'Album'}
                </div>
            </div>

            <div className='length'>{song.length}</div>
            <div className='button'>
                <div className='icon'>
                    <FavIcons liked={song.liked} onClick = {()=> dispatch(actions.SongAction.fetchFavSongs(song.id)) }/>
                    <PlayingIcons playing={song.playing} onClick = {()=> dispatch(actions.SongAction.fetchPlayingSongs(song.id)) }/>
                </div>
            </div>
        </div>
    )
}

export default SongRow