const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}
//

export const getMenuItemsAdminDev = () => {
  return [
    {
      id: getID(),
      link: '/admin/swan',
      content: (
        <>
          <svg
            className='mr-1'
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path d='M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z' />
          </svg>
          Code Projects
        </>
      ),
    },

    //
    // {
    //   id: getID(),
    //   link: '/admin/swan',
    //   content: (
    //     <>
    //       <svg className='mr-1 h-5 w-5' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    //         <path
    //           fill='#000000'
    //           d='M372.67 44.934c-50.275.005-92.476 43.57-38.934 163.87 29.137 16.804 41.594 46.767 33.48 74.848-9.168 31.735-42.353 59.517-96.597 68.084-45.02 7.11-88.46 2.42-122.915-22.218-14.895-10.65-27.867-24.905-38.502-43.088-26.314-8.87-48.678-17.086-61.224-23.25-.197 10.192 1.916 21.786 6.594 33.963l-35.842-4.432L70.87 332.49 43.92 344.385l53.35 11.676c10.984 9.717 23.94 18.99 39.07 27.38l-.002.007c26.098 14.475 195.407 11.62 218.51.578 67.333-32.17 71.596-90.7 28.552-167.472-57.378-102.34-31.747-134.085 3.034-133.07.93 10.53 6.27 21.943 15.593 31.288 5.74 5.757 12.266 9.993 18.886 12.623 19.37 11.416 38.896 19.675 62.072 20.81 5.712.08 9.144-9.696 3.487-10.238-11.602-2.262-21.402-8.37-29.352-15.912 11.712-12.976 7.85-36.605-8.994-53.49-11.038-11.06-24.963-16.53-36.898-15.692-12.41-5.107-25.747-7.938-38.562-7.936zm56.598 37.433c6.16 0 10.95 4.793 10.95 10.953 0 6.157-4.79 10.95-10.95 10.95-6.16 0-10.954-4.793-10.954-10.95 0-6.156 4.795-10.953 10.954-10.953zm-208.653 118.95c-6.108.034-12.128.27-18.18.607-29.242 1.63-59.597 5.87-101.03 1.365 28.59 40.045 73.354 51.978 116.91 49.04-32.74 15.03-75.678 8.755-108.41-10.848.475 1.48.96 2.94 1.454 4.38 17.087 33.357 62.417 42.17 88.845 42.066-16.554 11.997-42.21 12.406-65.994 2.386 7.334 9.737 15.51 17.67 24.366 24.002 29.323 20.968 67.166 25.59 109.127 18.96 49.298-7.785 74.954-31.945 81.56-54.81 6.607-22.867-3.598-45.977-34.556-58.134-36.452-14.313-63.225-18.523-87.95-18.975-2.06-.037-4.106-.05-6.142-.04zM64.14 378.278c-29.424 5.99-46.933 13.47-46.933 21.588 0 19.668 102.56 35.612 229.072 35.612s229.072-15.944 229.072-35.612c0-8.098-17.424-15.562-46.72-21.545 12.117 3.613 18.923 7.643 18.923 11.895 0 15.515-90.098 28.092-201.24 28.092-111.14 0-201.24-12.577-201.24-28.092 0-4.27 6.858-8.314 19.064-11.938z'
    //         />
    //       </svg>
    //       Swan Studio
    //     </>
    //   ),
    // },
    //
  ]
}
