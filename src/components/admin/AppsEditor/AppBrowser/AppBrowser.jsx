import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useCoreFiles } from '../FileBrowser/useCoreFiles'

export function AppBrowser() {
  let router = useRouter()
  let { appID } = router.query
  let iframeEl = useRef()
  let [src, setSRC] = useState(`/admin/editor-runner/${appID}`)
  useEffect(() => {
    if (!appID) {
      return
    }

    let bc = new BroadcastChannel(appID)

    window.addEventListener('savedFile', () => {
      let st = useCoreFiles.getState()
      try {
        if (bc.closed) {
          return
        }

        bc.postMessage({ type: 'run', files: st, snap: Math.ceil(Math.random() * 100000) })
      } catch (e) {
        console.log(e)
      }
    })

    return () => {
      bc.closed = true
      bc.onmessage = () => {}
      bc.close()
    }
  }, [appID, iframeEl])
  return (
    <>
      {/*  */}
      <iframe ref={iframeEl} src={src} style={{ width: '100%', height: '100%' }} />
      {/*  */}
    </>
  )
}
