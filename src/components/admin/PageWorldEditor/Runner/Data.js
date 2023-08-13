export const Data = {
  sceneList: [],
  projectMeta: {
    envURL: '/agape-sdk/hdr/concret.hdr',
    myAvatarURL: '/assets/2023-04-07-walk/lok-groom.glb',
    colliderGLBURL: '/agape-sdk/glb/nyc.glb',
    gameMode: 'room',
    postprocessing: 'game',
    insepction: 'normal',
    tab: 'light',
    postProcessingConfig: {
      multisampling: 4,
      emissiveIntensity: 1,
      envMapIntensity: 0.11000000000000001,
      ssrPass: {
        useThisOne: false,
        intensity: 1,
        exponent: 1,
        distance: 10,
        fade: 0,
        roughnessFade: 1,
        thickness: 10,
        ior: 1.45,
        maxRoughness: 1,
        maxDepthDifference: 10,
        blend: 0.9,
        correction: 1,
        correctionRadius: 1,
        blur: 0,
        blurKernel: 1,
        blurSharpness: 10,
        jitter: 0.025,
        jitterRoughness: 0.025,
        steps: 8,
        refineSteps: 8,
        missedRays: true,
        useNormalMap: true,
        useRoughnessMap: true,
        resolutionScale: 1,
        velocityResolutionScale: 0.125,
      },
      bloomPass: {
        useThisOne: true,
        mipmapBlur: true,
        luminanceThreshold: 0.21000000000000024,
        intensity: 5.33,
        resolutionScale: 1,
      },
      wavePass: {
        useThisOne: false,
        speed: 1.0900000000000003,
        maxRadius: 1.07,
        waveSize: 1.09,
        amplitude: 0.29999999999999993,
        intensity: 0.5,
      },
      chromePass: {
        useThisOne: false,
        hue: 0,
        saturation: 0,
        brightness: 0,
        contrast: 0,
        offsetX: 0.008000000000000018,
        offsetY: 0.008,
        radialModulation: true,
        modulationOffset: 0.5,
      },
      colorPass: {
        useThisOne: true,
        hue: 0,
        satuation: 0,
        brightness: -0.02000000000000001,
        contrast: 0.3,
        saturation: 0.04,
      },
      from: 0.6039740982326269,
      aoPass: {
        useThisOne: false,
        intensity: 5,
        aoRadius: 1.9020000000000001,
        distanceFalloff: 2.5540000000000003,
        color: '#000000',
      },
    },
  },
}