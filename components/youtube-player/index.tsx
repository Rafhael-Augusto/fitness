"use client";

import YouTube, { YouTubeProps } from "react-youtube";

export function YoutubePlayer() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="h-screen">
        <YouTube
          videoId="KF6CYMgDClM"
          opts={opts}
          onReady={onPlayerReady}
          className="h-1/2"
          key="player"
        />
      </div>
    </>
  );
}
