import { CommonSwanHTML, RunSwan } from '@/components/test/RunInCode'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Multi() {
  return (
    <>
      <Canvas>
        <group position={[0, 2, 0]}>
          <RunSwan appID={'app1'}></RunSwan>
        </group>
        <group position={[0, 0, 0]}>
          <RunSwan appID={'app2'}></RunSwan>
        </group>

        {/*  */}

        <OrbitControls></OrbitControls>
        <Environment background files={`/hdr/grass.hdr`}></Environment>

        {/*  */}
      </Canvas>
      <CommonSwanHTML></CommonSwanHTML>
      {/*  */}
    </>
  )
}