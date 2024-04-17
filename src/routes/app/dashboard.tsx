import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { DashboardVariants } from "../../styles/variants"

const { dashcontent, dashwrapper, dashtitle, dashguide, dashhcards, dashhcard, dashhinfo, dashvalue, dashdescript } = DashboardVariants();

const dashboardData = [
  { id: 1, title: "Pedidos no dia", value: 38, dashdescript: "+2% em relação ao ano passado", },
  { id: 2, title: "Pedidos no mês", value: 124, dashdescript: "+2% em relação ao ano passado", },
  { id: 3, title: "Cancelamentos no mês", value: 12, dashdescript: "+2% em relação ao ano passado", },
  { id: 4, title: "Faturamento no mês", value: 1448.60, dashdescript: "+2% em relação ao ano passado", },
]

const data = [
  { data: '01/01', revenue: 1000 },
  { data: '02/02', revenue: 1245 },
  { data: '03/03', revenue: 3500 },
  { data: '04/04', revenue: 2990 },
  { data: '05/05', revenue: 4000 },
  { data: '06/06', revenue: 1830 },
]

const data2 = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarrela', amount: 24 },
  { product: 'Pepperonilll', amount: 12 },
  { product: 'Mussum', amount: 8 },
]
const COLORS = ['#8Be9fd', '#f472b6', '#c084fc', '#fde047']

export const DashboardPage = () => {
  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <div className={dashcontent()}>
      <div className={dashwrapper()}>
        <h1 className={dashtitle()}>Dashboard</h1>
        <div className={dashguide()}>
          <ul className={dashhcards()}>
            {dashboardData.map((data) => (
              <li className={dashhcard()} key={data.id}>
                <p className={dashhinfo()}>{data.title}</p>
                <p className={dashvalue()}>{data.id === 4 ? currentFormat.format(data.value) : data.value}</p>
                <p className={dashdescript()}>{data.dashdescript}</p>
              </li>
            ))}
          </ul>
          <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-6 gap-8'>
            <div className='2xl:col-span-4 p-4 md:p-6 rounded-md shadow-lg border-b border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-4'>Receita diária no período</p>
              <ResponsiveContainer width="100%" height={450}>
                <LineChart data={data}>
                  <CartesianGrid stroke={'#44475a'} vertical={false} />
                  <XAxis stroke={'#FFFFFF'} tickLine={false} axisLine={false} dataKey={'data'} dy={16} />
                  <YAxis stroke={'#FFFFFF'} tickLine={false} axisLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                  <Line stroke={'#8BE9FD'} strokeWidth={2} type={'linear'} dataKey={'revenue'} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='2xl:col-span-2 p-4 md:p-6 rounded-md shadow-lg border-b border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-4'>Mais vendidas no período</p>
              <ResponsiveContainer width="100%" height={450}>
                <PieChart>
                  <Pie data={data2} dataKey={'amount'} nameKey={'product'} cx={'50%'} cy={'50%'} outerRadius={175} innerRadius={125} strokeWidth={10} stroke={'#2b2d39'} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180
                    const radius = 12 + innerRadius + (outerRadius - innerRadius)
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)
                    return <text fill={'#FFFFFF'} x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline={'center'}>
                      {data2[index].product.length > 12
                        ? data2[index].product.substring(0, 12).concat('... ')
                        : data2[index].product}{' '}
                      {value}
                    </text>
                  }}>
                    {data2.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
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
