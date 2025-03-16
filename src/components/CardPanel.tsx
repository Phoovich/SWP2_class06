"use client";
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
  const compareReducer = (
    compareList: Set<string>,
    action: { type: string; venueName: string },
  ) => {
    switch (action.type) {
      case "add":
        return new Set(compareList).add(action.venueName);
      case "remove":
        const newList = new Set(compareList);
        newList.delete(action.venueName);
        return newList;
      default:
        return compareList;
    }
  };

  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    new Set<string>(),
  );

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onCompare={(room: string) =>
            dispatchCompare({ type: "add", venueName: room })
          }
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onCompare={(room: string) =>
            dispatchCompare({ type: "add", venueName: room })
          }
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onCompare={(room: string) =>
            dispatchCompare({ type: "add", venueName: room })
          }
        />
      </div>
      <div className="w-full text-xl font-medium">
        venue List With Ratings {compareList.size}
      </div>
      {Array.from(compareList).map((venueName) => (
        <div key={venueName}>{venueName}</div>
      ))}
    </div>
  );
}
