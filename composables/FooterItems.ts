type FooterItem = {
  title: string
  containers1?: {
    text1: string
  }
  containers2?: {
    text1: string
    text2: string
    text3: string
    text4: string
  }[]
  containers3?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers4?: {
    text1: string
    imgPath1: string
    text2: string
    imgPath2: string
    text3: string
    imgPath3: string
  }[]
}
const footerItems: FooterItem[] = [
  {
    title: 'codeaid',
    containers1: {
      text1: 'Современные решения для вашего бизнеса.'
    }
  },
  {
    title: 'Услуги',
    containers2: [
      {
        text1: 'Аутстаффинг',
        text2: 'Выделенная команда разработки',
        text3: 'Битрикс',
        text4: 'Другие →'
      }
    ]
  },
  {
    title: 'Проекты',
    containers3: [
      {
        text1: 'E-commerce платформа',
        text2: 'CRM-система',
        text3: 'Мобильное приложение'
      }
    ]
  },
  {
    title: 'Контакты',
    containers4: [
      {
        text1: 'Нижний Тагил, Россия',
        imgPath1: '/images/footerItems/icon1.svg',
        text2: '+7 (922) 126-00-43',
        imgPath2: '/images/footerItems/icon2.svg',
        text3: 'info@code.aid',
        imgPath3: '/images/footerItems/icon3.svg'
      }
    ]
  }
]
export default footerItems
