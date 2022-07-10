import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { SearchContext } from "../App";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  // const categoryId = useSelector((state) => state.filter.categoryId);
  const { categoryId, pageCount, sort } = useSelector((state) => state.filter);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLaoding] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  React.useEffect(() => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    const url = `https://628a09fee5e5a9ad32203421.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`;
    axios.get(url).then((res) => {
      console.log(res);
      setItems(res.data);
      setIsLaoding(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, pageCount]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        {/* categorisses */}
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
