import React, {useEffect} from 'react';
import './Video.scss'
import {VideoModel} from "../../Models";
import {Link, useLocation} from "react-router-dom";

interface VideoProps {
    video: VideoModel
}

const Video = (props: VideoProps) => {
    let location = useLocation()
    useEffect(() => {window.scrollTo(0,0)}, [location])
    return (
        <div className='video'>
            <img className='video__image' src={props.video.image}/>
            <img className='video__author-image' src={props.video.UserImage} />
            <div className='video-info'>
                <p className='video-info__author'>{props.video.UserName}</p>
                <Link to={`/video/${props.video._id}`} className='video-info__title'>{props.video.title}</Link>
                <p className='video-info__statistic'>{props.video.VideoInfo}</p>
                <p className='video-info__duration'>{props.video.duration} min</p>
            </div>
        </div>
    );
};

export default Video;