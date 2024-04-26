import React from "react";

interface FlixImageProps {
  mobSrc?: string;
  deskSrc: string;
  alt: string;
  height?: number;
  width?: number;
  id?: string;
  className?: string;
}

function FlixImage(props: FlixImageProps) {
  const {
    mobSrc,
    deskSrc,
    alt,
    height,
    width,
    id,
    className,
  } = props;

  return (
    <picture>
      <source
        media="(min-width:768px)"
        srcSet={deskSrc}
      />
      <img
        src={mobSrc}
        alt={alt}
        height={height ? height : "100%"}
        width={width ? width : "100%"}
        id={id}
        className={className}
      />
    </picture>
  );
}

export default FlixImage;
