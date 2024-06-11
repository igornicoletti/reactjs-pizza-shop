import { DashboardPagePie } from './dashboard-pie'
import { DashboardPageLine } from './dashboard-line'
import { DashboardPageCard } from './dashboard-card'

import { DashboardVariants } from '../../../styles'

const { dashcontent, dashwrapper, dashtitle, dashguide, dashchart, dashcardlt, dashcardrt, dashinfo } = DashboardVariants()

export const DashboardPage = () => {
  return (
    <div className={dashcontent()}>
      <div className={dashwrapper()}>
        <h1 className={dashtitle()}>Dashboard</h1>
        <div className={dashguide()}>
          <DashboardPageCard />
          <div className={dashchart()}>
            <div className={dashcardlt()}>
              <p className={dashinfo()}>Visão geral</p>
              <DashboardPageLine />
            </div>
            <div className={dashcardrt()}>
              <p className={dashinfo()}>Mais vendidos</p>
              <DashboardPagePie />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}