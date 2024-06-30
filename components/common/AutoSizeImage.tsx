import NextImage from "next/image";
import { useEffect, useState } from "react";

const AutoSizedImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img = new window.Image(); // Ensure the global Image constructor is recognized
    img.src = src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, [src]);

  return (
    <div className="relative w-full" style={{ height: imageHeight }}>
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        sizes="2000px"
      />
    </div>
  );
};

export default AutoSizedImage;
