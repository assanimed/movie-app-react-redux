import React from "react";
import styled from "styled-components";

const NoPhoto = styled.div`
  color: red;
  font-size: 2rem;
  border: 2px solid red;
  padding: 10px 20px;
`;

const MovieCardModal = ({ poster, title }) => {
  const posterPortions = poster.split("1337");
  const noPhoto = posterPortions[posterPortions.length - 1] === "undefined";
  return (
    <div className="p-2 mt-5 flex flex-col items-center gap-8">
      <div>
        {noPhoto ? (
          <NoPhoto> No Poster ⛔</NoPhoto>
        ) : (
          <img style={{ width: "10rem" }} src={poster} alt={`title ${title}`} />
        )}
      </div>
      <div>
        <p className="text-xs text-indigo-700">{title}</p>
      </div>
    </div>
  );
};

export default MovieCardModal;
