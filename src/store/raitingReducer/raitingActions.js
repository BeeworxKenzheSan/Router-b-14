export const API_URL = "https://aa905c320e418206.mokky.dev/raitings";

export const ACTION_TYPES = {
  GET: "get",
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
  LOADING: "loading",
  ERROR: "error",
};

export const getRaitings = () => {
  return async (dispatch) => {
    try {
      // 1
      dispatch({ type: ACTION_TYPES.LOADING });
      const response = await fetch(API_URL);
      if (!response.ok) {
        const result = await response.json();

        throw new Error(result.message);
      }
      const data = await response.json();
      dispatch({ type: ACTION_TYPES.GET, payload: data });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: error.message });
    }
  };
};

export const createRaiting = (data, navigation) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING });
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
      }
      navigation(-1);
    } catch (error) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: error.message });
    }
  };
};

export const updateRaiting = (id, data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING });
      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate(-1);
    } catch (error) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: error.message });
    }
  };
};

export const getById = (id) => {
  return async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const result = await response.json();
    return result;
  };
};
