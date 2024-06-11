import { useQuery } from '@tanstack/react-query'

import { CardVariants } from '../../../styles'
import { CanceledApi, DayApi, MonthApi, RevenueApi } from '../../../api'

const { cardcontent, cardcard, cardinfo, cardvalue, carddescript, carddiff } = CardVariants()

export const DashboardPageCard = () => {
  const { data: day } = useQuery({
    queryFn: DayApi, queryKey: ['metrics', 'day-orders-amount']
  })

  const { data: month } = useQuery({
    queryFn: MonthApi, queryKey: ['metrics', 'month-orders-amount']
  })

  const { data: canceled } = useQuery({
    queryFn: CanceledApi, queryKey: ['metrics', 'month-canceled-orders-amount']
  })

  const { data: revenue } = useQuery({
    queryFn: RevenueApi, queryKey: ['metrics', 'month-receipt']
  })

  return (
    <div className={cardcontent()}>
      {day && (
        <div className={cardcard()}>
          <p className={cardinfo()}>PEDIDOS (dia)</p>
          <p className={cardvalue()}>{day.amount.toLocaleString('pt-BR')}</p>
          <p className={carddescript()}>
            {day.diffFromYesterday < 0 && <span className={carddiff({ color: 'negative' })}>{day.diffFromYesterday}%</span>}
            {day.diffFromYesterday > 0 && <span className={carddiff({ color: 'positive' })}>{day.diffFromYesterday}%</span>}
            {day.diffFromYesterday === 0 && <span className={carddiff()}>{day.diffFromYesterday}%</span>}
            {' '}em relação a ontem
          </p>
        </div>
      )}
      {month && (
        <div className={cardcard()}>
          <p className={cardinfo()}>PEDIDOS (mês)</p>
          <p className={cardvalue()}>{month.amount.toLocaleString('pt-BR')}</p>
          <p className={carddescript()}>
            {month.diffFromLastMonth < 0 && <span className={carddiff({ color: 'negative' })}>{month.diffFromLastMonth}%</span>}
            {month.diffFromLastMonth > 0 && <span className={carddiff({ color: 'positive' })}>{month.diffFromLastMonth}%</span>}
            {month.diffFromLastMonth === 0 && <span className={carddiff()}>{month.diffFromLastMonth}%</span>}
            {' '}em relação ao mês passado
          </p>
        </div>
      )}
      {canceled && (
        <div className={cardcard()}>
          <p className={cardinfo()}>CANCELADOS (mês)</p>
          <p className={cardvalue()}>{canceled.amount.toLocaleString('pt-BR')}</p>
          <p className={carddescript()}>
            {canceled.diffFromLastMonth < 0 && <span className={carddiff({ color: 'negative' })}>{canceled.diffFromLastMonth}%</span>}
            {canceled.diffFromLastMonth > 0 && <span className={carddiff({ color: 'positive' })}>{canceled.diffFromLastMonth}%</span>}
            {canceled.diffFromLastMonth === 0 && <span className={carddiff()}>{canceled.diffFromLastMonth}%</span>}
            {' '}em relação ao mês passado
          </p>
        </div>
      )}
      {revenue && (
        <div className={cardcard()}>
          <p className={cardinfo()}>RECEITA TOTAL (mês)</p>
          <p className={cardvalue()}>{(revenue.receipt / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p className={carddescript()}>
            {revenue.diffFromLastMonth < 0 && <span className={carddiff({ color: 'negative' })}>{revenue.diffFromLastMonth}%</span>}
            {revenue.diffFromLastMonth > 0 && <span className={carddiff({ color: 'positive' })}>{revenue.diffFromLastMonth}%</span>}
            {revenue.diffFromLastMonth === 0 && <span className={carddiff()}>{revenue.diffFromLastMonth}%</span>}
            {' '}em relação ao mês passado
          </p>
        </div>
      )}
    </div>
  )
}