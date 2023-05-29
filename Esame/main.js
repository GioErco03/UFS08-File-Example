const eventList = document.querySelector('.events_box')
const artists = [
    'Jennifer Lopez',
    'Anderson .Paak',
    'Florence and the machine',
    'M83',
]

artists.forEach((artist) => {
    fetch(
        `https://rest.bandsintown.com/artists/${encodeURI(
            artist
        )}/events?app_id=1234&date=upcoming`
    )
        .then((response) => response.json())
        .then((data) => {
            if (data.length >= 1) {
                // console.log(data)
                console.log(data[0])
                //dichiarazioni delle variabili
                const name_Artist = data[0].artist.name

                const image_Artist = data[0].artist.image_url
                let loc = `${data[0].venue.city}, ${data[0].venue.name}`
                const event = document.createElement('div')
                event.classList.add('event')
                const tag_Name_Artist = document.createElement('h4')
                const tag_Image_Artist = document.createElement('img')
                const tag = document.createElement('span')
                tag.classList.add('location_of_event')
                tag_Name_Artist.innerText = name_Artist
                tag_Image_Artist.src = image_Artist
                tag.innerText = loc
                //append dei vari tag all'event
                event.appendChild(tag_Image_Artist)
                event.appendChild(tag_Name_Artist)
                event.appendChild(tag)
                eventList.appendChild(event)
                //creazione della data
                dataSection = setFormatData(data[0].datetime)
                event.appendChild(dataSection)
            }
        })
})

function setFormatData(data) {
    const dateString = data
    const date = new Date(dateString)
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    const hour = date.getHours() % 12 || 12
    const minute = date.getMinutes()
    const am_pm = date.getHours() < 12 ? 'am' : 'pm'
    const formattedDate = `${month} ${day} - ${hour}:${minute
        .toString()
        .padStart(2, '0')} ${am_pm}`
    const dateSection = document.createElement('p')
    const dateImg = document.createElement('img')
    dateImg.src = './exam/assets/calendar.svg'
    dateSection.appendChild(dateImg)
    const dateDescription = document.createElement('span')
    //append della data
    dateDescription.innerText = formattedDate
    dateSection.appendChild(dateDescription)

    return dateSection
}
