import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetRegionList } from "../actions/regionActions";
import { Link } from "react-router-dom";

const RegionList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const regionList = useSelector(state => state.RegionList);

  useEffect(() => {
    FetchData(1)
  }, []);

  const FetchData = () => {
    dispatch(GetRegionList())
  }

  const ShowData = () => {
    if (regionList.loading) {
      return <p>Carregando...</p>
    }

    if (!_.isEmpty(regionList.data)) {
      return (
        <div className={"list-wrapper"}>
          {regionList.data.map(el => {
            return (
              <div className={"region-item"}>
                <p>{el.name}</p>
                <Link to={`/region/${el.name}`}>Show</Link>
              </div>
            )
          })}
        </div>
      )
    }

    if (regionList.errorMsg !== "") {
      return <p>{regionList.errorMsg}</p>
    }

    return <p>falha na requisicao</p>
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Pesquisar: </p>
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/region/${search}`)}>Pesquisar</button>
      </div>
      {ShowData()}
    </div>
  )
};

export default RegionList;