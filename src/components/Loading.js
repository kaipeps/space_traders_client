import { useEffect, useState } from "react"

export default function Loading() {
  const [loadingText, setLoadingText] = useState('Loading')
  useEffect(() => {
    if (loadingText === 'Loading...') {
      setTimeout(() => setLoadingText('Loading'), 750)
    } else {
      setTimeout(() => setLoadingText(loadingText + '.'), 750)
    }
  }, [loadingText])
  return (
    <div className="Loading">
      <h1 className="load-text">{loadingText}</h1>
    </div>
  )
}