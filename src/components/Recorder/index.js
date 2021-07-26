import React from 'react';
import { FaStop, FaPlay } from 'react-icons/fa';
import './Recorder.scss';
import { saveVideo } from '../../ActionCreators'; 
import { connect } from 'react-redux';

const videoType = 'video/webm';

class Recorder extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            recording : false,
            videoOn: false
        };
    }

    async startCamera() {
        this.setState({videoOn: true})
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true, 
            audio: {
                echoCancellation: { exact: true }
            }
        });
        this.video.srcObject = stream;
        this.video.play();
        this.mediaRecorder = new MediaRecorder(stream, {
          mimeType: videoType,
        });
        this.chunks = [];
        this.mediaRecorder.ondataavailable = e => {
          if (e.data && e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };
    }

    async stopCamera() {
        if (!this.state.recording){
            this.setState({videoOn: false});
            const mediaStream = this.video.srcObject;
            const tracks = mediaStream.getTracks();
            tracks[0].stop();
        }
    }
    
    startRecording(e) {
        if (this.state.videoOn){
            e.preventDefault();
            this.chunks = [];
            this.mediaRecorder.start(10);
            this.setState({recording: true});
        }
    }

    stopRecording(e) {
        e.preventDefault();
        this.mediaRecorder.stop();
        this.setState({recording: false});
        this.save();
    }

    save() {
        const blob = new Blob(this.chunks, {type: videoType});
        const videoURL = window.URL.createObjectURL(blob);
        this.props.saveVideo(videoURL);
    }

    render() {
        return (
            <>
            <div className="recorder">
                { !this.state.videoOn 
                    ? <button className="record_btn" onClick={(e) => this.startCamera()}>
                        Turn Camera On
                    </button>
                    : <button className="record_btn" onClick={(e) => this.stopCamera()}>
                        Turn Camera Off
                    </button>
                }
                { !this.state.recording  
                    ? <button className="record_btn" onClick={(e) => this.startRecording(e)}>
                        <FaPlay />
                        Start Recording
                    </button>
                    : <button className="record_btn" onClick={(e) => this.stopRecording(e)}>
                        <FaStop />
                        Stop Recording
                    </button>
                }
            </div>
            <div className="video">
                { this.state.videoOn
                    ? <video muted="muted" ref={v => {this.video = v;}} >
                        Video stream not available.
                    </video>
                    : ""
                }
            </div>
            </>
        )
    }
    
}


export default connect(null, { saveVideo })(Recorder);