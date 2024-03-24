import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const songObject = [
  {
    songName: "heat wave",
    songImage: "../src/covers/1.jpg",
    artist: "Glass Animals",
  },
  {
    songName: "i dont care at all",
    songImage: "../src/covers/2.jpg",
    artist: "Cecilia Krull",
  },
  {
    songName: "Wanna be yours",
    songImage: "../src/covers/3.jpg",
    artist: "Arctic Monkeys",
  },
  {
    songName: "The lost soul down",
    songImage: "../src/covers/4.jpg",
    artist: "DJ Davion",
  },

  {
    songName: "A man without love",
    songImage: "../src/covers/5.jpg",
    artist: "Engelbert Humperdinck",
  },
  {
    songName: "The night we met",
    songImage: "../src/covers/6.jpg",
    artist: "Lord Huron",
  },
  {
    songName: "Perfect",
    songImage: "../src/covers/7.jpg",
    artist: "Ed Sheeran",
  },
  {
    songName: "playdate",
    songImage: "../src/covers/8.jpg",
    artist: "Melanie Martinez",
  },
  { songName: "Death bed", songImage: "../src/covers/9.jpg", artist: "Powfu" },
  {
    songName: "Until I found you",
    songImage: "../src/covers/10.jpg",
    artist: "Stephen Sanchez",
  },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(`../src/Songs/${currentSongIndex}.mp3`));
  const [currentTime, setCurrentTime] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(open => !open);
  }

  const [progressBarValue, setProgressBarValue] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setProgressBarValue(
      e => (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  let audioIndex = parseInt(
    audioRef.current.src
      .slice(audioRef.current.src.lastIndexOf("/"))
      .match(/\d+/)[0]
  );

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
    audioRef.current.src = `../src/Songs/${currentSongIndex}.mp3`;
    setIsPlaying(true);
    audioRef.current.play();
  }

  useEffect(() => {
    const handleSongEnd = () => {
      setProgressBarValue(0);
      setCurrentSongIndex(prevIndex => prevIndex + 1);
      audioRef.current.currentTime = 0;
      handleNextSong();
    };
    audioRef.current.addEventListener("ended", handleSongEnd);
    return () => {
      audioRef.current.removeEventListener("ended", handleSongEnd);
    };
  }, [audioRef, setCurrentSongIndex, handleNextSong]);

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
    setIsOpen(open => !open);
  }

  return (
    <div className='container'>
      <Header handleIsOpen={handleIsOpen} isOpen={isOpen} />
      <div className='side-main'>
        <SideBar
          songObject={songObject}
          onSideItem={handleOnClickSideItem}
          isOpen={isOpen}
        />
        <Main
          songObject={songObject}
          currentSongIndex={currentSongIndex}
          audioIndex={audioIndex}
        />
      </div>
      <Footer
        onTogglePlay={handleTogglePlay}
        isPlaying={isPlaying}
        onNextSong={handleNextSong}
        onPreviosSong={handlePreviosSong}
        onProgressBarChange={handleChangeProgressBar}
        progressBarValue={progressBarValue}
        audioRef={audioRef}
      />
    </div>
  );
}
