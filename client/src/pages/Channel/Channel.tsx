import React, {useEffect, useState} from 'react';
import ChannelHeader from "./ChannelHeader";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {StateModel} from "../../Models";
import {fetchChannelVideos} from "../../redux/actions";
import ChannelVideoList from "../../components/Video/ChannelVideoList";
import useActionForFetchVideo from "../../hooks/useActionForFetchVideo";
import sendFetch from "../../utils/sendFetch";


const Channel = () => {

    const dispatch = useDispatch()
    const {channelId} = useParams<string>()
    const channelVideos = useSelector((state: StateModel) => state.channel.channelVideos)

    useEffect(() => {
        dispatch(fetchChannelVideos(channelId))
    }, [])


    if (channelVideos.videos?.length == 0) {
        channelVideos.videos = null
    }

    return (
        <div className='container'>
            <ChannelHeader />
            <div>
                {channelVideos.videos ? <ChannelVideoList videos={channelVideos.videos} display="flex" /> : <p className='not-found'>Видео нет</p>}
            </div>


        </div>
    );
};

export default Channel;