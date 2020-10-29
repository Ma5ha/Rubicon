import React from "react";
import { api } from "../../api";
import useHookGet from "../../hooks/getHook";
import Card from "../card/card";
import Footer from "../card/footer";
import ScoreCircle from "../scoreCircle/socreCirle";

import { tvSearchResponse } from "./types";
import { Link } from "react-router-dom";
import FlexWarp from "../layout/flexWarp";
import FlexColumn from "../layout/flexColumn";
import Body from "../card/body";
import textClip from "../../hellpers/textClip";
import Spinner from "../spiner/spinner";
import Tooltip from "../tooltip/tooltip";

const TvTop10 = () => {
  const apiUrl = api.base + api.tv_top_rated + api.key;
  const [top_Rated] = useHookGet<tvSearchResponse>(apiUrl);

  const top10 = top_Rated?.results.slice(0, 10);
  const noImage = (
    <img src="https://i2.wp.com/tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg?ssl=1" />
  );

  return (
    <FlexWarp>
      {top10 ? (
        top10.map((show) => (
          <FlexColumn key={show.id}>
            <Link to={`/home/tv/${show.id}`}>
              <Card klass="boxShadow">
                <Body>
                  {show.poster_path === null ? (
                    noImage
                  ) : (
                    <img
                      src={api.tv_image + show.poster_path}
                      alt={show.name}
                    />
                  )}
                </Body>
                <Footer>
                  <div className="footerGrid padding-4px">
                    <Tooltip text={show.name}>
                      <div>
                        <h3 className="cardTitle">{textClip(show.name, 32)}</h3>
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
          </FlexColumn>
        ))
      ) : (
        <Spinner />
      )}
    </FlexWarp>
  );
};

export default TvTop10;
