import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { Server, Bot, Database, Layout, Zap } from "lucide-react";

/* ─── CONNECTED ARCHITECTURE NODES ─── */
const NODES = [
  { id: "frontend", label: "React 19 / Next.js", pos: [-2.2, 1.2, 0], color: "#22D3EE", icon: Layout },
  { id: "api", label: "Fastify / Node API", pos: [2.2, 1.4, -0.3], color: "#818CF8", icon: Server },
  { id: "ai", label: "Gemini / Groq LLM", pos: [0, 2.3, 0.2], color: "#A855F7", icon: Bot },
  { id: "db", label: "PostgreSQL / Prisma", pos: [-1.9, -1.4, 0.1], color: "#10B981", icon: Database },
  { id: "whatsapp", label: "WhatsApp Cloud / OAuth", pos: [2.0, -1.3, 0.2], color: "#F59E0B", icon: Zap },
];

function ConnectionLines() {
  const lineGeometry = useMemo(() => {
    const points = [];
    NODES.forEach((node) => {
      // Line from center (0,0,0) to node position
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(...node.pos));
    });
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, []);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#4452E6" transparent opacity={0.25} linewidth={1} />
    </lineSegments>
  );
}

function SystemCore() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Central Glowing Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#4452E6"
          emissive="#2C3480"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>
      
      {/* Center Label */}
      <Html position={[0, -1.0, 0]} center distanceFactor={8}>
        <div className="px-3 py-1 rounded-full bg-white/95 border border-[#4452E6]/30 text-[#2C3480] text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-md shadow-[#2C3480]/10 whitespace-nowrap select-none">
          SYSTEM CORE
        </div>
      </Html>
    </group>
  );
}

function ArchitectureNode({ node }) {
  const groupRef = useRef();
  const Icon = node.icon;

  return (
    <group ref={groupRef} position={node.pos}>
      {/* Node Sphere */}
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={1.0}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Orbit Halo */}
      <mesh>
        <ringGeometry args={[0.3, 0.35, 24]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>

      {/* HTML Label with Icon */}
      <Html position={[0, 0.45, 0]} center distanceFactor={8}>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-[#E2E8F0] text-[#0F172A] text-[11px] font-sans font-semibold whitespace-nowrap shadow-lg shadow-[#2C3480]/8 backdrop-blur-md pointer-events-none select-none">
          <Icon size={12} style={{ color: node.color }} />
          <span>{node.label}</span>
        </div>
      </Html>
    </group>
  );
}

function ArchitectureScene() {
  const sceneRef = useRef();

  useFrame((state) => {
    // Gentle mouse-follow parallax
    const targetX = (state.mouse.x * Math.PI) / 8;
    const targetY = (state.mouse.y * Math.PI) / 8;
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetX, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={sceneRef}>
        <SystemCore />
        <ConnectionLines />
        {NODES.map((node) => (
          <ArchitectureNode key={node.id} node={node} />
        ))}
      </group>
    </Float>
  );
}

export default function HeroScene() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] text-center space-y-4 max-w-sm shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF0FD] border border-[#4452E6]/20 text-[#4452E6] mx-auto flex items-center justify-center">
            <Server size={24} />
          </div>
          <h4 className="font-bold text-[#0F172A] text-base">Connected System Architecture</h4>
          <p className="text-xs text-[#64748B]">Full-Stack Web • Fastify APIs • Gemini AI • Prisma ORM • WhatsApp</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} color="#A855F7" intensity={0.8} />
        <Suspense fallback={null}>
          <ArchitectureScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
