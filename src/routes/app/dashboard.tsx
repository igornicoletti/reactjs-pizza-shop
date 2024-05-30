import { DashboardVariants } from '../../styles/variants'
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const { dashcontent, dashwrapper, dashtitle, dashguide, dashdata, dashchart, dashcardlt, dashcardrt, dashcard, dashinfo, dashvalue, dashdescript } = DashboardVariants()

const cardData = [
  {
    id: 1,
    title: "Pedidos",
    value: '38',
    descript: "+20.1% em relação ao dia anterior"
  },
  {
    id: 2,
    title: "Concluídos",
    value: '124',
    descript: "+18.1% em relação ao mês passado"
  },
  {
    id: 3,
    title: "Cancelados",
    value: '12',
    descript: "-8% em relação ao mês passado"
  },
  {
    id: 4,
    title: "Faturamento",
    value: 'R$ 1448.60',
    descript: "+38% em relação ao mês passado"
  }
]

const lineData = [
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

const pieData = [
  {
    id: 1,
    product: 'Pepperoni',
    amount: 40
  },
  {
    id: 2,
    product: 'Mussarrela',
    amount: 31
  },
  {
    id: 3,
    product: 'Especial da casa',
    amount: 24
  },
  {
    id: 4,
    product: 'Quatro queijos',
    amount: 16
  },
  {
    id: 5,
    product: 'Marguerita',
    amount: 10
  }
]

const pieColors = ['#8be9fd', '#c084fc', '#f472b6', '#4ade80', '#fde047']

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
      <text fontSize={14} x={x} y={y} fill={'#FFFFFF'} dominantBaseline={'center'} textAnchor={x > cx ? 'start' : 'end'}>
        {pieData[index].product.length > 14
          ? pieData[index].product.substring(0, 14).concat('... ')
          : pieData[index].product
        }: {value}
      </text>
    )
  }

  return (
    <div className={dashcontent()}>
      <div className={dashwrapper()}>
        <h1 className={dashtitle()}>Dashboard</h1>
        <div className={dashguide()}>
          <div className={dashdata()}>
            {cardData.map((data) => (
              <div className={dashcard()} key={data.id}>
                <p className={dashinfo()}>{data.title}</p>
                <p className={dashvalue()}>{data.value}</p>
                <p className={dashdescript()}>{data.descript}</p>
              </div>
            ))}
          </div>
          <div className={dashchart()}>
            <div className={dashcardlt()}>
              <p className={dashinfo()}>Visão geral</p>
              <ResponsiveContainer width={'100%'} height={350}>
                <LineChart data={lineData} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
                  <CartesianGrid vertical={false} stroke={'#44475a'} />
                  <XAxis dy={8} fontSize={14} tickLine={false} axisLine={false} dataKey={'data'} stroke={'#FFFFFF'} />
                  <YAxis fontSize={14} tickLine={false} axisLine={false} stroke={'#FFFFFF'}
                    tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                  <Tooltip contentStyle={{ 'borderRadius': '0.375rem', 'backgroundColor': '#282A36', 'borderBottomColor': '#8Be9fd', 'borderWidth': '0 0 0.175rem 0', }} />
                  <Line strokeWidth={2} type={'monotone'} stroke={'#8BE9FD'} dataKey={'revenue'} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className={dashcardrt()}>
              <p className={dashinfo()}>Mais vendidos</p>
              <ResponsiveContainer width={'100%'} height={350}>
                <PieChart>
                  <Pie cx={'50%'} cy={'50%'} stroke={'#2b2d39'} dataKey={'amount'} nameKey={'product'} strokeWidth={10} labelLine={false} outerRadius={150} innerRadius={125} data={pieData} label={labelPieChart} >
                    {pieData.map((data) => (
                      <Cell key={data.id} fill={pieColors[data.id % pieColors.length]} />
                    ))}
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
