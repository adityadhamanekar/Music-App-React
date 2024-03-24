import { useState } from "react";

export default function Main({ songObject, currentSongIndex, audioIndex }) {
  const [openBanner, setOpenBanner] = useState(true);

  function handleOpenBanner() {
    setOpenBanner(open => !open);
  }
  return (
    <main className='main'>
      <section className='covers'>
        <img
          src='src/covers/1.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/21.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/23.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/22.jpg'
          alt='cover photo'
          className='covers__photo'
        />
      </section>

      <section className='main__banner'>
        <div className='main__background'>
          <svg className='banner__open' onClick={handleOpenBanner}>
            <use href='src/img/new.svg#icon-chevron-thin-down'></use>
          </svg>
          <svg className='main__icon'>
            <use href='src/img/newicons.svg#icon-headphones'></use>
          </svg>
          <div
            className='banner__detail'
            style={
              openBanner
                ? { top: "0", opacity: "1" }
                : { top: "-100%", opacity: "0" }
            }
          >
            <img
              src={`src/covers/${audioIndex}.jpg`}
              alt=''
              className='banner__photo'
            />
            <div className='banner__songname'>
              {songObject[audioIndex - 1]?.songName}
            </div>
            <p className='banner__artist'>
              {songObject[audioIndex - 1]?.artist}
            </p>
            <svg className='banner__close' onClick={handleOpenBanner}>
              <use href='src/img/new.svg#icon-chevron-thin-up'></use>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
