import { URLModal } from './Tunnel'

export function ABTesting() {
  return (
    <div className='mb-6 md:flex md:items-center'>
      <div className='md:w-1/3'>
        <label className='mb-1 block pr-4 text-gray-500 md:mb-0 md:text-right' htmlFor='inline-full-name'>
          <div className='inline-block text-sm'>AB Testing</div>
        </label>
      </div>
      <div className='md:w-2/3'>
        <div>
          <button
            onClick={() => {
              //
            }}
            className=' focus:shadow-outline mr-2 inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none'
          >
            +
          </button>
          {/* {<URLModal></URLModal>} */}
        </div>
        {/*  */}
      </div>
    </div>
  )
}
