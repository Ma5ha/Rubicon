import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useParams, useHistory } from "react-router-dom";
import { api } from "../../api";
import useHookGet from "../../hooks/getHook";

import { Details, Trailer, Title, Overview } from "../details/details";
import Spinner from "../spiner/spinner";

import { movieDetailsResponse } from "./types";

const MovieDetails = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const url = `${api.base}movie/${id}?${api.key}&append_to_response=videos`;
  const [result] = useHookGet<movieDetailsResponse>(url);

  const onClick = () => {
    goBack();
  };
  return result ? (
    <div className={"details"}>
      <IoMdArrowRoundBack onClick={onClick} className="backButton" />

      <Details>
        {result.videos.results[0] ? (
          <Trailer video={result.videos.results[0].key} />
        ) : (
          <img src={api.tv_image + `/${result.poster_path}`} alt="empty" />
        )}

        <div className="padding-2">
          <Title>{result?.title}</Title>
          <Overview>{result?.overview}</Overview>
        </div>
      </Details>
    </div>
  ) : (
    <Spinner />
  );
};

export default MovieDetails;
