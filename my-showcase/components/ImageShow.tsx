"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageGalleryProps } from "@/lib/types";

export default function ImageShow({ screenshots, title }: ImageGalleryProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % screenshots.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + screenshots.length) % screenshots.length
        );
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((src, i) => (
                    <div
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="relative w-full h-64 overflow-hidden rounded-lg border-2 border-orange-100 shadow-md cursor-pointer group"
                    >
                        <Image
                            src={src}
                            alt={`${title} screenshot ${i + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Модалка */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-5xl max-h-5xl p-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl font-bold p-2 transition-transform duration-300 transform hover:scale-110"
                        >
                            &times;
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold p-2 transition-transform duration-300 transform hover:scale-110"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold p-2 transition-transform duration-300 transform hover:scale-110"
                        >
                            &#8250;
                        </button>
                        <Image
                            src={screenshots[currentImageIndex]}
                            alt={`Full-screen view of ${title} screenshot ${currentImageIndex + 1}`}
                            width={1000}
                            height={1000}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}