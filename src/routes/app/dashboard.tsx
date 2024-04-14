import { DashboardVariants } from "../../styles/variants";

const { dashcontent, dashwrapper, dashtitle, dashguide, dashhcards, dashhcard, dashhinfo, dashvalue, dashdescript } = DashboardVariants();

const dashboardData = [
  {
    id: 1,
    title: "Pedidos do dia",
    value: 1248.60,
    dashdescript: "+2% em relação ao ano passado",
  },
  {
    id: 2,
    title: "Pedidos do mês",
    value: 1248.60,
    dashdescript: "+2% em relação ao ano passado",
  },
  {
    id: 3,
    title: "Faturamento do mês",
    value: 1248.60,
    dashdescript: "+2% em relação ao ano passado",
  },
  {
    id: 4,
    title: "Cancelamentos do mês",
    value: 1248.60,
    dashdescript: "+2% em relação ao ano passado",
  },
]

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
                <p className={dashvalue()}>{currentFormat.format(data.value)}</p>
                <p className={dashdescript()}>{data.dashdescript}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
