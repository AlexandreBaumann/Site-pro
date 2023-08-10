import data from '../assets/data.json'

export const state = () => ({
  data: data,
})
export const getters = {
  topInterestProjects: (state) => {
    return [...state.data].sort((a, b) => b.interet - a.interet).slice(0, 3)
  },
}
