const dateFormat = date => {
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

    const fullDatePosted = new Date(date)
    const mothPosted = monthNames[fullDatePosted.getMonth()]
    const dayPosted = fullDatePosted.getDate()
    const yearPosted = fullDatePosted.getFullYear()

    return (
        <>
            <span>{mothPosted} </span>
            <span>{dayPosted} </span>
            <span>{yearPosted} </span>
        </>
    )
}

export default dateFormat
