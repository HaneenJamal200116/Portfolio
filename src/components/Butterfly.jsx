/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Artistic_side (https://sketchfab.com/leorehman333)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animated-butterfly-d4fbcbaab845402999f30c5aa75851e6
Title: Animated Butterfly
*/
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/butterfly.glb');
  const { actions } = useAnimations(animations, group);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log(actions);
    // Start the 'Idle' animation by default
    actions['Flying'].play();

    // Change animation based on hover state
    if (isHovered) {
      actions['Flying'].play();
      
    } else {
      actions['Idle'].play();
    }
    
  }, [actions, isHovered]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerEnter={() => setIsHovered(true)}  // Trigger hover state when the mouse enters
      onPointerLeave={() => setIsHovered(false)} // Trigger idle state when the mouse leaves
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_55">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Plane_52" />
                  <group name="Plane001_53" />
                  <group name="Plane002_54" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/butterfly.glb');
