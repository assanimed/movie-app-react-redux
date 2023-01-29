const filterQueryBuilder = async (entries) => {
  let query = [];
  if ("keyword" in entries)
    query.push(`filters[title][$contains]=${entries["keyword"]}`);
  if ("genre" in entries)
    query.push(`filters[genre][$contains]=${entries["genre"]}`);
  if ("startYear" in entries)
    query.push(
      `filters[$and][0][releaseDate][$gte]=${entries["startYear"]}-01-01`
    );
  if ("endYear" in entries)
    query.push(
      `filters[$and][${
        "startYear" in entries ? "1" : "0"
      }][releaseDate][$lte]=${entries["endYear"]}-12-31`
    );
  if ("startRating" in entries)
    query.push(`filters[$and][0][rating][$gte]=${entries["startRating"]}`);
  if ("endRating" in entries)
    query.push(
      `filters[$and][${"startRating" in entries ? "1" : "0"}][rating][$lte]=${
        entries["endRating"]
      }`
    );

  return query.join("&");
};

export default filterQueryBuilder;
