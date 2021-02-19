const filterItems = (items, descriptionLike, titleLike) => {
  let filtered = items;

  if (descriptionLike) {
    filtered = filtered.filter((item) =>
      item.snippet.description.includes(descriptionLike)
    );
  }

  if (titleLike) {
    filtered = filtered.filter((item) => item.snippet.title.includes(titleLike));
  }

  return filtered;
};

export default filterItems;
