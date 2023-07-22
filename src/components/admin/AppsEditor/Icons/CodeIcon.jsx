import { useApps } from '../../Apps/useApps'
import { Highlight } from './Highlight'

export function CodeIcon() {
  let tabName = 'code'
  let tabDisplayName = 'Code'
  return (
    <div
      onClick={() => {
        //
        useApps.setState({ activeTab: tabName })
      }}
      className=' mx-1 flex  cursor-pointer flex-col items-center justify-center '
    >
      <div
        className='flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-inner shadow-gray-300'
        style={{
          width: '55px',
          height: '55px',
        }}
      >
        <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
          <path d='M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z' />
        </svg>
        <div className='text-xs'>{tabDisplayName}</div>
      </div>
      <Highlight tabName={tabName}></Highlight>
    </div>
  )
}