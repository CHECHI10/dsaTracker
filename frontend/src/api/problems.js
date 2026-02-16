import api from './axios'

export const getProblems = () => {
  return api.get('/problems');
} 

export const addProblem = (data) => {
  return api.post('/problems', data);
}

export const updateProblem = (id, data) => {
  return api.patch(`/problems/${id}`, data);
}

export const deleteProblem = (id) => {
  return api.delete(`/problems/${id}`);
}

export const deleteProblems = () => {
  return api.delete('/problems');
}