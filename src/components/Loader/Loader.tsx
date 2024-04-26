import React from "react";
import "./loader.css" ;

interface LoaderProps {
  isLoading: boolean;
}

function Loader(props: LoaderProps) {
  const { isLoading } = props;

  return (
    isLoading ? (
      <div className="ldsRipple">
        <div></div>
        <div></div>
      </div>
    ) : <></>
  );
}

export default Loader;
