const getID = () => {
  return '_' + Math.random().toString(36).slice(2, 9)
}
//

export const getMenuItems = () => {
  return [
    {
      id: getID(),
      link: '/admin',
      content: (
        <>
          <svg className='mr-1' width='24' height='24' viewBox='0 0 24 24'>
            <path d='M20.021 12.593c-.141-.427-.314-.844-.516-1.242l-2.454 1.106c.217.394.39.81.517 1.242l2.453-1.106zm-12.573-.903c.271-.354.58-.675.919-.957l-1.89-1.969c-.328.294-.637.615-.918.957l1.889 1.969zm1.715-1.515c.379-.221.781-.396 1.198-.523l-1.034-2.569c-.41.142-.812.318-1.198.524l1.034 2.568zm-2.759 3.616c.121-.435.288-.854.498-1.25l-2.469-1.066c-.197.403-.364.822-.498 1.25l2.469 1.066zm9.434-6.2c-.387-.205-.79-.379-1.2-.519l-1.024 2.573c.417.125.82.299 1.2.519l1.024-2.573zm2.601 2.13c-.282-.342-.59-.663-.918-.957l-1.89 1.969c.339.282.647.604.918.957l1.89-1.969zm-5.791-3.059c-.219-.018-.437-.026-.649-.026s-.431.009-.65.026v2.784c.216-.025.434-.038.65-.038.216 0 .434.012.649.038v-2.784zm-.648 14.338c-1.294 0-2.343-1.049-2.343-2.343 0-.883.489-1.652 1.21-2.051l1.133-5.606 1.133 5.605c.722.399 1.21 1.168 1.21 2.051 0 1.295-1.049 2.344-2.343 2.344zm12-6c0 2.184-.586 4.233-1.61 5.999l-1.736-1.003c.851-1.471 1.346-3.174 1.346-4.996 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 1.822.495 3.525 1.346 4.996l-1.736 1.003c-1.024-1.766-1.61-3.815-1.61-5.999 0-6.617 5.383-12 12-12s12 5.383 12 12z' />
          </svg>
          Dashboard
        </>
      ),
    },
    {
      id: getID(),
      link: '/admin/pages',
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
            <path d='M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z' />
          </svg>
          My Pages
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
