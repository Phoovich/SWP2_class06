import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

export default function ProductCard({
  venueName,
  imgSrc,
  onCompare,
}: {
  venueName: string;
  imgSrc: string;
  onCompare: Function;
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
      <div className="w-full h-[15%] p-[10px]">{venueName}</div>
      <Rating
        onClick={(e) => {
          e.stopPropagation();
          onCompare(venueName);
        }}
        className="mx-2"
        defaultValue={0}
        precision={0.5}
      />
    </InteractiveCard>
  );
}
