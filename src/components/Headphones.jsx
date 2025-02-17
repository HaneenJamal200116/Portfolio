/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: TaSeen (https://sketchfab.com/TaSeen25)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pink-headphones-845594dd64794ae0bc10239bb3990734
Title: Pink Headphones
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/headphones.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Headphones_7" position={[0, 1.22, 0]} rotation={[0, -0.611, 0]}>
                <group name="Cube_0" position={[0, -1.22, 0]}>
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Base}
                  />
                </group>
                <group name="Cube001_1" position={[0, -1.22, 0]}>
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Cush}
                  />
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Cush}
                  />
                </group>
                <group name="Empty001_6" position={[1.607, -1.513, 0]} rotation={[0, 0, -0.363]}>
                  <group name="EarPice_4" position={[0.403, 0, 0]}>
                    <mesh
                      name="Object_11"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_11.geometry}
                      material={materials.Base}
                    />
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.Speaker}
                    />
                    <mesh
                      name="Object_13"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_13.geometry}
                      material={materials.Mesh}
                    />
                    <group name="EarCup_3">
                      <mesh
                        name="Object_15"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_15.geometry}
                        material={materials.Cush}
                      />
                      <mesh
                        name="Object_16"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_16.geometry}
                        material={materials.Cush}
                      />
                    </group>
                  </group>
                  <group name="Joint_5" position={[0.412, 0, 0]}>
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.Base}
                    />
                  </group>
                </group>
              </group>
             
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/headphones.glb')
