import React from "react";
import styled from "styled-components";

const StarContainer = styled.div`
  width: 50px;
  .gold {
    color: #ffd700;
  }
`;

const Star = styled.span`
  color: #ababab;
`;

const Stars = ({ rating }) => {
  const ratingsArray = [];
  let ratingCount = rating;
  while (ratingsArray.length <= 5) {
    if (ratingCount < 1) {
      ratingsArray.push(0);
    } else {
      ratingsArray.push(1);
      ratingCount -= 1;
    }
  }

  return (
    <StarContainer>
      {ratingsArray.map((rating) => {
        if (rating === 1)
          return (
            <Star key={Math.random() * Date.now()} className="gold">
              &#9733;
            </Star>
          );
        return <Star key={Math.random() * Date.now()}>&#9733;</Star>;
      })}
    </StarContainer>
  );
};

export default Stars;
