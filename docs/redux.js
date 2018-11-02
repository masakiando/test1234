/*
   Middleware
*/

export function deletePost(id) {
  return function (dispatch, getState) {
    console.log(id);
    return axios.delete(`/api/docs/${id}`, id)
    .then(response => {
      dispatch(deletePostSuccess(response.data));
    })
    .catch(error => {
      throw(error);
    });
  };
}
