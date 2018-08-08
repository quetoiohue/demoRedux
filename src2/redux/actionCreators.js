export function fetchStart() {
    return { type: 'FETCH_START' };
}

export function fetchSuccess(cityName, temp) {
    return { type: 'FETCH_SUCCESS', cityName, temp };
}

export function fetchError() {
    return { type: 'FETCH_ERROR' };
}
