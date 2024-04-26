import React, { useEffect, useState } from "react";
import "./filterPills.css";
import useGenreService from "../../hooks/use-genre-service";

interface FilterProps {
  onGenreSelection?: (selectedGenres: number[]) => void;
}

function FilterPills(props: FilterProps) {
  const { onGenreSelection } = props,
  { genres } = useGenreService(),
	[selectedGenre, setSelectedGenre] = useState<number[]>([]),

	onGenreSelected = (oGenre: Genre) => {
    const isAlreadySelected: boolean = selectedGenre.includes(oGenre.id);
    if (isAlreadySelected) {
      setSelectedGenre(selectedGenre.filter((id) => id!== oGenre.id));
    } else {
      setSelectedGenre((prevGenre: number[]) => {
        const updatedGenres = [...prevGenre, oGenre.id];
        return updatedGenres;
      });
    }
	};

  useEffect(() => {
    if (onGenreSelection) {
      onGenreSelection(selectedGenre);
    }
  },[selectedGenre])

  return (
    <div className="filter-container">
      {genres.map((genre: Genre) => {
        const id: number = genre.id;
        const name: string = genre.name;
        const isSelected: boolean = selectedGenre.includes(id);
        return (
          <button
            onClick={() => onGenreSelected(genre)}
            key={id}
            className={ isSelected ? "filter-pill active" : "filter-pill"}
          >
						{name}
					</button>
        );
      })}
    </div>
  );
}

export default FilterPills;
