export default function Main() {
  return (
    <main className='main'>
      <section className='covers'>
        <img
          src='src/covers/1.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/2.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/3.jpg'
          alt='cover photo'
          className='covers__photo'
        />
        <img
          src='src/covers/4.jpg'
          alt='cover photo'
          className='covers__photo'
        />
      </section>

      <section className='main__banner'>
        <div className='main__background'>
          <svg className='main__icon'>
            <use href='src/img/newicons.svg#icon-headphones'></use>
          </svg>
        </div>
      </section>
    </main>
  );
}
