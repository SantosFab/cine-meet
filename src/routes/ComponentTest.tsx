import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { selectStateScearch, fetchSearch } from "../reducer/fetch/search/fetchSearch";

interface ComponentTestProps {}

const ComponentTest: FunctionComponent<ComponentTestProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

  const selectDataState= useSelector(selectStateScearch)
  console.log(selectDataState)
  useEffect(() => {
    dispatch(fetchSearch({query: 'x-men', page: 1}))
    return () => {};
  }, []);

  return <div>test</div>;
};

export default ComponentTest;
