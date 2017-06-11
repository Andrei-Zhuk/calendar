export let setMonths = (months, firstEvent, lastEvent) => {
    return {
        type: 'SET_MONTHS',
        months,
        firstEvent,
        lastEvent
    }
}

export let setInitMonth = (months) => {
    return {
        type: 'SET_INIT_MONTH',
        months
    }
}

export let prevMonth = () => {
    return {
        type: 'SET_PREV_MONTH'
    }
}

export let nextMonth = () => {
    return {
        type: 'SET_NEXT_MONTH'
    }
}

export let setInitDay = (months, currentMonth) => {
    return {
        type: 'SET_INIT_DAY',
        months,
        currentMonth
    }
}

export let setCurrentDay = (id, currentMonth, months) => {
    return {
        type: 'SET_CURRENT_DAY',
        id,
        currentMonth,
        months
    }
}

export let setWeeks = (months, firstEvent, lastEvent) => {
    return {
        type: 'SET_WEEKS',
        months,
        firstEvent,
        lastEvent
    }
}

export let setInitWeek = (weeks) => {
    return {
        type: 'SET_INIT_WEEK',
        weeks
    }
}

export let prevWeek = () => {
    return {
        type: 'SET_PREV_WEEK'
    }
}

export let nextWeek = () => {
    return {
        type: 'SET_NEXT_WEEK'
    }
}

export let setInitDayWeek = (weeks, currentWeek) => {
    return {
        type: 'SET_INIT_DAY_WEEK',
        weeks,
        currentWeek
    }
}

export let setCurrentDayWeek = (id, currentWeek, weeks) => {
    return {
        type: 'SET_CURRENT_DAY_WEEK',
        id,
        currentWeek,
        weeks
    }
}
