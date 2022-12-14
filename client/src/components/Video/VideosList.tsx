import React from 'react';
import Video from "./Video";
import './VideoList.scss'
import {PreviewVideoModel} from "../../Models";

interface VideosListProps {
    videos: Array<PreviewVideoModel>,
    display: 'block' | 'flex',
}

const VideosList = (props: VideosListProps) => {
    const styles = 'video-list ' + 'video-list_' + props.display
    return (
        <div className={styles}>
            {props.videos.map(video => <Video video={video} key={video._id} />)}
        </div>
    );
};

export default VideosList;