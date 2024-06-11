import { api } from '../lib/axios'
import { MetricsDayProps, MetricsMonthProps, MetricsPeriodProps, MetricsPopularProps, MetricsRevenueProps } from '../types'

export const CanceledApi = async () =>
  await api.get<MetricsMonthProps>('/metrics/month-canceled-orders-amount').then((res) => res.data)

export const DayApi = async () =>
  await api.get<MetricsDayProps>('/metrics/day-orders-amount').then((res) => res.data)

export const MonthApi = async () =>
  await api.get<MetricsMonthProps>('/metrics/month-orders-amount').then((res) => res.data)

export const RevenueApi = async () =>
  await api.get<MetricsRevenueProps>('/metrics/month-receipt').then((res) => res.data)

export const PopulartApi = async () =>
  await api.get<MetricsPopularProps>('/metrics/popular-products').then((res) => res.data)

export const PeriodApi = async () =>
  await api.get<MetricsPeriodProps>('/metrics/daily-receipt-in-period').then((res) => res.data)