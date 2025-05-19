function App() {
  return (
    <div className="py-12 h-screen w-screen overflow-y-auto flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-center">
        Persistent Echo
      </h1>
      <h2 className="mt-6 text-5xl md:text-8xl font-display font-bold text-center">
        Age Of Blocks
      </h2>
      <div className="mt-8 flex items-center gap-8">
        <img
          src="/images/backhand-index-pointing-right.png"
          className="w-16"
        />
        <a
          href="https://store.steampowered.com/app/1700440/Age_Of_Blocks/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/steam.png"
            alt="Steam"
            className="w-48 rounded"
          />
        </a>
        <img
          src="/images/backhand-index-pointing-right.png"
          className="w-16 scale-x-[-1]"
        />
      </div>
      <iframe
        allowFullScreen
        src="https://www.youtube.com/embed/93KAK6Rpwfc?si=CKghe4YFBkYy9vFD"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="mt-16 px-2 max-w-xl w-full aspect-video"
      />
    </div>
  )
}

export default App
