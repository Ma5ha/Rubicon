export const pages = (
  activePage: number,
  showNeighbors: number,
  totalPages: number
) => {
  const array = [];

  for (
    let x = activePage - showNeighbors;
    x <= activePage + showNeighbors;
    x++
  ) {
    array.push(x);
  }
  return array.filter((x) => x <= totalPages && x > 0);
};
