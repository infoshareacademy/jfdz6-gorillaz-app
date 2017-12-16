const firstYear = 1980
const yearsRange = 50

export const years = Array(yearsRange)
    .fill(null)
    .map((item, index) => (
            {
                value: firstYear + index,
                name: firstYear + index
            }
        )
    )

export const months =
    [
        {
            value: 1,
            name: 'January'
        },
        {
            value: 2,
            name: 'February'
        },
        {
            value: 3,
            name: 'March'
        },
        {
            value: 4,
            name: 'April'
        },
        {
            value: 5,
            name: 'May'
        },
        {
            value: 6,
            name: 'June'
        },
        {
            value: 7,
            name: 'July'
        },
        {
            value: 8,
            name: 'August'
        },
        {
            value: 9,
            name: 'September'
        },
        {
            value: 10,
            name: 'October'
        },
        {
            value: 11,
            name: 'November'
        },
        {
            value: 12,
            name: 'December'
        }
    ]

const monthToDayMap = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const firstDay = 1

const getDays = daysRange => Array(daysRange)
    .fill(null)
    .map((item, index) => (
            {
                value: firstDay + index,
                name: firstDay + index
            }
        )
    )

export const getDaysForGivenMonth = month => {
    const daysRange = monthToDayMap[month] || 31

    return getDays(daysRange)
}


