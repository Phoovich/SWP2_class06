import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard contentName={venueName}>
      <div className="w-full h-[70%] relative rounded-lg shadow-lg bg-white">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px]">{venueName}</div>
    </InteractiveCard>
  );
}
