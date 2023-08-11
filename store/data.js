import data from '../assets/portfolio.json'
import metaData from '../assets/meta.json'

export const state = () => ({
  data: data,
  metaData: metaData,
})

export const getters = {
  topInterestProjects: (state) => {
    return [...state.data].sort((a, b) => b.interet - a.interet).slice(0, 3)
  },
  getMetaData: (state) => (url) => {
    return state.metaData.find((meta) => meta.url === url) || {}
  },
}
