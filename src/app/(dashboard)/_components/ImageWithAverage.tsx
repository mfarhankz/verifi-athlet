import React from "react";
import { Flex } from "antd";
import Image from "next/image";

interface ImageWithAverageProps {
  src: string;
  alt: string;
  size?: string;
  height: number;
  width: number;
  containerWidth?: string;
  average: number;
}

export default function ImageWithAverage({
  src,
  alt,
  size = "",
  height,
  width,
  containerWidth,
  average,
}: ImageWithAverageProps) {
  const getClassByAvg = (avg: number) => {
    if (avg < 30) return "error";
    if (avg >= 30 && avg <= 50) return "warning";
    return "success";
  };
  return (
    <Flex className={`user-image ${size}`} align="center" style={{width:containerWidth}}>
      <Image src={src} alt={alt} height={height} width={width} />
      <span className={getClassByAvg(average)}>{average}</span>
    </Flex>
  );
}