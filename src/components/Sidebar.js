export default function SideBar({ songObject, onSideItem }) {
  return (
    <div className='sidebar'>
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <svg className='navbar__icon'>
              <use href='src/img/newicons.svg#icon-home'></use>
            </svg>
            <a href='#' className='navbar__link'>
              Home
            </a>
          </li>
          <li className='navbar__item'>
            <svg className='navbar__icon'>
              <use href='src/img/newicons.svg#icon-music'></use>
            </svg>
            <a href='#' className='navbar__link'>
              Songs
            </a>
          </li>
        </ul>
      </nav>
      <div className='songs'>
        <ul className='songs__list'>
          {songObject.map(song => (
            <SongItem song={song} key={song.songName} onSideItem={onSideItem} />
          ))}
        </ul>
      </div>

      <p className='copyright'>&copy; Aditya Dhamanekar</p>
    </div>
  );
}

function SongItem({ song, onSideItem }) {
  return (
    <li
      className='songs__item'
      onClick={() => onSideItem(parseInt(song.songImage.match(/\d+/)[0]))}
    >
      <figure className='songs__fig'>
        <img src={song.songImage} alt='Test' />
      </figure>
      <div className='songs__data'>
        <h4 className='songs__title'>{song.songName}</h4>
        <p className='songs__artist'>sonu nigam</p>
      </div>
    </li>
  );
}
