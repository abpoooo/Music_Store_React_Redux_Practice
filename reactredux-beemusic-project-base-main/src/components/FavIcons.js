
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


const FavIcons = ({liked, ...rest}) => {
    return(
        <div className='icon' {...rest}>
            {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
        </div>
    )
}

const CheckedIcons = ({checked, ...rest}) => {
    return(
        <div className='icon' {...rest}>
            {checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </div>
    )
}
const PlayingIcons = ({playing, ...rest}) => {
    return(
        <div className='icon' {...rest}>
            {playing ? <img width='28px' src="img/playing.gif" alt=""/> : <PlayCircleFilledWhiteIcon/>}
        </div>
    )
}

export {
    FavIcons,
    CheckedIcons,
    PlayingIcons
}