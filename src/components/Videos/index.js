import React from 'react';
import { connect } from 'react-redux';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import "./Videos.scss";

const Videos = (props) => {
    return (
        <div className="list">
        {props.videos.length < 1 
            ? <h2>No Recorded Videos</h2>
            : <div className="players-list">
                {props.videos.map((video,i) => 
                    <Player className="player" src={video} key={i}/>
                )}
              </div>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { videos: state.videosData }
}

export default connect(mapStateToProps)(Videos);