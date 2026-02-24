'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DataAscendant() {
    const count = 3000;
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, colors, speeds, offsets] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        const off = new Float32Array(count);

        const color1 = new THREE.Color('#66fcf1'); // Cyan
        const color2 = new THREE.Color('#8b5cf6'); // Purple
        const color3 = new THREE.Color('#1f2833'); // Indigo dark

        for (let i = 0; i < count; i++) {
            // Distribution: cylindrical
            const radius = 1 + Math.random() * 10;
            const angle = Math.random() * Math.PI * 2;

            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30; // y spread
            pos[i * 3 + 2] = Math.sin(angle) * radius;

            // Mix colors
            const mixParam = Math.random();
            let mixedColor;
            if (mixParam > 0.7) mixedColor = color1;
            else if (mixParam > 0.4) mixedColor = color2;
            else mixedColor = color3;

            col[i * 3] = mixedColor.r;
            col[i * 3 + 1] = mixedColor.g;
            col[i * 3 + 2] = mixedColor.b;

            spd[i] = 0.01 + Math.random() * 0.04; // upward speed
            off[i] = Math.random() * Math.PI * 2; // sine wave offset
        }
        return [pos, col, spd, off];
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            // Move up
            positions[i * 3 + 1] += speeds[i];

            // Horizontal swirl based on time and original offset
            positions[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + offsets[i]) * 0.005;
            positions[i * 3 + 2] += Math.cos(state.clock.elapsedTime * 0.3 + offsets[i]) * 0.005;

            // Loop smoothly at the top
            if (positions[i * 3 + 1] > 15) {
                positions[i * 3 + 1] = -15;
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Gentle rotation of the entire system
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    });

    return (
        <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
            />
        </Points>
    );
}

export default function AboutBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <DataAscendant />
            </Canvas>

            {/* Top and Bottom gradient fades to blend seamlessly into other sections */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[var(--color-obsidian)] to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--color-obsidian)] to-transparent" />
        </div>
    );
}
