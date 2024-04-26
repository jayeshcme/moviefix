import React, { useState } from "react";
import "./bodyLayout.css";
import FilterPills from "../FilterPills/FilterPills";
import MovieListByYear from "../MovieListByYear/MovieListByYear";

function BodyLayout() {
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);
  const onGenreSelection = (selectedGenreIds: number[]) => {
    setSelectedGenreIds(selectedGenreIds);
  };
  return (
    <div className="body-layout">
      <FilterPills onGenreSelection={onGenreSelection}></FilterPills>
      <MovieListByYear selectedGenres={selectedGenreIds}></MovieListByYear>
    </div>
  )
}

export default BodyLayout;

