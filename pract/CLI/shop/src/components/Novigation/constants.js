export const constants = {
  category: {
    "video_courses":  {
      name: 'Видеокурсы' , 
      urlName: "video_courses",
      card: 'videoCard',
      necessarily: [ 'video' ]
    },
    "music_instrument": {
      name: 'Музыкальные инрументы', 
      urlName: "music_instrument",
      card: 'audioCard',
      necessarily: [ 'audio' ]
    },
    "concert_tickets": {
      name: 'Билеты на концерт', 
      urlName: "concert_tickets",
      card: [ 'audioCard', "videoCard"],
      necessarily: [ 'audio', 'video' ]
    },
    "clothes":
    {
      name: 'Одежда', 
      urlName: "clothes",
      card: 'longCard',
      necessarily: []
    },  
  }

}
    