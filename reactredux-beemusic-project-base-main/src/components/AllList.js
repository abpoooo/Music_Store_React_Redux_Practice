
import './List.scss'
import {useSelector} from "react-redux";
import * as ReactRedux from 'react-redux';
import SongRow from "./SongRow";


const AllList = () =>{
    let songs = useSelector(state => state?.SongReducer?.SongList)
    console.log(songs)
    return <div className='ListContainer'>
        <div className='songList'>
            <div className='list'>
                <div className='listRow title'>All List</div>
                <div className='listRow'>
                    {
                        songs.map((s, index) => <SongRow key={index} song={s}/>)
                    }
                </div>

            </div>
        </div>
    </div>
}

export default AllList