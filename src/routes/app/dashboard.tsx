import { DashboardVariants } from '../../styles/variants'
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const { dashcontent, dashwrapper, dashtitle, dashguide, dashhcards, dashhcard, dashhinfo, dashvalue, dashdescript } = DashboardVariants()

const cardData = [
  { id: 1, title: "Pedidos", value: '38', dashdescript: "+20.1% em relação ao dia anterior", },
  { id: 2, title: "Vendas", value: '124', dashdescript: "+18.1% em relação ao mês passado", },
  { id: 3, title: "Cancelados", value: '12', dashdescript: "-8% em relação ao mês passado", },
  { id: 4, title: "Rendimento total", value: 'R$ 1448.60', dashdescript: "+38% em relação ao mês passado", }
]

const lineChartData = [
  { data: '01/01', revenue: 1000 },
  { data: '02/01', revenue: 1245 },
  { data: '03/01', revenue: 3500 },
  { data: '04/01', revenue: 2990 },
  { data: '05/01', revenue: 4000 },
  { data: '06/01', revenue: 1230 },
  { data: '07/01', revenue: 1802 },
  { data: '08/01', revenue: 2540 },
  { data: '09/01', revenue: 890 },
  { data: '10/01', revenue: 1300 },
]

const pieChartData = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarrela', amount: 24 },
  { product: 'Especial da casa', amount: 12 },
  { product: 'Quatro queijos', amount: 31 },
  { product: 'Marguerita', amount: 16 },
]

const pieChartColors = ['#8Be9fd', '#f472b6', '#c084fc', '#fde047', '#4ade80']

type Props = {
  cx: string
  cy: string
  midAngle: string
  innerRadius: number
  outerRadius: number
  value: string
  index: number
}

export const DashboardPage = () => {

  const labelPieChart = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }: Props) => {
    const RADIAN = Math.PI / 180
    const radius = 12 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <text fill={'#FFFFFF'} fontSize={14} x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline={'center'}>
        {pieChartData[index].product.length > 14
          ? pieChartData[index].product.substring(0, 14).concat('... ')
          : pieChartData[index].product
        }: {value}
      </text>
    )
  }

  return (
    <div className={dashcontent()}>
      <div className={dashwrapper()}>
        <h1 className={dashtitle()}>Dashboard</h1>
        <div className={dashguide()}>
          <ul className={dashhcards()}>
            {cardData.map((data) => (
              <li className={dashhcard()} key={data.id}>
                <p className={dashhinfo()}>{data.title}</p>
                <p className={dashvalue()}>{data.value}</p>
                <p className={dashdescript()}>{data.dashdescript}</p>
              </li>
            ))}
          </ul>
          <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-6 gap-6'>
            <div className='2xl:col-span-4 p-4 md:p-6 rounded-md shadow-lg border-b-2 border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-8'>Visão geral</p>
              <ResponsiveContainer width={'100%'} height={350}>
                <LineChart data={lineChartData} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
                  <CartesianGrid
                    vertical={false}
                    stroke={'#44475a'}
                  />
                  <XAxis
                    dy={8}
                    fontSize={14}
                    tickLine={false}
                    axisLine={false}
                    dataKey={'data'}
                    stroke={'#FFFFFF'}
                  />
                  <YAxis
                    fontSize={14}
                    tickLine={false}
                    axisLine={false}
                    stroke={'#FFFFFF'}
                    tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  />
                  <Tooltip contentStyle={{
                    'borderRadius': '0.375rem',
                    'backgroundColor': '#282A36',
                    'borderBottomColor': '#8Be9fd',
                    'borderWidth': '0 0 0.175rem 0',
                  }} />
                  <Line
                    strokeWidth={2}
                    type={'monotone'}
                    stroke={'#8BE9FD'}
                    dataKey={'revenue'}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='2xl:col-span-2 p-4 md:p-6 rounded-md shadow-lg border-b-2 border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-8'>Vendas recentes</p>
              <ResponsiveContainer width={'100%'} height={350}>
                <PieChart>
                  <Pie
                    cx={'50%'}
                    cy={'50%'}
                    stroke={'#2b2d39'}
                    dataKey={'amount'}
                    nameKey={'product'}
                    strokeWidth={10}
                    labelLine={false}
                    outerRadius={150}
                    innerRadius={100}
                    data={pieChartData}
                    label={labelPieChart}
                  >
                    {pieChartData.map((_, index) => <Cell key={index} fill={pieChartColors[index % pieChartColors.length]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
