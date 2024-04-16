import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apartment4(props) {
  const { nodes, materials } = useGLTF('/apartment4/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-260.681, 42.029, -151.322]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Object002_Material_#60_0'].geometry} material={materials.Material_60} position={[2.812, 4.654, -42.029]} scale={25.4} />
            <mesh geometry={nodes['Object003_Material_#59_0'].geometry} material={materials.Material_59} position={[2.812, 4.654, -42.029]} scale={25.4} />
            <mesh geometry={nodes['bed_Material_#0_0'].geometry} material={materials.Material_0} position={[2.812, 4.654, -42.029]} scale={25.4} />
          </group>
          <group position={[817.121, 87.513, 202.39]} scale={0.649}>
            <mesh geometry={nodes['��������������������_Material_#4256_0'].geometry} material={materials.Material_4256} />
            <mesh geometry={nodes['��������������������_Material_#4257_0'].geometry} material={materials.Material_4257} />
          </group>
          <mesh geometry={nodes.Celling_Celling_0.geometry} material={materials.Celling} position={[25.691, 222.284, 75.757]} rotation={[-Math.PI / 2, 0, 0]} scale={7.629} />
          <mesh geometry={nodes.Floor_Floor_0.geometry} material={materials.Floor} position={[-125.925, 33.649, 442.132]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.062} />
          <mesh geometry={nodes.Glass_Glass_0.geometry} material={materials.Glass} position={[-157.892, 33.649, 439.337]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.062} />
          <mesh geometry={nodes.Door_Door_0.geometry} material={materials.Door} position={[55.879, 2.096, -271.763]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Wall_Wall_0.geometry} material={materials.Wall} position={[-466.433, 0, 42.988]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['lod��wka_Metal_0'].geometry} material={materials.Metal} position={[52.297, 20.337, -1.039]} rotation={[-Math.PI / 2, 0, Math.PI]} />
          <mesh geometry={nodes.Line001_fabric_0.geometry} material={materials.fabric} position={[185.472, 240.759, 254.129]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Line003_wood_0.geometry} material={materials.wood} position={[-126.456, 186.485, -213.699]} />
          <mesh geometry={nodes.Object078_Decor_0.geometry} material={materials.Decor} position={[-4937.333, 1.534, 65.123]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object084_fabric_0.geometry} material={materials.fabric} position={[302.991, 99.998, 656.318]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Object085_Metal_0.geometry} material={materials.Metal} position={[-368.586, 99.998, 502.629]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh geometry={nodes.Object096_wood_0.geometry} material={materials.wood} position={[-4937.333, 1.534, 65.123]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.w_piekarnik_Metal_0.geometry} material={materials.Metal} position={[316.35, 41.24, 120.277]} rotation={[-Math.PI / 2, 0, 0]} scale={[-27.847, 27.847, 27.847]} />
          <mesh geometry={nodes.deska_Plastic_0.geometry} material={materials.Plastic} position={[310.828, 90.675, 212.869]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[24.005, 21.749, 0.89]} />
          <mesh geometry={nodes.okap001_illumination_0.geometry} material={materials.illumination} position={[329.235, 161.714, 120.521]} rotation={[-Math.PI / 2, 0, 0]} scale={[-25.462, 154.3, 103.186]} />
          <mesh geometry={nodes.okap_wood_0.geometry} material={materials.wood} position={[329.235, 162.817, 120.521]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.szyba_Glass_1_0.geometry} material={materials.Glass_1} position={[288.538, 34.3, 120.928]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-23.785, 23.785, 23.785]} />
          <mesh geometry={nodes.Object097_Metal_0.geometry} material={materials.Metal} position={[-126.456, 186.485, -213.699]} />
          <mesh geometry={nodes.Object098_Mirror_0.geometry} material={materials.Mirror} position={[-126.456, 186.485, -213.699]} />
          <mesh geometry={nodes.Object100_Metal_0.geometry} material={materials.Metal} position={[-3935.977, 1.534, 506.117]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object101_Glass_1_0.geometry} material={materials.Glass_1} position={[-3935.977, 1.534, 506.117]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object103_wood_0.geometry} material={materials.wood} position={[278.64, 99.998, -284.137]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object106_Metal_0.geometry} material={materials.Metal} position={[302.991, 99.998, 656.319]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Object107_Decor_0.geometry} material={materials.Decor} position={[-4937.333, 1.534, 65.123]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object108_Decor_0.geometry} material={materials.Decor} position={[-4937.333, 1.534, 65.123]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object109_Decor_0.geometry} material={materials.Decor} position={[-4937.333, 1.534, 65.123]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.54} />
          <mesh geometry={nodes.Object110_wood_0.geometry} material={materials.wood} position={[329.235, 162.817, 120.521]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Object111_wood_0.geometry} material={materials.wood} position={[278.64, 99.998, -284.137]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object112_wood_0.geometry} material={materials.wood} position={[278.64, 99.998, -284.137]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object113_wood_0.geometry} material={materials.wood} position={[278.64, 99.998, -284.137]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object114_Plastic_0.geometry} material={materials.Plastic} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object115_Plastic_0.geometry} material={materials.Plastic} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object116_Plastic_0.geometry} material={materials.Plastic} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object094_Glass_1_0.geometry} material={materials.Glass_1} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object095_Metal_0.geometry} material={materials.Metal} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object092_Plastic_0.geometry} material={materials.Plastic} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object117_Mirror_0.geometry} material={materials.Mirror} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object118_Metal_0.geometry} material={materials.Metal} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object119_Metal_0.geometry} material={materials.Metal} position={[869.232, 99.998, -132.987]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object120_Metal_0.geometry} material={materials.Metal} position={[55.879, 2.096, -271.763]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object121_fabric_0.geometry} material={materials.fabric} position={[185.472, 240.759, 254.129]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object122_fabric_0.geometry} material={materials.fabric} position={[185.472, 240.759, 254.129]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object123_fabric_0.geometry} material={materials.fabric} position={[185.472, 240.759, 254.129]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object124_fabric_0.geometry} material={materials.fabric} position={[185.472, 240.759, 254.129]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['��������������������_Material_#4256_0_1'].geometry} material={materials.Material_4256} position={[620.232, 82, 126.706]} scale={0.649} />
          <mesh geometry={nodes['��������������_Material_#4256_0'].geometry} material={materials.Material_4256} position={[200.702, 100.191, 482.718]} rotation={[0, -Math.PI / 2, 0]} scale={0.649} />
          <mesh geometry={nodes['������������_������������������������_Material_#4256_0'].geometry} material={materials.Material_4256} position={[0, 175.894, -80.43]} rotation={[0, -Math.PI / 2, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/apartment4/scene.gltf')
