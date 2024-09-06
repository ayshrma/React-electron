import { useState } from "react"
export default function FullScreenComponent() {
    const [isFullscreen, setFullscreen] = useState(false)
  
    const makeFullscreen = () => {
      setFullscreen(true)
      document.documentElement.requestFullscreen()
    }
  
    const closeFullscreen = () => {
      setFullscreen(false)
      document.exitFullscreen()
    }
  
    console.log(isFullscreen)
    return (
      <div
        className={`flex flex-col items-center justify-center w-full h-screen ${
          isFullscreen ? "bg-black" : ""
        }`}
      >
        <div
          className={`w-5/6 space-y-6 text-center wrapper ${
            isFullscreen ? "hidden" : "visible"
          }`}
        >
          <button
            onClick={makeFullscreen}
            className={`btn btn-primary ${!isFullscreen ? "visible" : "hidden"}`}
          >
            FUll Screen
          </button>
        </div>
        <button
          onClick={closeFullscreen}
          className={`btn btn-accent ${isFullscreen ? "visible" : "hidden"}`}
        >
          Small screen
        </button>
      </div>
    )
  }
  