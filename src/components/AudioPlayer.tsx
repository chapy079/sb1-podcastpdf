import React from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

interface AudioPlayerProps {
  audioUrl: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return (
    <div className="mt-6">
      <audio src={audioUrl} controls className="w-full" />
      <div className="flex justify-center mt-4 space-x-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <SkipBack size={20} />
        </button>
        <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
          <Play size={20} />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <SkipForward size={20} />
        </button>
      </div>
    </div>
  )
}

export default AudioPlayer