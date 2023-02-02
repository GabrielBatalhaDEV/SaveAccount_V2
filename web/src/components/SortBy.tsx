import { CaretDown, Funnel } from "phosphor-react";
import { useEffect, useState } from "react";

export function SortBy() {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

  function openDropDownMenu() {
    console.log(isOpenDropdownMenu);
    setIsOpenDropdownMenu(!isOpenDropdownMenu);
  }
  return <div></div>;
}
