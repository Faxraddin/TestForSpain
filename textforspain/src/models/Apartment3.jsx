import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apartment3(props) {
  const { nodes, materials } = useGLTF('/apartment3/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['20180628_131814']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['20180628_131814_Wall_Entity_Material']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['20190207_212751']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['20190207_212751_Room_Entity_Material']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['20200315-174714-gmt']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['20200325-74913-utc4']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['20200412-224031-bst']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['20200412-225514-bst']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['20200412-2322-bst']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['20200412-232859-bst_Room_Entity_Material']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['20200412-232859-bst_Wall_Entity_Material']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['20200412-234530-bst']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['20200413-0738-bst']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['20200413-098-bst']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['20200413-11215-bst']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['20200413-115743-bst']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.blanc_001} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.blanc_001_Wall_Entity_Material} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.brique_015_Room_Entity_Material} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.brique_015_Wall_Entity_Material} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.cf6665f082a5fea823c80d797a51681e} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.enduit_004_Room_Entity_Material} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.enduit_004_Wall_Entity_Material} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.etagere_murale_005___bis__mat_metalbasique005sg} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.fake_mat_0_0_0_255} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.fake_mat_108_108_108_255} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.fake_mat_18_18_18_255} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.fake_mat_204_202_198_255} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.fake_mat_204_204_204_255} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.fake_mat_229_229_229_255} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.fake_mat_254_254_254_255} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.fake_mat_255_255_255_32} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.fake_mat_33_35_40_255} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.fake_mat_42_32_22_255} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.fake_mat_46_46_46_255} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.fake_mat_51_51_51_255} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.fake_mat_7_7_7_255} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.fenetre_006____fenetre_006fenetre_006_p1} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.fenetre_006___verre} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.fenetre_029______phong1sg6} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.gris_001} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.gris_004} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.gris_006} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.guitare_001___guitare} />
        <mesh geometry={nodes.Object_46.geometry} material={materials['images-26_Room_Entity_Material']} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.jardiniere_fenetre___jardiniere_fenetrejardiniere_fenetre_bouton} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.jardiniere_fenetre___jardiniere_fenetrejardiniere_fenetre_marguerite} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.jardiniere_fenetre___jardiniere_fenetrejardiniere_fenetre_vert} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.kitchen_classic_style_extractor_000___phong5sg} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.kitchen_classic_style_extractor_000___phong7sg} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.kitchen_classic_style_oven_000___lambert3sg} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.kitchen_classic_style_oven_000___phong4sg} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.kitchen_classic_style_oven_000___phong5sg} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.kitchen_classic_style_oven_000___phong7sg} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.kitchen_classic_style_oven_000___vitre} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.lampe_003___mat_blancsg} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.lampe_003___mat_metalbasique001sg} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.metal_012} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_blanc} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_blanc01} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_bleu00} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_bouchon_001} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_bouchon_003} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_bouteille_001} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_bouteille_003} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_gris} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_noir} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_serviette_001} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.meuble_lavabo_005___mat_meuble_lavabo_005_serviette_003} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.miroir_006___mat_miroirsg} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.noir_001} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.pack_003_salon_television___material__83} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.plante_vase_off_001___phong37} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.plante_vase_off_003___phong21} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.plante_vase_off_003___phong39} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.porte_us_006___porte_us_006d} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.porte_us_006___porte_us_006p} />
        <mesh geometry={nodes.Object_79.geometry} material={materials.refrigerateur_002___ecran} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.refrigerateur_002___material__0} />
        <mesh geometry={nodes.Object_81.geometry} material={materials.scan_canape_001_2p_grisc___bois_003} />
        <mesh geometry={nodes.Object_82.geometry} material={materials.scan_canape_001_2p_grisc___phong4} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.table_basse_off_007___noir1} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.table_basse_off_007___phong51} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_bois_fonce} />
        <mesh geometry={nodes.Object_86.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_bois_moyen} />
        <mesh geometry={nodes.Object_87.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_feuille_lierre} />
        <mesh geometry={nodes.Object_88.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_feuille_seule} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_metal} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_plante} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_terre} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.tableau_vegetal___tableau_vegetaltableau_vegetal_verdure} />
        <mesh geometry={nodes.Object_93.geometry} material={materials.terre_002} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.tex_bois_noir} />
        <mesh geometry={nodes.Object_95.geometry} material={materials.tex_bois_scan_blanc_002} />
        <mesh geometry={nodes.Object_96.geometry} material={materials.tex_tissus_scan_bleuf_006} />
        <mesh geometry={nodes.Object_97.geometry} material={materials.tissus_089} />
      </group>
    </group>
  )
}

useGLTF.preload('/apartment3/scene.gltf')
