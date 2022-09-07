import './List.scss'
import {useSelector} from "react-redux";
import * as ReactRedux from 'react-redux';
import SongRow from "./SongRow";


const PlayList = () =>{
    let songs = useSelector(state => state?.SongReducer?.SongList)
    return <div className='ListContainer'>
        <div className='songList'>
            <div className='list'>
                <div className='listRow title'>Play List</div>
                <div className='listRow'>
                    {
                        songs.filter(s => s.checked).map((s, index) => <SongRow key={index} song={s}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default PlayList