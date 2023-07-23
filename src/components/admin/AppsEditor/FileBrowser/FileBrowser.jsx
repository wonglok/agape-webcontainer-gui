/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Input, Tree } from 'antd'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useApps } from '../../Apps/useApps'
import { usePackages } from '../../Apps/usePackages'
import { useModules } from '../../Apps/useModules'
import { useCodeGroups } from '../../Apps/useCodeGroups'
import { useOSFiles } from './useOSFiles'
import { useCodeFiles } from '../../Apps/useCodeFiles'

//
export function FileBrowser() {
  let activeApp = useApps((r) => r.activeApp)
  let appPackages = useOSFiles((r) => r.appPackages)
  let appModules = useOSFiles((r) => r.appModules)
  let appCodeGroups = useOSFiles((r) => r.appCodeGroups)
  let appCodeFiles = useOSFiles((r) => r.appCodeFiles)

  let activePackageID = useOSFiles((r) => r.activePackageID)
  let activeModuleID = useOSFiles((r) => r.activeModuleID)
  let activeCodeGroupID = useOSFiles((r) => r.activeCodeGroupID)
  let activeCodeFileID = useOSFiles((r) => r.activeCodeFileID)

  let load = useCallback(async ({ activeApp }) => {
    let appPackages = await usePackages.getState().findByAppID({ appLoaderID: activeApp._id })
    let appModules = await useModules.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeGroups = await useCodeGroups.getState().findByAppID({ appLoaderID: activeApp._id })
    let appCodeFiles = await useCodeFiles.getState().findByAppID({ appLoaderID: activeApp._id })

    useOSFiles.setState({ appPackages, appModules, appCodeGroups, appCodeFiles })

    return { appPackages, appModules, appCodeGroups, appCodeFiles }
  }, [])

  useEffect(() => {
    if (!activeApp) {
      return
    }

    load({ activeApp }).then(({ appPackages }) => {
      useOSFiles.setState({ activePackageID: appPackages[0]?._id })
    })

    return () => {
      //!SECTION
    }
  }, [activeApp, load])

  useEffect(() => {
    return () => {
      useOSFiles.setState({ appPackages: [], appModules: [], appCodeGroups: [], appCodeFiles: [] })
    }
  }, [])

  let addEmptyPackage = async () => {
    let newAp = await usePackages
      .getState()
      .create({ object: { appLoaderID: activeApp._id, packageName: 'newPackage' } })

    let newM = await useModules.getState().create({
      object: { appLoaderID: activeApp._id, appPackageID: newAp._id, moduleName: 'newModule' },
    })

    let newCG = await useCodeGroups.getState().create({
      object: {
        appLoaderID: activeApp._id,
        appModuleID: newM._id,
        groupName: 'newCodeGroups',
      },
    })

    let newCF = await useCodeFiles.getState().create({
      object: {
        appLoaderID: activeApp._id,
        appCodeGroupID: newCG._id,
        fileName: 'newCode.js',
        content: '',
      },
    })

    // console.log(newCF)
    await load({ activeApp })
  }

  // let removePackage =
  //   ({ ap }) =>

  // let addEmptyModule =

  let addCodeGroup = async () => {
    //
    await useCodeGroups.getState().create({
      object: {
        appLoaderID: activeApp._id,
        appModuleID: activeModuleID,
        groupName: 'newCodeGroups',
      },
    })

    await load({ activeApp })
  }

  let scroller = useRef()
  return (
    <>
      <div className='h-full w-full overflow-scroll bg-white' ref={scroller}>
        <div
          className=''
          style={{ width: `999999vw` }}
          onScrollCapture={(ev) => {
            ev.stopPropagation()
          }}
        >
          <div className='inline-block overflow-scroll' style={{ height: `280px`, width: `280px` }}>
            <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
              <span onClick={addEmptyPackage} className='cursor-pointer underline'>
                + Add Package
              </span>
            </div>

            {appPackages.map((ap, apIDX) => {
              //
              return (
                <div
                  className='group flex items-center px-2'
                  onClick={() => {
                    useOSFiles.setState({ activePackageID: ap._id })
                  }}
                  key={ap._id}
                >
                  {activePackageID === ap._id ? (
                    <>
                      <Input
                        key={ap._id + 'package'}
                        className='mb-1 bg-green-100'
                        defaultValue={ap.packageName}
                        onChange={(ev) => {
                          //

                          let value = ev.target.value
                          ap.packageName = value

                          useOSFiles.setState({ appPackages: [...appPackages] })

                          clearTimeout(ev.target.timer)
                          ev.target.timer = setTimeout(async () => {
                            usePackages.getState().updateOne({ object: ap })
                          }, 1000)
                        }}
                        onFocus={() => {
                          //
                          useOSFiles.setState({
                            activeAppID: activeApp._id,
                            activePackageID: activePackageID,
                            activeModuleID: '', //  am._id,
                            activeCodeGroupID: '', //  acg._id,
                            activeCodeFileID: '', //  acf._id,
                          })
                        }}
                      ></Input>
                    </>
                  ) : (
                    <>
                      <div className='mb-1 w-full rounded-lg border px-2 py-1 text-sm'>
                        {ap.packageName || 'untitled'}
                      </div>
                    </>
                  )}

                  <img
                    key={ap._id + 'del'}
                    className='mb-1 hidden h-6 w-6 group-hover:block'
                    onClick={async () => {
                      //
                      if (window.prompt('remove package?', ap.packageName) === ap.packageName) {
                        await usePackages.getState().deleteOne({ object: ap })
                        useOSFiles.setState({ activePackageID: '' })
                        await load({ activeApp })
                      }
                    }}
                    src={`/gui/remove.svg`}
                  ></img>
                </div>
              )
            })}
          </div>

          <div className='inline-block overflow-scroll overflow-x-hidden' style={{ height: `280px`, width: `280px` }}>
            <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
              <span
                onClick={async () => {
                  //
                  await useModules.getState().create({
                    object: { appLoaderID: activeApp._id, appPackageID: activePackageID, moduleName: 'newModule' },
                  })

                  await load({ activeApp })
                }}
                className='cursor-pointer underline'
              >
                + Add Module
              </span>
            </div>

            {appModules
              .filter((r) => r.appPackageID === activePackageID)
              .map((am) => {
                return (
                  <div key={am._id} className='px-1'>
                    <div className=' group flex items-center '>
                      {activeModuleID === am._id ? (
                        <>
                          <Input
                            key={am._id + 'package'}
                            className='mb-1 bg-green-100'
                            defaultValue={am.moduleName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              am.moduleName = value

                              useOSFiles.setState({ appModules: [...appModules] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useModules.getState().updateOne({ object: am })
                              }, 1000)
                            }}
                          ></Input>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => {
                              //
                              useOSFiles.setState({
                                activeAppID: activeApp._id,
                                activePackageID: activePackageID,
                                activeModuleID: am._id,
                                activeCodeGroupID: '', // acg._id,
                                activeCodeFileID: '', //  acf._id,
                              })
                            }}
                            className='mb-1 w-full rounded-lg border px-2 py-1 text-sm'
                          >
                            {am.moduleName || 'untitled'}
                          </div>
                        </>
                      )}
                      <img
                        key={am._id + 'del'}
                        className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                        onClick={async () => {
                          //
                        }}
                        src={`/gui/remove.svg`}
                      ></img>
                    </div>
                  </div>
                )
              })}
          </div>

          <div className='inline-block overflow-scroll' style={{ height: `280px`, width: `280px` }}>
            <div className=' mb-2 border border-gray-200 bg-gray-100 p-2 text-xs text-gray-500'>
              <span onClick={addCodeGroup} className='cursor-pointer underline'>
                + Add Code Group
              </span>
            </div>

            {appCodeGroups
              .filter((r) => r.appModuleID === activeModuleID)
              .map((acg) => {
                return (
                  <div key={acg._id} className='px-1'>
                    <div className=' group flex items-center '>
                      {/* <Input
                        key={acg._id + 'input'}
                        className='mb-1'
                        defaultValue={acg.groupName}
                        onChange={(ev) => {
                          //

                          let value = ev.target.value
                          acg.groupName = value

                          useOSFiles.setState({ appModules: [...appModules] })

                          clearTimeout(ev.target.timer)
                          ev.target.timer = setTimeout(async () => {
                            useCodeGroups.getState().updateOne({ object: acg })
                          }, 1000)
                        }}
                        onFocus={() => {
                          //
                          useOSFiles.setState({
                            // activeAppID: activeApp._id,
                            // activePackageID: activePackageID,
                            // activeModuleID: am._id,
                            activeCodeGroupID: acg._id,
                            // activeCodeFileID: '',
                          })
                        }}
                      ></Input> */}
                      {activeCodeGroupID === acg._id ? (
                        <>
                          <Input
                            key={acg._id + 'package'}
                            className='mb-1 bg-green-100'
                            defaultValue={acg.moduleName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              acg.moduleName = value

                              useOSFiles.setState({ appModules: [...appModules] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useCodeGroups.getState().updateOne({ object: acg })
                              }, 1000)
                            }}
                          ></Input>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => {
                              //
                              useOSFiles.setState({
                                activeAppID: activeApp._id,
                                activePackageID: activePackageID,
                                activeModuleID: acg._id,
                                activeCodeGroupID: '', // acg._id,
                                activeCodeFileID: '', //  acf._id,
                              })
                            }}
                            className='mb-1 w-full rounded-lg border px-2 py-1 text-sm'
                          >
                            {acg.moduleName || 'untitled'}
                          </div>
                        </>
                      )}
                      <img
                        key={acg._id + 'del'}
                        className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                        onClick={async () => {
                          //
                          if (window.prompt('remove group?', acg.groupName) === acg.groupName) {
                            await useCodeGroups.getState().deleteOne({ object: acg })
                            await load({ activeApp })
                          }
                        }}
                        src={`/gui/remove.svg`}
                      ></img>
                    </div>
                  </div>
                )
              })}
          </div>

          <div className='inline-block overflow-scroll' style={{ height: `280px`, width: `280px` }}>
            <div className='border-l pl-3'>
              <div className=''>
                {appModules
                  .filter((r) => r.appPackageID === activePackageID)
                  .map((am) => {
                    return (
                      <div key={am._id} className=''>
                        {/*  */}
                        {/* <div className='text-xs'>Module</div>
                        <div className=' group flex items-center '>
                          <Input
                            key={am._id + 'input'}
                            className='mb-1'
                            defaultValue={am.moduleName}
                            onChange={(ev) => {
                              //

                              let value = ev.target.value
                              am.moduleName = value

                              useOSFiles.setState({ appModules: [...appModules] })

                              clearTimeout(ev.target.timer)
                              ev.target.timer = setTimeout(async () => {
                                useModules.getState().updateOne({ object: am })
                              }, 1000)
                            }}
                            onFocus={() => {
                              //
                              useOSFiles.setState({
                                activeAppID: activeApp._id,
                                activePackageID: activePackageID,
                                activeModuleID: am._id,
                                activeCodeGroupID: '', // acg._id,
                                activeCodeFileID: '', //  acf._id,
                              })
                            }}
                          ></Input>
                          <img
                            key={am._id + 'del'}
                            className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                            onClick={async () => {
                              //
                              if (window.prompt('remove group?', am.moduleName) === am.moduleName) {
                                await useModules.getState().deleteOne({ object: am })
                                await load({ activeApp })
                              }
                            }}
                            src={`/gui/remove.svg`}
                          ></img>
                        </div> */}

                        <div className='border-l pl-3'>
                          <div className='mt-3 text-xs text-gray-500' onClick={() => {}}>
                            + Add Code Group
                          </div>

                          {appCodeGroups
                            .filter((acg) => {
                              return acg.appModuleID === am._id
                            })
                            .map((acg) => {
                              return (
                                <div className='' key={acg._id}>
                                  <div className=' group flex items-center '>
                                    <Input
                                      key={acg._id + 'input'}
                                      className='mb-1'
                                      defaultValue={acg.groupName}
                                      onChange={(ev) => {
                                        //

                                        let value = ev.target.value
                                        acg.groupName = value

                                        useOSFiles.setState({ appModules: [...appModules] })

                                        clearTimeout(ev.target.timer)
                                        ev.target.timer = setTimeout(async () => {
                                          useCodeGroups.getState().updateOne({ object: acg })
                                        }, 1000)
                                      }}
                                      onFocus={() => {
                                        //
                                        useOSFiles.setState({
                                          activeAppID: activeApp._id,
                                          activePackageID: activePackageID,
                                          activeModuleID: am._id,
                                          activeCodeGroupID: acg._id,
                                          activeCodeFileID: '',
                                        })
                                      }}
                                    ></Input>
                                    <img
                                      key={acg._id + 'del'}
                                      className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                                      onClick={async () => {}}
                                      src={`/gui/remove.svg`}
                                    ></img>
                                  </div>

                                  {/* <div className=''>{acg.groupName}</div> */}

                                  <div className='mt-3 border-l pl-3 '>
                                    <div
                                      className='text-xs text-gray-500'
                                      onClick={async () => {
                                        //
                                        await useCodeFiles.getState().create({
                                          object: {
                                            appLoaderID: activeApp._id,
                                            appCodeGroupID: acg._id,
                                            fileName: 'newCode.js',
                                            content: '',
                                          },
                                        })

                                        await load({ activeApp })
                                      }}
                                    >
                                      + Add Code File
                                    </div>

                                    <div className=''>
                                      {appCodeFiles
                                        .filter((acf) => {
                                          return acf.appCodeGroupID === acg._id
                                        })
                                        .map((acf) => {
                                          return (
                                            <div className=' group flex items-center ' key={acf._id}>
                                              {/* <div className=''>{acf.fileName}</div> */}
                                              <Input
                                                key={acf._id + 'input'}
                                                className='mb-1'
                                                style={{
                                                  backgroundColor: activeCodeFileID === acf._id ? '#baffba' : '',
                                                }}
                                                defaultValue={acf.fileName}
                                                onFocus={() => {
                                                  //
                                                  useOSFiles.setState({
                                                    activeAppID: activeApp._id,
                                                    activePackageID: activePackageID,
                                                    activeModuleID: am._id,
                                                    activeCodeGroupID: acg._id,
                                                    activeCodeFileID: acf._id,
                                                  })
                                                }}
                                                onChange={(ev) => {
                                                  //

                                                  let value = ev.target.value
                                                  acf.fileName = value

                                                  // useOSFiles.setState({ appModules: [...appModules] })

                                                  clearTimeout(ev.target.timer)
                                                  ev.target.timer = setTimeout(async () => {
                                                    useCodeFiles.getState().updateOne({ object: acf })
                                                  }, 1000)
                                                }}
                                              ></Input>

                                              <img
                                                key={acf._id + 'del'}
                                                className='mb-1 hidden h-6 w-6 group-hover:inline-block'
                                                onClick={async () => {
                                                  if (window.prompt('remove code?', acf.fileName) === acf.fileName) {
                                                    await useCodeFiles.getState().deleteOne({ object: acf })

                                                    await load({ activeApp })
                                                  }
                                                }}
                                                src={`/gui/remove.svg`}
                                              ></img>
                                            </div>
                                          )
                                        })}
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  )
}
