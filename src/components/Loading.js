import { useEffect, useState } from "react"

export default function Loading() {
  const [loadingText, setLoadingText] = useState('Loading')
  useEffect(() => {
    setInterval(() => setLoadingText(loadingText + '.'), 200)
  })
  return (
    <div className="Loading">
      <h1 className="load-text">{loadingText}</h1>
    </div>
  )
}