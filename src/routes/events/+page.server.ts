import { CAL_API } from "$env/static/private";

export async function load() {
    const calUrl = new URL('https://www.googleapis.com/calendar/v3/calendars/lindenhurstlaunchpad@gmail.com/events');
    calUrl.searchParams.append('timeMin', new Date().toISOString());
    calUrl.searchParams.append('singleEvents', 'true');
    calUrl.searchParams.append('orderBy', 'startTime');
    calUrl.searchParams.append('key', CAL_API);

    const events = fetch(calUrl)
        .then(response => response.json())
        .then(data => data.items);

    return {
        calendarPromise: new Promise((resolve) => {  
            events.then(data => {
                return resolve(data)
            })
        })
    }
}