import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        { title: 'Good Times Bad Times', duration: '4:05'},
        { title: 'Thunderstruck', duration: '3:47' },
        { title: 'Texas Flood', duration: '6:51' },
        { title: 'Lenny', duration: '9:29' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
