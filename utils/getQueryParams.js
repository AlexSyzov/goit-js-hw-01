import queryString from "query-string";

const getQueryParams = (query) => queryString.parse(query);

export default getQueryParams;
