import React, { useState } from 'react'
import Lightning from './Lightning'
import GooeyNav from './GooeyNav'
import TextPressure from './TextPressure'
import Counter from './Counter';

const Landing = () => {
    const [count, setCount] = useState(1)
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Lightning
                hue={220}
                xOffset={0}
                speed={1}
                intensity={1}
                size={2}
            />
            <div style={{ position: 'absolute', top: 16, left: 0, right: 0, zIndex: 20000, display: 'flex', justifyContent: 'center' }}>
                <GooeyNav
                    items={[
                        { label: 'Home', href: '#home' },
                        { label: 'About', href: '#about' },
                        { label: 'Contact', href: '#contact' },
                    ]}
                    particleCount={30}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 }}>
                <div style={{ width: '60%', maxWidth: 420 }}>
                    <TextPressure
                        text="Counter"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={14}
                    />
                </div>

                <Counter
                    value={count}
                    places={[100, 10, 1]}
                    fontSize={80}
                    padding={5}
                    gap={2}
                    textColor="white"
                    fontWeight={900}
                />
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                    <button
                        onClick={() => setCount(prev => prev - 1)}
                        style={{
                            padding: '10px 16px',
                            borderRadius: 8,
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(0,0,0,0.35)',
                            color: 'white',
                            cursor: 'pointer',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => setCount(prev => prev + 1)}
                        style={{
                            padding: '10px 16px',
                            borderRadius: 8,
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(0,0,0,0.35)',
                            color: 'white',
                            cursor: 'pointer',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing