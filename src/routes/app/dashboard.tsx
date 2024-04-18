import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { DashboardVariants } from "../../styles/variants"

const { dashcontent, dashwrapper, dashtitle, dashguide, dashhcards, dashhcard, dashhinfo, dashvalue, dashdescript } = DashboardVariants();

const cardData = [
  { id: 1, title: "Pedidos", value: '38', dashdescript: "+20.1% em relação ao dia anterior", },
  { id: 2, title: "Vendas", value: '124', dashdescript: "+18.1% em relação ao mês passado", },
  { id: 3, title: "Cancelados", value: '12', dashdescript: "-8% em relação ao mês passado", },
  { id: 4, title: "Rendimento total", value: 'R$ 1448.60', dashdescript: "+38% em relação ao mês passado", },
]

const lineChartData = [
  { data: '01/01', revenue: 1000 },
  { data: '02/02', revenue: 1245 },
  { data: '03/03', revenue: 3500 },
  { data: '04/04', revenue: 2990 },
  { data: '05/05', revenue: 4000 },
  { data: '06/06', revenue: 1830 },
]

const pieChartData = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarrela', amount: 24 },
  { product: 'Pepperonilll', amount: 12 },
  { product: 'Mussum', amount: 8 },
]

const pieChartColors = ['#8Be9fd', '#f472b6', '#c084fc', '#fde047']

export const DashboardPage = () => {
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
            <div className='2xl:col-span-4 p-4 md:p-6 rounded-md shadow-lg border-b border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-8'>Visão geral</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={lineChartData}>
                  <CartesianGrid stroke={'#44475a'} vertical={false} />
                  <XAxis stroke={'#FFFFFF'} tickLine={false} axisLine={false} dataKey={'data'} dy={16} />
                  <YAxis stroke={'#FFFFFF'} tickLine={false} axisLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                  <Line stroke={'#8BE9FD'} strokeWidth={2} type={'linear'} dataKey={'revenue'} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='2xl:col-span-2 p-4 md:p-6 rounded-md shadow-lg border-b border-in-cyan bg-gradient-to-br from-in-slate'>
              <p className='uppercase font-medium pb-8'>Vendas recentes</p>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie data={pieChartData} dataKey={'amount'} nameKey={'product'} cx={'50%'} cy={'50%'} outerRadius={150} innerRadius={100} strokeWidth={10} stroke={'#2b2d39'} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180
                    const radius = 12 + innerRadius + (outerRadius - innerRadius)
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)
                    return <text fill={'#FFFFFF'} x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline={'center'}>
                      {pieChartData[index].product.length > 12
                        ? pieChartData[index].product.substring(0, 12).concat('... ')
                        : pieChartData[index].product}{' '}
                      {value}
                    </text>
                  }}>
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
