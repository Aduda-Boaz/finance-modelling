const FETCH_SUCCESS = 'company-profile/company/FETCH_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return ([...action.payload]);
    default:
      return state;
  }
};

export default reducer;

export const fetchDataSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchData = (company) => async (dispatch) => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${company}?apikey=c72f83b1dfc59f79c4cdee3c9b93c7f4`);
  const data = await response.json();
  const info = Object.entries(data).map(([key, item]) => ({
    companyName: item.companyName,
    symbol: item.symbol,
    industry: item.industry,
    ceo: item.ceo,
    country: item.country,
    address: item.address,
    fullTimeEmployees: item.fullTimeEmployees,
    phone: item.phone,
    website: item.website,
    currency: item.currency,
    exchange: item.exchange,
    exchangeShortName: item.exchangeShortName,
    sector: item.sector,
    ipoDate: item.ipoDate,
    mktCap: item.mktCap,
    lastDiv: item.lastDiv,
    price: item.price,
    isin: item.isin,
    changes: item.changes,
    cik: item.cik,
    range: item.range,
    image: item.image,
    id: key,
  }));

  dispatch(fetchDataSuccess(info));
};
