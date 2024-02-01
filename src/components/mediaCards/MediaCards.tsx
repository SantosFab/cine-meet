import { TypeOfMedia } from "../../reducer/fetch/detail/interface";
import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { ResultItem } from "../../reducer/fetch/commonTypes/interface";
import React from "react";

import "./mediaCards.css";
import FilmeCard from "../filmCard/FilmCard";

interface MediaCardsProps {
  results: ResultItem[] | never[];

  mediaType?: TypeOfMedia;
}

const MediaCards: FunctionComponent<MediaCardsProps> = ({
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
            name={name}
            title={title}
            overview={overview}
            media_type={media_type}
            poster_path={poster_path}
            mediaType={mediaType}
          />
        )
    )}
  </Container>
);

export default MediaCards;
