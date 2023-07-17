import { create } from 'zustand'

export const useSlug = create(() => {
  let url = `/api/slug`
  return {
    slugs: [],
    create: ({ object = {} }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'create',
              payload: {
                object: object,
              },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    find: () => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'find',
              payload: {},
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
    updateOne: ({ object }) => {
      try {
        return (
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              action: 'updateOne',
              payload: { object },
            }),
            withCredentials: true,
            credentials: 'same-origin',
            mode: 'same-origin',
          })
            //
            .then(async (r) => {
              if (r.ok) {
                return await r.json()
              } else {
                throw await r.text()
              }
            })
            //
            .then((r) => {
              return r.data
            })
        )
      } catch (e) {
        console.error(e)
      }
    },
  }
})
