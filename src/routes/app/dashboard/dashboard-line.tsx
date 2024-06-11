import { useQuery } from '@tanstack/react-query'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { PeriodApi } from '../../../api'

export const DashboardPageLine = () => {
  const { data: period } = useQuery({
    queryKey: ['metrics', 'daily-receipt-in-period'],
    queryFn: PeriodApi,
  })

  return (
    <>
      {period && (
        <ResponsiveContainer width={'100%'} height={350}>
          <LineChart data={period} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
            <CartesianGrid vertical={false} stroke={'#44475a'} />
            <XAxis dy={8} fontSize={14} tickLine={false} axisLine={false} dataKey={'date'} stroke={'#FFFFFF'} />
            <YAxis fontSize={14} tickLine={false} axisLine={false} stroke={'#FFFFFF'} tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
            <Tooltip contentStyle={{ 'borderRadius': '0.375rem', 'backgroundColor': '#282A36', 'borderBottomColor': '#8Be9fd', 'borderWidth': '0 0 0.175rem 0', }} />
            <Line strokeWidth={2} type={'monotone'} stroke={'#8BE9FD'} dataKey={'receipt'} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  )
}