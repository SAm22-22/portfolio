import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import { portfolioData } from "./data/portfolioData";

// Skeletal fallback loader for the lazy-loaded route
function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-surface">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-outline border-t-primary animate-spin"></div>
                <p className="text-sm font-mono tracking-widest text-on-surface-variant uppercase">Loading Specs...</p>
            </div>
        </div>
    );
}

export default function App() {
    const { personalInfo } = portfolioData;

    // Structured JSON-LD Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": personalInfo.name,
        "jobTitle": personalInfo.role,
        "url": personalInfo.github,
        "sameAs": [
            personalInfo.linkedin,
            personalInfo.leetcode
        ],
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": personalInfo.university
        },
        "knowsAbout": [
            "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Java", "SQL", "Tailwind CSS"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "India"
        }
    };

    useEffect(() => {
        // -------------------------------------------------------------
        // WebGL Shader Background Logic (GPU-Accelerated Aurora)
        // -------------------------------------------------------------
        const canvas = document.getElementById('shader-canvas');
        if (!canvas) return;

        function syncSize() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
        }
        
        window.addEventListener('resize', syncSize, { passive: true });
        syncSize();

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            console.warn('WebGL not supported');
            return;
        }

        const vsSource = `
            attribute vec2 a_position;
            varying vec2 v_texCoord;
            void main() {
                v_texCoord = a_position * 0.5 + 0.5;
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        const fsSource = `
            precision highp float;
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            varying vec2 v_texCoord;

            vec3 hash3(vec2 p) {
                vec3 q = vec3( dot(p,vec2(127.1,311.7)), 
                               dot(p,vec2(269.5,183.3)), 
                               dot(p,vec2(419.2,371.9)) );
                return fract(sin(q)*43758.5453);
            }

            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                vec2 u = f*f*(3.0-2.0*f);
                return mix( mix( dot( hash3(i+vec2(0.0,0.0)).xy - 0.5, f-vec2(0.0,0.0) ), 
                                 dot( hash3(i+vec2(1.0,0.0)).xy - 0.5, f-vec2(1.0,0.0) ), u.x),
                            mix( dot( hash3(i+vec2(0.0,1.0)).xy - 0.5, f-vec2(0.0,1.0) ), 
                                 dot( hash3(i+vec2(1.0,1.0)).xy - 0.5, f-vec2(1.0,1.0) ), u.x), u.y);
            }

            void main() {
                vec2 uv = v_texCoord;
                vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
                vec2 p = (uv - 0.5) * aspect;
                
                vec2 m = (u_mouse / u_resolution - 0.5) * aspect;
                float distToMouse = length(p - m);
                float mouseInfluence = smoothstep(0.8, 0.0, distToMouse);
                
                float t = u_time * 0.12;
                
                vec2 waveUv = p * 1.6;
                waveUv.y += sin(waveUv.x * 2.0 + t) * 0.2;
                waveUv.x += cos(waveUv.y * 1.5 + t) * 0.2;
                waveUv += (p - m) * mouseInfluence * 0.15;

                float n1 = noise(waveUv * 1.8 + vec2(t * 0.2, t * 0.1));
                float n2 = noise(waveUv * 3.5 - vec2(t * 0.3, t * 0.2));
                float combinedNoise = n1 * 0.6 + n2 * 0.4;
                combinedNoise = combinedNoise * 0.5 + 0.5;
                
                vec3 bgColor = vec3(0.047, 0.039, 0.035);
                vec3 auroraColor1 = vec3(0.18, 0.08, 0.03);
                vec3 auroraColor2 = vec3(0.35, 0.16, 0.03);
                vec3 auroraColor3 = vec3(0.45, 0.25, 0.06);
                
                vec3 color = bgColor;
                float wave1 = smoothstep(0.3, 0.8, combinedNoise);
                color = mix(color, auroraColor1, wave1 * 0.55);
                
                float wave2 = smoothstep(0.5, 0.9, combinedNoise);
                color = mix(color, auroraColor2, wave2 * 0.45);
                
                float wave3 = smoothstep(0.65, 0.95, combinedNoise);
                color = mix(color, auroraColor3, wave3 * 0.3);
                
                float mouseGlow = smoothstep(0.25, 0.0, distToMouse);
                color += vec3(0.35, 0.16, 0.03) * mouseGlow * 0.2;

                float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
                color += vec3(grain) * 0.012;

                vec2 gridUv = fract(uv * vec2(30.0 * aspect.x, 30.0));
                float gridLineX = smoothstep(0.0, 0.02, gridUv.x) * smoothstep(1.0, 0.98, gridUv.x);
                float gridLineY = smoothstep(0.0, 0.02, gridUv.y) * smoothstep(1.0, 0.98, gridUv.y);
                float grid = gridLineX * gridLineY;
                color += (1.0 - grid) * 0.015;

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        function compileShader(src, type) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                gl.deleteShader(s);
                return null;
            }
            return s;
        }

        const vs = compileShader(vsSource, gl.VERTEX_SHADER);
        const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
        if (!vs || !fs) return;

        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);

        const vertices = new Float32Array([
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
            -1.0,  1.0,
             1.0, -1.0,
             1.0,  1.0
        ]);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLoc = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        const timeLoc = gl.getUniformLocation(program, 'u_time');
        const resLoc = gl.getUniformLocation(program, 'u_resolution');
        const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let currentMouse = { x: mouse.x, y: mouse.y };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = window.innerHeight - e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        let animationFrameId;
        function render(time) {
            currentMouse.x += (mouse.x - currentMouse.x) * 0.08;
            currentMouse.y += (mouse.y - currentMouse.y) * 0.08;

            gl.viewport(0, 0, canvas.width, canvas.height);
            
            gl.uniform1f(timeLoc, time * 0.001);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.uniform2f(mouseLoc, currentMouse.x, currentMouse.y);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animationFrameId = requestAnimationFrame(render);
        }
        
        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', syncSize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <div className="relative min-h-screen text-on-surface">
                    {/* SEO Metadata */}
                    <Helmet>
                        <title>{personalInfo.name} | {personalInfo.role}</title>
                        <meta name="description" content={personalInfo.subheading} />
                        <link rel="canonical" href="https://github.com/SAm22-22" />
                        
                        <meta property="og:title" content={`${personalInfo.name} | Portfolio`} />
                        <meta property="og:description" content={personalInfo.subheading} />
                        <meta property="og:type" content="website" />
                        
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={`${personalInfo.name} | Portfolio`} />
                        <meta name="twitter:description" content={personalInfo.subheading} />

                        {/* Structured JSON-LD Data Schema */}
                        <script type="application/ld+json">
                            {JSON.stringify(structuredData)}
                        </script>
                    </Helmet>

                    {/* Scroll reading progress bar */}
                    <ScrollProgress />

                    {/* Canvas background inside main viewport */}
                    <div className="fixed inset-0 -z-10 pointer-events-none">
                        <canvas id="shader-canvas" className="absolute inset-0 w-full h-full" aria-hidden="true"></canvas>
                    </div>

                    {/* Noise grain layer */}
                    <div className="grain-overlay" aria-hidden="true"></div>

                    {/* Header navbar */}
                    <Navbar />

                    {/* Layout Routes */}
                    <main className="relative z-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>

                    {/* Footer bar */}
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}
