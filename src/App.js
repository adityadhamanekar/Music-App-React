import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const songObject = [
  { songName: "heat wave", songImage: "../src/covers/1.jpg" },
  { songName: "i dont care at all", songImage: "../src/covers/2.jpg" },
  { songName: "dispacito", songImage: "../src/covers/3.jpg" },
  { songName: "harley in hawai", songImage: "../src/covers/4.jpg" },
  { songName: "middle of the night", songImage: "../src/covers/5.jpg" },
  { songName: "spaceSong", songImage: "../src/covers/6.jpg" },
  { songName: "take me to the church", songImage: "../src/covers/7.jpg" },
  { songName: "playdate", songImage: "../src/covers/8.jpg" },
  { songName: "aake dekh le", songImage: "../src/covers/9.jpg" },
  { songName: "let me love you", songImage: "../src/covers/10.jpg" },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(`../src/Songs/${currentSongIndex}.mp3`));
  const [currentTime, setCurrentTime] = useState(0);

  const [progressBarValue, setProgressBarValue] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setProgressBarValue(
      e => (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  function handleChangeProgressBar(e) {
    setProgressBarValue(e.target.value);

    audioRef.current.currentTime =
      (progressBarValue * audioRef.current.duration) / 100;
  }

  function handleNextSong() {
    if (currentSongIndex < 10) setCurrentSongIndex(i => i + 1);
    else setCurrentSongIndex(1);

    // audioRef.current.src = `../src/Songs/${currentSongIndex}.mp3`;
    audioRef.current.play();
    setIsPlaying(true);
  }

  audioRef.current.addEventListener("ended", () => {
    setProgressBarValue(0);
    if (currentSongIndex < 10) setCurrentSongIndex(i => i + 1);
    else setCurrentSongIndex(1);
    audioRef.current.play();
    setIsPlaying(true);
  });

  function handlePreviosSong() {
    if (currentSongIndex > 1) setCurrentSongIndex(i => i - 1);
    else setCurrentSongIndex(10);
    audioRef.current.src = `../src/Songs/${currentSongIndex}.mp3`;
    audioRef.current.play();
    setIsPlaying(true);
  }

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  function handleOnClickSideItem(id) {
    setCurrentSongIndex(id);
    audioRef.current.src = `../src/Songs/${id}.mp3`;
    audioRef.current.play();
    setIsPlaying(true);
  }

  return (
    <div className='container'>
      <Header />
      <SideBar songObject={songObject} onSideItem={handleOnClickSideItem} />
      <Main />
      <Footer
        onTogglePlay={handleTogglePlay}
        isPlaying={isPlaying}
        onNextSong={handleNextSong}
        onPreviosSong={handlePreviosSong}
        onProgressBarChange={handleChangeProgressBar}
        progressBarValue={progressBarValue}
      />
    </div>
  );
}
