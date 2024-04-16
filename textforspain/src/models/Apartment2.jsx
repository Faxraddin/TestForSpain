import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apartment2(props) {
  const { nodes, materials } = useGLTF('/apartment2/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['20210918-8111-cdt']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.balcony_3_bis___metal} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.beige_006_Wall_Entity_Material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.blanc_001} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.bois_071_Room_Entity_Material} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.chaise_017____etagere_011phong1sg} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.chaise_017___mat_cuir004sg} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.colonne_douche___chrome_douche} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.colonne_douche___douche} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.colonne_douche___lambert14} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.enduit_004_Room_Entity_Material} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.enduit_004_Wall_Entity_Material} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.fenetre_029______lambert2sg3} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.fenetre_029______phong1sg6} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.fenetre_036______lambert2sg3} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.fenetre_036______phong1sg6} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.gris_001} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.gris_002} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.indu_buffet_001_noir___bois_noir1} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.indu_buffet_001_noir___noir} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.indu_canape_003_3p_grisc___tissus_grisc} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.indu_luminaire_004_metal004___metal0034} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.indu_luminaire_004_metal004___noir5} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.indu_luminaire_004_metal004___phong22sg7} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.indu_luminaire_004_metal004___phong30sg7} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.kitchen_modern_style_base_cabinet_000___m_plastic} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.kitchen_modern_style_base_cabinet_004___m_plastic} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.kitchen_modern_style_base_cabinet_017___m_caoutchou} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.kitchen_modern_style_base_cabinet_017___m_evier} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.kitchen_modern_style_base_cabinet_017___m_plastic} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.kitchen_modern_style_base_cabinet_oven_003___m_metal} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.kitchen_modern_style_base_cabinet_oven_003___m_panneau} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.kitchen_modern_style_base_cabinet_oven_003___m_plaque} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.kitchen_modern_style_base_cabinet_oven_003___m_plastic} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.kitchen_modern_style_base_cabinet_oven_003___m_vitre} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.kitchen_modern_style_dishwasher_000___m_panneau_machinelaver} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.kitchen_modern_style_dishwasher_000___m_plastic} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.kitchen_modern_style_dishwasher_000___m_surface} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.kitchen_modern_style_wall_cabinet_001___m_plastic} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.kitchen_modern_style_wall_cabinet_006___m_plastic} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.kitchen_modern_style_wall_cabinet_007___m_plastic} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.miroir_006___mat_blancsg} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.miroir_006___mat_miroirsg} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.pack_004_salon_002_tableau___enduit1} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.parquet_022_Room_Entity_Material} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.pop_buffet_002___bois_gene_007} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.pop_buffet_002___pvc_blanc} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.pop_buffet_002___pvc_noir} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.porte_005___d} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.porte_005___p} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006glacon} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006metal} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006porte} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.rideaux_001___rideaux_001_blinn3sg} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.scan_accessoirebain_001___cuir_jaune} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.scan_accessoirebain_001___mirroir} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.scan_accessoirebain_006___plastique_noir} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.scan_accessoirebain_009___bois_scan} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.scan_baignoire_001___ceramic_01} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.scan_baignoire_001___metal_chromer} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.scan_baignoire_001___noir} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.scan_lavabo_004_v2___metal_or} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.scan_lavabo_004_v2___noir} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.scan_lavabo_004_v2___phong3} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.scan_lavabo_004_v2___plastique_blanc} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.scan_lavabo_004_v2___terrecuite_orange1} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.scan_meuble_001_blanc___bois_bleuf} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.scan_table_002_blanc___phong3} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.seater_knoll___leather} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.seater_knoll___metal} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.tabouret_off_007___noir1} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.vint_lit_003___osier} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.vint_lit_003___tissus_blanc} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.vitrine_000___mat_vitrine_verre} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.wc_005____base} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.wc_005____couvercle} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.wc_005____interupteur} />
      </group>
    </group>
  )
}

useGLTF.preload('/apartment2/scene.gltf')
