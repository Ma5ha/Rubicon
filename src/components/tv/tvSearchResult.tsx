import React, { useContext, useEffect, useState } from "react";
import getAction from "../../actions/getAction";
import { api } from "../../api";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

import { SearchContext } from "../../page/home";
import Card from "../card/card";
import Footer from "../card/footer";
import FlexColumn from "../layout/flexColumn";
import FlexWarp from "../layout/flexWarp";
import PagginationBox from "../paggaination/pagginationBox";
import ScoreCircle from "../scoreCircle/socreCirle";
import { tvSearchResponse } from "./types";
import textClip from "../../hellpers/textClip";
import Spinner from "../spiner/spinner";
import Tooltip from "../tooltip/tooltip";
import NoSearchResult from "../no result message/noResMessage";
import DelayMount from "../deleyMount/delayMount";

const TvSearch = () => {
  const [tvResponse, setTvResponse] = useState<tvSearchResponse>();
  const [page, setPage] = useState(1);
  const searchContext = useContext(SearchContext);

  const deboundedSearch = useDebounce(searchContext.query, 1000);
  const url = `${api.base}search/tv?${api.key}&page=${page}&query=${deboundedSearch}`;

  useEffect(() => {
    if (deboundedSearch?.length > 3) {
      getAction(url, setTvResponse);
    }

    return () => setTvResponse(null);
  }, [url]);
  const noImage = (
    <img src="https://i2.wp.com/tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg?ssl=1" />
  );

  return (
    <>
      <FlexWarp>
        {tvResponse?.total_results === 0 ? (
          <NoSearchResult type="tv show" title={deboundedSearch} />
        ) : null}
        {tvResponse?.results ? (
          tvResponse.results.map((show, i) => (
            <FlexColumn key={show.id}>
              <DelayMount delay={200 * i}>
                <Link to={`/home/tv/${show.id}`}>
                  <Card klass="boxShadow flip-in-ver-right">
                    {show.poster_path === null ? (
                      noImage
                    ) : (
                      <img
                        src={api.tv_image + show.poster_path}
                        alt={show.name}
                      />
                    )}

                    <Footer>
                      <div className="footerGrid padding-4px">
                        <Tooltip text={show.name}>
                          <div>
                            <h3 className="cardTitle">
                              {textClip(show.name, 32)}
                            </h3>
                          </div>
                        </Tooltip>
                        <div>
                          <p className="cardSecond">
                            Air date: <i>{show.first_air_date}</i>
                          </p>
                        </div>
                        <div>
                          <div className="floatRight">
                            <ScoreCircle>{show.vote_average}</ScoreCircle>
                          </div>
                        </div>
                      </div>
                    </Footer>
                  </Card>
                </Link>
              </DelayMount>
            </FlexColumn>
          ))
        ) : (
          <Spinner />
        )}
      </FlexWarp>
      <div className="flexRow">
        {tvResponse?.total_pages ? (
          <PagginationBox
            {...{ page, total_pages: tvResponse.total_pages, setPage }}
          />
        ) : null}
      </div>
    </>
  );
};

export default TvSearch;
