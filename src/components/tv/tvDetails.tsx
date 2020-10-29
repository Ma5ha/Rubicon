import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { api } from "../../api";
import useHookGet from "../../hooks/getHook";
import Button from "../button/button";
import { Details, Trailer, Title, Overview } from "../details/details";

import { tvDetails } from "./types";

import { IoMdArrowRoundBack } from "react-icons/io";
import Spinner from "../spiner/spinner";
import FlexWarp from "../layout/flexWarp";

const TvDetails = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const url = `${api.base}tv/${id}?${api.key}&append_to_response=videos`;
  const [result] = useHookGet<tvDetails>(url);

  const className = "details";
  const onClick = () => {
    goBack();
  };
  return result ? (
    <div className={className}>
      <IoMdArrowRoundBack onClick={onClick} className="backButton" />

      <Details>
        {result.videos.results[0] ? (
          <Trailer video={result.videos.results[0].key} />
        ) : (
          <img src={api.tv_image + `/${result.poster_path}`} />
        )}

        <div className="padding-2">
          <Title>{result?.name}</Title>
          <Overview>{result?.overview}</Overview>
        </div>
      </Details>
    </div>
  ) : (
    <FlexWarp>
      <Spinner />
    </FlexWarp>
  );
};

export default TvDetails;
