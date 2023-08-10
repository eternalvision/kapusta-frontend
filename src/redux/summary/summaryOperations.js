import axios from 'axios';

import summaryActions from './summaryActions';

axios.defaults.baseURL = 'https://quickest-early-vase.glitch.me/api/';

const getSummary = (summaryType, thisYear) => async dispatch => {
  dispatch(summaryActions.getSummaryRequest());
  try {
    const { data } = await axios.get(
      `/transaction/summary/${summaryType}/${thisYear}`,
    );
    dispatch(summaryActions.getSummarySuccess(data));
  } catch (error) {
    dispatch(summaryActions.getSummaryError(error.message));
  }
};

const summaryOperations = {
  getSummary,
};

export default summaryOperations;
