import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import {Room}  from "./Room";

export const Landing = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        // MediaStream
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        setLocalAudioTrack(audioTrack);
        setlocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack])
        videoRef.current.play();
        // MediaStream
    }

    useEffect(() => {
        if (videoRef && videoRef.current) {
            getCam()
        }
    }, [videoRef]);

    if (!joined) {
            
    return <div className="main">
        <div>
        <h1 className="s-1">Omegle 2.0</h1>
        <h1 className="s-2">Connect, Chat, Discover</h1>
        <div className="localVideo">
            <video autoPlay width={300} height={300}  ref={videoRef}></video>
            </div>
            <div className="submit">
            <input type="text" placeholder="Enter your name" className="input" onChange={(e) => {
                setName(e.target.value);
            }}>
            </input>
            <button onClick={() => {
                setJoined(true);
            }}>Join</button>
            </div>
            </div>
        </div>
    }

    return <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack} />
}