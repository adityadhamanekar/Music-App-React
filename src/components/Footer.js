export default function Footer({
  onTogglePlay,
  isPlaying,
  onNextSong,
  onPreviosSong,
  onProgressBarChange,
  progressBarValue,
}) {
  return (
    <footer className='song'>
      <div className='song__info'>
        <figure className='song__cover'></figure>
        <div className='song__media'>
          <p className='song__name'>tere hawale kar diya</p>
          <span className='song__artist'>arijit singht</span>
        </div>
      </div>
      <div className='song__function'>
        <div className='song__buttons'>
          <div className='song__btn'>
            <svg className='song__icons'>
              <use href='src/img/newicons.svg#icon-loop'></use>
            </svg>
          </div>

          <div className='song__btn'>
            <svg className='song__icons song__previous'>
              <use
                href='src/img/newicons.svg#icon-previous2'
                onClick={onPreviosSong}
              ></use>
            </svg>
          </div>
          <Button
            className={isPlaying ? "pause" : "play"}
            imageName={isPlaying ? "pause2" : "play3"}
            onTogglePlay={onTogglePlay}
          />

          <div className='song__btn'>
            <svg className='song__icons song__next' onClick={onNextSong}>
              <use href='src/img/newicons.svg#icon-next2'></use>
            </svg>
          </div>

          <div className='song__btn'>
            <svg className='song__icons'>
              <use href='src/img/newicons.svg#icon-shuffle'></use>
            </svg>
          </div>
        </div>
        <div className='song__playbar'>
          <input
            type='range'
            min='0'
            value={progressBarValue}
            max='100'
            onChange={e => onProgressBarChange(e)}
            onClick={e => onProgressBarChange(e)}
            className='song__range'
          />
        </div>
      </div>

      <div className='song__features'>
        <svg className='song__mute'>
          <use href='src/img/newicons.svg#icon-volume-medium'></use>
        </svg>
        <input type='range' className='song__volume' />
      </div>
    </footer>
  );
}

function Button({ className, imageName, onTogglePlay }) {
  return (
    <div className='song__btn'>
      <svg className={`song__icons song__` + { className }}>
        <use
          href={`src/img/newicons.svg#icon-${imageName}`}
          onClick={onTogglePlay}
        ></use>
      </svg>
    </div>
  );
}