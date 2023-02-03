export const renderPagination = (totlaPages, currentPage) => {
  if (totlaPages <= 1) return [];

  if (totlaPages <= 3)
    return Array.from({ length: totlaPages }).map((el, index) => ({
      isPage: true,
      value: index + 1,
    }));

  if (currentPage <= 3) {
    return [
      ...Array.from({ length: 3 }).map((el, index) => ({
        isPage: true,
        value: index + 1,
      })),
      { isPage: false, value: "..." },
      { isPage: true, value: totlaPages },
    ];
  }
  if (currentPage > 3) {
    if (totlaPages - currentPage < 3)
      return [
        { isPage: true, value: 1 },
        { isPage: false, value: "..." },
        ...Array.from({ length: 3 }).map((el, index) => ({
          isPage: true,
          value: totlaPages - (2 - index),
        })),
      ];
    else
      return [
        { isPage: true, value: 1 },
        { isPage: false, value: "..." },
        { isPage: true, value: currentPage - 1 },
        { isPage: true, value: currentPage },
        { isPage: true, value: currentPage + 1 },
        { isPage: false, value: "..." },
        { isPage: true, value: totlaPages },
      ];
  }
};
