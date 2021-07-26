import React from 'react';
import { connect } from 'react-redux';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import "./Videos.scss";
import { deleteVideo } from '../../ActionCreators';
import { FaDownload, FaTrash } from 'react-icons/fa';

const Videos = (props) => {

    const downloadVideo = (video) => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = video;
        a.download = `Video-${Date.now()}.webm`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(video);
        }, 100);
    }

    return (
        <div className="list">
        {props.videos.length < 1 
            ? <h2>No Recorded Videos</h2>
            : <div className="players-list">
                {props.videos.map((video,i) => 
                    <div className="player-btns" key={i}>
                        <div className="btn_list">
                            <button className="record_btn" onClick={() => props.deleteVideo(video)}>
                                <FaTrash />
                            </button>
                            <button className="record_btn" onClick={() => downloadVideo(video)}>
                                <FaDownload />
                            </button>
                        </div>
                        <Player className="player" src={video}/>
                    </div>
                    
                )}
              </div>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { videos: state.videosData }
}

export default connect(mapStateToProps, { deleteVideo })(Videos);