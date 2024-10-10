import React, { useState } from 'react'
import { Upload, FileText, Headphones, Loader } from 'lucide-react'
import FileUpload from './components/FileUpload'
import AudioPlayer from './components/AudioPlayer'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile)
    setAudioUrl(null)
  }

  const handleConvert = async () => {
    if (!file) return

    setLoading(true)
    try {
      // TODO: Implement file conversion and Groq API integration
      // This is a placeholder for the actual conversion process
      await new Promise(resolve => setTimeout(resolve, 2000))
      setAudioUrl('https://example.com/sample-audio.mp3')
    } catch (error) {
      console.error('Error converting file:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">PDF to Podcast Converter</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <FileUpload onFileUpload={handleFileUpload} />
        {file && (
          <div className="mt-4">
            <p className="flex items-center">
              <FileText className="mr-2" size={20} />
              {file.name}
            </p>
            <button
              onClick={handleConvert}
              disabled={loading}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full flex items-center justify-center"
            >
              {loading ? (
                <Loader className="animate-spin mr-2" size={20} />
              ) : (
                <Headphones className="mr-2" size={20} />
              )}
              {loading ? 'Converting...' : 'Convert to Audio'}
            </button>
          </div>
        )}
        {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      </div>
    </div>
  )
}

export default App