import React, { useState } from "react";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SortPopup } from "../components/Sort";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: any) => state.pizza);
  const { categoryId, currentPage, sort, searchValue } = useSelector(
    (state: any) => state.filter
  );

  const [isLoading, setIsLaoding] = useState(true);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    setIsLaoding(true);
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
  };

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify(
  //       {
  //         sortProperty: sort.sortProperty,
  //         categoryId,
  //         currentPage,
  //       },
  //       { skipNulls: true }
  //     );
  //     navigate(`?${queryString}`);
  //   }

  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       })
  //     );
  //   }

  //   isMounted.current = true;
  // }, []);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);

  //   if (isSearch.current) {
  //     getPizzas();
  //   }

  //   isSearch.current = false;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        {/* categorisses */}
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div>
          <h1>Error while fetching data 😕</h1>
          <p>unfortunately got error while fetching pizza</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeleton : pizzas}
        </div>
      )}

      <Pagination value={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
