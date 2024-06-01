import { api } from '../lib/axios'
import { RestaurantProps } from '../types'

export const RestaurantApi = async () =>
  await api.get<RestaurantProps>('/managed-restaurant').then((res) => res.data)