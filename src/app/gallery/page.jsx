import Image from "next/image";

export default function page() {
  const images = [1, 2, 3];
  return (
    <div>
      <he className="text-3xl">Gallery Page</he>
      <div>
        {images.map((img) => {
          <Image
            key={img}
            src={`./image/${img}.jpeg`}
            alt={`Image ${img}`}
            height="500"
            width="500"
            onError={(e) =>
              console.error(`Failed to load image /image/${img}.jpeg`, e)
            }
          />;
        })}
      </div>
    </div>
  );
}
