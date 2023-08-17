import { unzip, setOptions } from 'unzipit'
import { useEffect, useState } from 'react'

export function FileUploader() {
  let [data, setData] = useState([])
  useEffect(() => {
    const dropElem = document.querySelector('#drop')
    document.body.addEventListener('dragenter', function () {})
    document.body.addEventListener('dragexit', function () {})
    document.body.addEventListener(
      'dragover',
      function (ev) {
        ev.preventDefault()
      },
      { passive: false },
    )

    document.body.addEventListener(
      'drop',
      function (ev) {
        ev.preventDefault()

        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          ;[...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === 'file') {
              const file = item.getAsFile()
              unzipFile(file)
            }
          })
        } else {
          // Use DataTransfer interface to access the file(s)
          ;[...ev.dataTransfer.files].forEach((file, i) => {
            unzipFile(file)
          })
        }
      },
      { passive: false },
    )

    async function unzipFile(file) {
      const { entries } = await unzip(file)

      let array = []
      for (const [name, entry] of Object.entries(entries)) {
        if (entry.isDirectory) {
          console.log('directory entry', name)
        } else {
          if (name.indexOf('__MACOSX') !== -1) {
            continue
          }
          if (name.indexOf('.DS_Store') !== -1) {
            continue
          }
          const blob = await entry.blob()
          // just print the sizes
          console.log('file', name, blob, 'size:', entry.size, 'compressed size:', entry.compressedSize)
          array.push({
            name,
            blob,
          })
        }
      }
      setData(array)
    }

    setOptions({
      numWorkers: 4,
    })
  }, [])
  return (
    <div className='h-96 w-96'>
      {/*  */}
      <div id='drop' className='h-full w-full bg-gray-200'>
        Drop Files here....
        {data.map((r, ridx) => {
          return <div key={r.name + ridx}>{r.name}</div>
        })}
      </div>

      {/*  */}
    </div>
  )
}