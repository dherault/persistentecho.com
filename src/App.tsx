function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col items-center justify-center">
      <h1 className="-mt-4 text-3xl md:text-4xl font-display font-bold text-center">
        Persistent Echo
      </h1>
      <h2 className="mt-7 text-5xl md:text-8xl font-display font-bold text-center">
        Age Of Blocks
      </h2>
      <a
        href="https://store.steampowered.com/app/1700440/Age_Of_Blocks/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/steam.png"
          alt="Steam"
          className="mt-8 w-48 rounded"
        />
      </a>
    </div>
  )
}

export default App
