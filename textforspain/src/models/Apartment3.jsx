import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apartment3(props) {
  const { nodes, materials } = useGLTF('/apartment3/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.064}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.225, 0, 0.735]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Floor.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Wall.001']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Wallblack.001']} />
          </group>
          <group position={[0, 0.003, 0]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['Floor.001']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
          </group>
          <group position={[4.497, 1.191, -2.319]} rotation={[Math.PI / 2, 0, 0]} scale={0.081}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.glass_border1} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.handle} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.window1} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.window2} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.sill} />
          </group>
          <group position={[0.968, 1.191, -2.319]} rotation={[Math.PI / 2, 0, 0]} scale={0.081}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_23.geometry} material={materials.glass_border1} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.handle} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.window1} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.window2} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.sill} />
          </group>
          <group position={[-1.998, 1.191, -2.319]} rotation={[Math.PI / 2, 0, 0]} scale={0.081}>
            <mesh geometry={nodes.Object_29.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.glass_border1} />
            <mesh geometry={nodes.Object_31.geometry} material={materials.handle} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.window1} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.window2} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.sill} />
          </group>
          <group position={[5.597, 0.234, 0.64]} rotation={[1.576, -1.338, Math.PI]} scale={[0.055, 0.049, 0.055]}>
            <mesh geometry={nodes.Object_46.geometry} material={materials['Material.039']} />
            <mesh geometry={nodes.Object_47.geometry} material={materials['Marble_white.010']} />
          </group>
          <group position={[-0.534, 0.99, 0.95]} rotation={[-3.141, 1.57, 1.571]} scale={0.678}>
            <group position={[-0.005, -1.474, 5.246]} rotation={[-Math.PI, 0, 0]}>
              <mesh geometry={nodes.Object_50.geometry} material={materials['Pintu.001']} />
              <mesh geometry={nodes.Object_51.geometry} material={materials['Gagang_Pintu.001']} />
            </group>
            <group position={[-0.005, -5.517, 2.018]} rotation={[1.572, 0, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh geometry={nodes.Object_53.geometry} material={materials['Pintu.001']} />
              <mesh geometry={nodes.Object_54.geometry} material={materials['Gagang_Pintu.001']} />
            </group>
          </group>
          <group position={[-0.534, 1.187, 0.95]} rotation={[-Math.PI, 0.268, Math.PI / 2]} scale={0.678}>
            <mesh geometry={nodes.Object_56.geometry} material={materials['Pintu.001']} />
            <mesh geometry={nodes.Object_57.geometry} material={materials['Gagang_Pintu.001']} />
          </group>
          <group position={[-0.059, 1.187, 2.781]} rotation={[Math.PI, -1.303, Math.PI / 2]} scale={0.678}>
            <mesh geometry={nodes.Object_59.geometry} material={materials['Pintu.001']} />
            <mesh geometry={nodes.Object_60.geometry} material={materials['Gagang_Pintu.001']} />
          </group>
          <group position={[1.986, 1.646, 3.026]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.647, 0.647, 0.385]}>
            <mesh geometry={nodes.Object_62.geometry} material={materials['Material.037']} />
            <mesh geometry={nodes.Object_63.geometry} material={materials['Material.035']} />
            <mesh geometry={nodes.Object_64.geometry} material={materials['Material.034']} />
          </group>
          <group position={[1.386, 2.335, 0.022]} scale={0.715}>
            <mesh geometry={nodes.Object_68.geometry} material={materials['modern_ceiling_lamp_01_glass.002']} />
            <mesh geometry={nodes.Object_69.geometry} material={materials['modern_ceiling_lamp_01.002']} />
            <mesh geometry={nodes.Object_70.geometry} material={materials['modern_ceiling_globe.002']} />
          </group>
          <group position={[1.185, 2.335, -0.227]} scale={0.715}>
            <mesh geometry={nodes.Object_72.geometry} material={materials['modern_ceiling_lamp_01_glass.002']} />
            <mesh geometry={nodes.Object_73.geometry} material={materials['modern_ceiling_lamp_01.002']} />
            <mesh geometry={nodes.Object_74.geometry} material={materials['modern_ceiling_globe.002']} />
          </group>
          <group position={[1.511, 2.335, -0.272]} scale={0.715}>
            <mesh geometry={nodes.Object_76.geometry} material={materials['modern_ceiling_lamp_01_glass.002']} />
            <mesh geometry={nodes.Object_77.geometry} material={materials['modern_ceiling_lamp_01.002']} />
            <mesh geometry={nodes.Object_78.geometry} material={materials['modern_ceiling_globe.002']} />
          </group>
          <group position={[-0.444, 1.683, -0.38]} rotation={[0, Math.PI / 2, 0]} scale={[0.413, 0.413, 0.02]}>
            <mesh geometry={nodes.Object_80.geometry} material={materials['Material.047']} />
            <mesh geometry={nodes.Object_81.geometry} material={materials['Material.048']} />
          </group>
          <group position={[3.177, 0.417, 2.941]} rotation={[0, 0.001, 0]} scale={[1.988, 0.621, 0.621]}>
            <group position={[0.599, 0, 0.591]}>
              <mesh geometry={nodes.Object_97.geometry} material={materials['Material.049']} />
              <mesh geometry={nodes.Object_99.geometry} material={materials.material_0} position={[-0.545, 0.576, 0.018]} rotation={[0, 0, -Math.PI / 2]} />
            </group>
            <mesh geometry={nodes.Object_93.geometry} material={materials['Material.049']} />
            <mesh geometry={nodes.Object_95.geometry} material={materials.material_0} position={[0, -0.16, 0.531]} />
            <mesh geometry={nodes.Object_101.geometry} material={materials['Material.049']} position={[0, 0.7, 0]} />
          </group>
          <group position={[-1.281, 0.417, 2.703]} rotation={[-Math.PI, -0.001, -Math.PI]} scale={[1.988, 0.621, 0.621]}>
            <group position={[0.599, 0, 0.591]}>
              <mesh geometry={nodes.Object_107.geometry} material={materials['Material.049']} />
              <mesh geometry={nodes.Object_109.geometry} material={materials.material_0} position={[-0.545, 0.576, 0.018]} rotation={[0, 0, -Math.PI / 2]} />
            </group>
            <mesh geometry={nodes.Object_103.geometry} material={materials['Material.049']} />
            <mesh geometry={nodes.Object_105.geometry} material={materials.material_0} position={[0, -0.16, 0.531]} />
            <mesh geometry={nodes.Object_111.geometry} material={materials['Material.049']} position={[0, 0.7, 0]} />
          </group>
          <group position={[5.597, 0.234, 1.322]} rotation={[1.576, -1.338, Math.PI]} scale={[0.055, 0.049, 0.055]}>
            <mesh geometry={nodes.Object_131.geometry} material={materials['Material.039']} />
            <mesh geometry={nodes.Object_132.geometry} material={materials['Marble_white.010']} />
          </group>
          <group position={[-2.023, 0.401, -1.386]} rotation={[0, -0.676, 0]} scale={0.001}>
            <group position={[73.136, -407.68, 11.96]} rotation={[0, 0.677, 0]} scale={[-1, 1, 1]}>
              <mesh geometry={nodes.Object_160.geometry} material={materials['Material_12236171.004']} position={[-0.194, 38.979, 795]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh geometry={nodes.Object_162.geometry} material={materials['Material_12236171.004']} position={[-785, 38.979, -100]} />
              <mesh geometry={nodes.Object_164.geometry} material={materials['Material_12236171.004']} position={[785, 38.979, -100]} />
            </group>
            <group position={[0, 153.833, 0]} rotation={[0, 0.677, 0]}>
              <mesh geometry={nodes.Object_167.geometry} material={materials['Material_12236173.004']} position={[1.439, -84.402, 555.617]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_169.geometry} material={materials['Material_12236173.004']} position={[100.314, -152.436, 226.469]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_171.geometry} material={materials['Material_12236173.004']} position={[-415.759, 99.495, -733.123]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_173.geometry} material={materials['Material_12236173.004']} position={[-2.702, -93.898, -421.554]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_175.geometry} material={materials['Material_12236173.004']} position={[104.216, -172.142, -712.594]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_177.geometry} material={materials['Material_12236173.004']} position={[522.512, 87.441, -747.369]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
            </group>
            <mesh geometry={nodes.Object_135.geometry} material={materials['Material_12236171.004']} position={[806.008, -135.386, -576.68]} rotation={[0, 0.677, -Math.PI / 2]} />
            <mesh geometry={nodes.Object_137.geometry} material={materials['Material_12236171.004']} position={[-1217.709, 28.226, -342.826]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_139.geometry} material={materials['Material_12236171.004']} position={[-576.669, 167.054, -797.064]} rotation={[1.443, 0.102, -0.67]} />
            <mesh geometry={nodes.Object_141.geometry} material={materials['Material_12236171.004']} position={[-568.732, -406.342, -787.183]} rotation={[Math.PI / 2, 0, -0.677]} />
            <mesh geometry={nodes.Object_143.geometry} material={materials['Material_12236171.004']} position={[0.459, 28.226, -1321.254]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_145.geometry} material={materials['Material_12236171.004']} position={[-605.981, 28.226, -834.164]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_147.geometry} material={materials['Material_12236171.004']} position={[-694.821, -210.679, 628.78]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_149.geometry} material={materials['Material_12236171.004']} position={[841.093, -210.679, -604.859]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_151.geometry} material={materials['Material_12236171.004']} position={[696.067, -210.679, 787.836]} rotation={[0, -0.894, 0]} />
            <mesh geometry={nodes.Object_153.geometry} material={materials['Material_12236171.004']} position={[35.563, -131.689, -34.819]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_155.geometry} material={materials['Material_12236171.004']} position={[667.851, -135.386, 752.78]} rotation={[0, -0.894, -Math.PI / 2]} />
            <mesh geometry={nodes.Object_157.geometry} material={materials['Material_12236171.004']} position={[-659.737, -135.386, 600.601]} rotation={[0, 0.677, -Math.PI / 2]} />
          </group>
          <group position={[4.42, 0.401, -1.386]} rotation={[0, -0.676, 0]} scale={0.001}>
            <group position={[73.136, -407.68, 11.96]} rotation={[0, 0.677, 0]} scale={[-1, 1, 1]}>
              <mesh geometry={nodes.Object_207.geometry} material={materials['Material_12236171.004']} position={[-0.194, 38.979, 795]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh geometry={nodes.Object_209.geometry} material={materials['Material_12236171.004']} position={[-785, 38.979, -100]} />
              <mesh geometry={nodes.Object_211.geometry} material={materials['Material_12236171.004']} position={[785, 38.979, -100]} />
            </group>
            <group position={[0, 153.833, 0]} rotation={[0, 0.677, 0]}>
              <mesh geometry={nodes.Object_214.geometry} material={materials['Material_12236173.004']} position={[1.439, -84.402, 555.617]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_216.geometry} material={materials['Material_12236173.004']} position={[100.314, -152.436, 226.469]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_218.geometry} material={materials['Material_12236173.004']} position={[-415.759, 99.495, -733.123]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_220.geometry} material={materials['Material_12236173.004']} position={[-2.702, -93.898, -421.554]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_222.geometry} material={materials['Material_12236173.004']} position={[104.216, -172.142, -712.594]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
              <mesh geometry={nodes.Object_224.geometry} material={materials['Material_12236173.004']} position={[522.512, 87.441, -747.369]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.045, 0.041, 0.04]} />
            </group>
            <mesh geometry={nodes.Object_182.geometry} material={materials['Material_12236171.004']} position={[806.008, -135.386, -576.68]} rotation={[0, 0.677, -Math.PI / 2]} />
            <mesh geometry={nodes.Object_184.geometry} material={materials['Material_12236171.004']} position={[-1217.709, 28.226, -342.826]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_186.geometry} material={materials['Material_12236171.004']} position={[-576.669, 167.054, -797.064]} rotation={[1.443, 0.102, -0.67]} />
            <mesh geometry={nodes.Object_188.geometry} material={materials['Material_12236171.004']} position={[-568.732, -406.342, -787.183]} rotation={[Math.PI / 2, 0, -0.677]} />
            <mesh geometry={nodes.Object_190.geometry} material={materials['Material_12236171.004']} position={[0.459, 28.226, -1321.254]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_192.geometry} material={materials['Material_12236171.004']} position={[-605.981, 28.226, -834.164]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_194.geometry} material={materials['Material_12236171.004']} position={[-694.821, -210.679, 628.78]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_196.geometry} material={materials['Material_12236171.004']} position={[841.093, -210.679, -604.859]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_198.geometry} material={materials['Material_12236171.004']} position={[696.067, -210.679, 787.836]} rotation={[0, -0.894, 0]} />
            <mesh geometry={nodes.Object_200.geometry} material={materials['Material_12236171.004']} position={[35.563, -131.689, -34.819]} rotation={[0, 0.677, 0]} />
            <mesh geometry={nodes.Object_202.geometry} material={materials['Material_12236171.004']} position={[667.851, -135.386, 752.78]} rotation={[0, -0.894, -Math.PI / 2]} />
            <mesh geometry={nodes.Object_204.geometry} material={materials['Material_12236171.004']} position={[-659.737, -135.386, 600.601]} rotation={[0, 0.677, -Math.PI / 2]} />
          </group>
          <mesh geometry={nodes.Object_11.geometry} material={materials['Material.007']} position={[-3.436, 1.386, -0.575]} rotation={[0, 0, 1.571]} scale={[1.319, 1.358, 1.655]} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['Material.008']} position={[-3.417, 1.386, -0.575]} rotation={[0, 0, 1.571]} scale={[1.319, 1.358, 1.655]} />
          <mesh geometry={nodes.Object_36.geometry} material={materials['coffee_table_round_01.002']} position={[1.362, 0.015, -0.162]} scale={0.8} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['Material.043']} position={[1.318, 0.013, 0.115]} rotation={[0, Math.PI / 2, 0]} scale={[1.327, 1.142, 0.89]} />
          <mesh geometry={nodes.Object_40.geometry} material={materials['Marble_white.008']} position={[2.705, 0.331, -2.037]} rotation={[0, 0, Math.PI / 2]} scale={[0.373, 0.389, 0.389]} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['PottedPlant_04.002']} position={[1.362, 0.395, -0.163]} scale={1.329} />
          <mesh geometry={nodes.Object_44.geometry} material={materials['Material.031']} position={[-4.509, -0.006, -0.194]} rotation={[Math.PI / 2, 0, 1.566]} scale={0.001} />
          <mesh geometry={nodes.Object_66.geometry} material={materials['Material.032']} position={[1.984, 1.709, 3.17]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.311} />
          <mesh geometry={nodes.Object_83.geometry} material={materials['Material.044']} position={[2.847, 2.197, 0.073]} rotation={[0, -Math.PI / 2, 0]} scale={[0.075, 0.047, 0.075]} />
          <mesh geometry={nodes.Object_85.geometry} material={materials['Marble_white.011']} position={[2.842, 2.179, -0.523]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.053, 0.069, 0.069]} />
          <mesh geometry={nodes.Object_87.geometry} material={materials['prop_books_01_mt.004']} position={[2.838, 1.909, -0.093]} rotation={[1.573, 0.009, 1.558]} scale={0.003} />
          <mesh geometry={nodes.Object_89.geometry} material={materials['prop_books_01_mt.004']} position={[2.839, 1.904, -0.092]} rotation={[1.568, 0.009, 1.584]} scale={[-0.003, 0.003, 0.003]} />
          <mesh geometry={nodes.Object_91.geometry} material={materials['Wood_board.004']} position={[2.877, 2.015, -0.13]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.117, 0.007, 0.095]} />
          <mesh geometry={nodes.Object_113.geometry} material={materials['Material.005']} position={[3.751, 1.426, 3.011]} rotation={[-1.573, 0, -Math.PI]} scale={[0.626, 0.626, 0.438]} />
          <mesh geometry={nodes.Object_115.geometry} material={materials['Material.005']} position={[-1.855, 1.426, 2.634]} rotation={[-1.569, 0, 0]} scale={[0.626, 0.626, 0.438]} />
          <mesh geometry={nodes.Object_117.geometry} material={materials['Floor.002']} position={[3.599, 1.003, 3.319]} rotation={[0, -0.003, 0]} scale={0.626} />
          <mesh geometry={nodes.Object_119.geometry} material={materials['Floor.002']} position={[-1.679, 1.003, 2.316]} rotation={[-Math.PI, 0.003, -Math.PI]} scale={0.626} />
          <mesh geometry={nodes.Object_121.geometry} material={materials.f5b68fc0_ca4c_a445_b9e2_474a5b4a637e} />
          <mesh geometry={nodes.Object_122.geometry} material={materials.efa6d3ee_750a_0141_9830_b037c8be7c2a} />
          <mesh geometry={nodes.Object_123.geometry} material={materials['3417507f_baa5_8743_aca2_77d1887158c9']} />
          <mesh geometry={nodes.Object_124.geometry} material={materials['3ce08a8b_b62b_9847_8048_e014ba6be8ec_147']} />
          <mesh geometry={nodes.Object_126.geometry} material={materials.f5b68fc0_ca4c_a445_b9e2_474a5b4a637e} />
          <mesh geometry={nodes.Object_127.geometry} material={materials.efa6d3ee_750a_0141_9830_b037c8be7c2a} />
          <mesh geometry={nodes.Object_128.geometry} material={materials['3417507f_baa5_8743_aca2_77d1887158c9']} />
          <mesh geometry={nodes.Object_129.geometry} material={materials['3ce08a8b_b62b_9847_8048_e014ba6be8ec_147']} />
          <mesh geometry={nodes.Object_179.geometry} material={materials['Material.003']} position={[1.36, 0.426, -1.338]} rotation={[Math.PI / 2, 0, 0]} scale={1.292} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/apartment3/scene.gltf')
