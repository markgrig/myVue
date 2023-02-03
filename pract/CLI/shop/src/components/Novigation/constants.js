export const constants = {
  category: {
    "video_courses":  {
      name: 'Видеокурсы' , 
      topics: {
        product: 'Видеокурс' ,
        name: 'Название курса:',
      },
      urlName: "video_courses",
      card: 'videoCard',
      necessarily: [ 'video' ]
    },
    "music_instrument": {
      name: 'Музыкальные инрументы',
      topics: {
        product: 'Музыкальый инструмент' ,
        name: 'Инструмент:',
      },
      urlName: "music_instrument",
      card: 'audioCard',
      necessarily: [ 'audio' ]
    },
    "concert_tickets": {
      name: 'Билеты на концерт', 
      topics: {
        product: 'Билет на концерт' ,
        name: 'Исполнитель(ли)',
      },
      urlName: "concert_tickets",
      card: [ 'audioCard', "videoCard"],
      necessarily: [ 'audio', 'video' ]
    },
    "clothes":
    {
      name: 'Одежда', 
      topics: {
        product: 'Одежда' ,
        name: 'Товар:',
      },
      urlName: "clothes",
      card: 'longCard',
      necessarily: []
    },  
  }

}
    