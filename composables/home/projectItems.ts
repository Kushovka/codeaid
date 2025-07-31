type ProjectItem = {
  imgPath: string
  title: string
  text: string
  containers: {
    name: string
  }[]
}
const projectItems: ProjectItem[] = [
  {
    imgPath: '/images/homeProjects/img1.png',
    title: 'E-commerce платформа',
    text: 'Полноценный интернет-магазин с системой оплаты и инвентаризацией',
    containers: [
      {
        name: 'Vue'
      },
      {
        name: 'Node.js'
      },
      {
        name: 'HTML'
      }
    ]
  },
  {
    imgPath: '/images/homeProjects/img2.png',
    title: 'CRM-система для малого бизнеса',
    text: 'Инструмент управления клиентами с аналитикой и отчетами',
    containers: [
      {
        name: 'Vue'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'AWS'
      }
    ]
  },
  {
    imgPath: '/images/homeProjects/img3.png',
    title: 'Мобильное приложение для здоровья',
    text: 'Приложение для отслеживания физических показателей и питания',
    containers: [
      {
        name: 'React Native'
      },
      {
        name: 'Firebase'
      },
      {
        name: 'Redux'
      }
    ]
  }
]

export default projectItems
