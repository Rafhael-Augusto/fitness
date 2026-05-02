"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function YoutubePlayer() {
  return (
    <>
      <div className="relative h-[60vh]">
        <LiteYouTubeEmbed
          style={{ height: "100%", width: "100%" }}
          id="opPfvUzfgos"
          title="video number 1"
        />
      </div>
    </>
  );
}
