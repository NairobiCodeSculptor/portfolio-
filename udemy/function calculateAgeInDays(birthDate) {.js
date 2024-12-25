function calculateAgeInDays(birthDate) {
    if (!(birthDate instanceof Date)) {
        console.error("Please provide a valid Date object for your birthday.");
        return;
    }
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;
    const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysLived;
}

const myBirthday = new Date("2000-01-01");
console.log(`You have lived approximately ${calculateAgeInDays(myBirthday)} days.`);
