import { TypeOfMedia } from "../../reducer/fetch/detail/interface";
import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import React from "react";

import "./cards.css";
import FilmeCard from "../filmCard/FilmCard";

interface CardsProps {
  results: ResultItem[] | never[];

  mediaType?: TypeOfMedia;
}

const Cards: FunctionComponent<CardsProps> = ({
  results,

  mediaType = "movie",
}) => (
  <Container className="d-flex flex-wrap justify-content-start Cards">
    {results?.map(
      ({ id, media_type, name, overview, poster_path, title }: ResultItem) =>
        media_type === "person" ? (
          <React.Fragment key={id} />
        ) : (
          <FilmeCard
            key={id}
            id={id}
            mediaType={mediaType}
            media_type={media_type}
            name={name}
            overview={overview}
            poster_path={poster_path}
            title={title}
          />
        )
    )}
  </Container>
);

export default Cards;
