"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

    }, [])
    
    return (
        <section className='w-full pt-36 md:pt-48 pb-10'>
            <div className='space-y-6 text-center'>
                <div className='space-y-6 mx-auto'>
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient"> Your AI Career Coach For <br />
                        Professional Succes
                    </h1>
                    <p>Advance your career with personalized guidence, interview prep and
                        AI-powered tools for jobs success</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button siz="lg" className="px-8"> Get Started </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button siz="lg" className="px-8" variant="outline"> Get Started </Button>
                    </Link>
                </div>
                <div className='hero-image-Wrapper'>
                    <div ref={imageRef} className='hero-image'>
                        <Image src={"/banner.jpeg"}
                            width={1280}
                            height={720}
                            alt='Banner OsmosysAi'
                            className='rounded-lg shadow-2xl border mx-auto'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection