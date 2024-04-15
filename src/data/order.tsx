export const OrderLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    {
      id: 1,
      identifier: 1234567890,
      min: '15 minutos',
      status: 'Pendente',
      name: 'Igor Nicoletti',
      total: 149.90,
    },
    {
      id: 2,
      identifier: 9876543210,
      min: '10 minutos',
      status: 'Concluído',
      name: 'Igor Nicoletti',
      total: 149.90,
    },
    {
      id: 3,
      identifier: 1234598760,
      min: '5 minutos',
      status: 'Cancelado',
      name: 'Igor Nicoletti',
      total: 149.90,
    }
  ]
}