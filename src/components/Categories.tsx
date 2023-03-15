import React from "react";
// import { useWhyDidYouUpdate } from "ahooks";

type CategoryProps = { value: number; onClickCategory: (i: number) => void };

const Categories: React.FC<CategoryProps> = React.memo(
  ({ value, onClickCategory }) => {
    // useWhyDidYouUpdate("Categories", { value, onClickCategory });

    const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => {
            return (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={value === i ? "active" : ""}
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Categories;
