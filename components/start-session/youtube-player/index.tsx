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
      <div className="h-[40vh] bg-red-800">
        <YouTube
          videoId="ywZlrdtO_dM"
          opts={opts}
          onReady={onPlayerReady}
          className="h-full"
          key="player"
        />
      </div>
    </>
  );
}
