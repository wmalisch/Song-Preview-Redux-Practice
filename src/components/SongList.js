import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
renderList() {
    return this.props.songs.map((song) => {
        return(
            <div className='item' key={song.title}>
                <div className='right floated content'>
                    <button 
                        className='ui button primary'
                        onClick={() => this.props.selectSong(song)}
                    >
                        Select
                    </button>
                </div>
                <div className='content'>{song.title}</div>
            </div>
        )
    })
}

    render(){
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}


export default connect(   // automatically looks at functions in first parameter, wraps them into one js function
    mapStateToProps,      // when we call the next function, connect func auto calls action creator(that being the second argument), auto take action returned
    { selectSong: selectSong }  // and then auto call dispatch for us. This is why we pass action creator into connect func
    )(SongList);
