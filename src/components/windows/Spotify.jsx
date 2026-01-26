import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowsState, minimizedWindows, setMinimizedWindows }) => {
    return (
        <MacWindow width='25vw'  windowName={windowName} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E4wYjfS23t103?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify;