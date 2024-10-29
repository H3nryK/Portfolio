import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  color?: string;
  particleCount?: number;
  particleSize?: number;
  speed?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = '#4a90e2',
  particleCount = 5000,
  particleSize = 0.02,
  speed = 0.001
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Get initial dimensions
    const { clientWidth: width, clientHeight: height } = containerRef.current;
    setDimensions({ width, height });

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup with initial dimensions
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;      // x
      positions[i + 1] = (Math.random() - 0.5) * 10;  // y
      positions[i + 2] = (Math.random() - 0.5) * 10;  // z
      
      // Velocity
      velocities[i] = (Math.random() - 0.5) * 0.01;
      velocities[i + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material setup
    const material = new THREE.PointsMaterial({
      size: particleSize,
      sizeAttenuation: true,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create point cloud
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Update positions based on velocities
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Boundary check and reset
        if (Math.abs(positions[i]) > 5) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 5) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 5) velocities[i + 2] *= -1;
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      // Rotate the entire particle system
      particles.rotation.x += speed;
      particles.rotation.y += speed * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const { clientWidth: width, clientHeight: height } = containerRef.current;
      
      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      // Update renderer
      renderer.setSize(width, height);
      setDimensions({ width, height });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [color, particleCount, particleSize, speed]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ParticleBackground;