export default function Header({ handleIsOpen , isOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <header className='header'>
      <div className='header__logo'>
        <div className='header__background'>
          <svg className='header__icon'>
            <use href='src/img/newicons.svg#icon-headphones'></use>
          </svg>
        </div>
        <p className='header__webname'>Musify</p>
      </div>
      <form className='search' onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          className='search__field'
          placeholder='Listen over 1,000 songs...'
        />
        <button className='btn search__btn'>
          <svg className='search__icon'>
            <use href='src/img/icons.svg#icon-search'></use>
          </svg>
          <span>Search</span>
        </button>
      </form>
      <div className='app-btn' onClick={handleIsOpen}>
        <svg className='app-icon'>
          <use href={`src/img/app.svg#icon-${isOpen ? "menu" : "close"}`}></use>
        </svg>
      </div>
    </header>
  );
}
