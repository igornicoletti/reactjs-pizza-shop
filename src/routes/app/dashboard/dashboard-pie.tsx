import { useQuery } from '@tanstack/react-query'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

import { PopulartApi } from '../../../api'
import { RechartsProps } from '../../../types'

const pieColors = ['#8be9fd', '#c084fc', '#f472b6', '#4ade80', '#fde047']

export const DashboardPagePie = () => {
  const { data: popular } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: PopulartApi,
  })

  return (
    <>
      {popular && (
        <ResponsiveContainer width={'100%'} height={350}>
          <PieChart>
            <Pie cx={'50%'} cy={'50%'} stroke={'#2b2d39'} dataKey={'amount'} nameKey={'product'}
              strokeWidth={10} labelLine={false} outerRadius={150} innerRadius={115} data={popular}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }: RechartsProps) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)
                return (
                  <text fontSize={14} x={x} y={y} fill={'#FFFFFF'} dominantBaseline={'center'} textAnchor={x > cx ? 'start' : 'end'}>
                    {popular[index].product.length > 10
                      ? popular[index].product.substring(0, 10).concat('... ')
                      : popular[index].product
                    }: {value}
                  </text>
                )
              }}>
              {popular.map((_, index) => <Cell key={index} fill={pieColors[index % pieColors.length]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  )
}