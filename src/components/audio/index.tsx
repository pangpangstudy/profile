import { useRef, useState } from "react";
import music from "../../assets/music.mp3";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";
type Props = {};

function Audio({}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleToggleAudio()}
        className="fixed top-4 right-4 h-12 w-12 p-2 border border-red-600 flex justify-center items-center rounded-full cursor-pointer z-20"
      >
        {isPlaying ? (
          <MdOutlineMusicNote color="#d7c526" className="w-full h-full" />
        ) : (
          <MdOutlineMusicOff color="#d7c526" className="w-full h-full" />
        )}
      </button>
      <audio ref={audioRef} src={music} />
    </div>
  );
}

export default Audio;
