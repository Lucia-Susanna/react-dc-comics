const Main = (prop) => {
  const comics = prop.comics
  return (
    <main>
      <div className="container">
        <div className="cardContainer">
          {
            comics.map(comic => (
              <div className="card">
                <div className="cover">
                  <img src={comic.thumb} alt={comic.title} />
                </div>
                <div className="title">
                  <p>{comic.series}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Main
