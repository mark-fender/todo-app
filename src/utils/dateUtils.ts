// returns localized date string from timestamp in seconds
export const getTimeFromTimeStamp = (timeStamp: number) => {
    const date = new Date(timeStamp * 1000);
    return date.toLocaleDateString();
};
