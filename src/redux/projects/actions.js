export const addProjectSaga = (newProject) => ({
  type: "ADD_PROJECT_SAGA",
  payload: {
    newProject,
  },
});

export const addProjectRequest = (isLoading) => ({
  type: "ADD_PROJECT_REQUEST",
  payload: { isLoading },
});

export const addProjectSuccess = (isLoading, notification) => ({
  type: "ADD_PROJECT_SUCCESS",
  payload: {
    isLoading,
    notification,
  },
});