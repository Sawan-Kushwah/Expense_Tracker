let res = [];

export function totalExpense(data) {
    return data.expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function getSortData(data) {
    return data.expenses.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB.getFullYear() - dateA.getFullYear() ||
            dateB.getMonth() - dateA.getMonth() ||
            dateB.getDate() - dateA.getDate();
    });
}

export function generateMonths(data) {
    let expenseDataMonths = [];
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let sortedData = getSortData(data)
    let monthNumber = sortedData.map(item => (
        parseInt(item.date.split('T')[0].split('-')[1])
    ))

    res = [...new Set(monthNumber)]

    for (let i = 12; i >= 1; i--) {
        if (!res.includes(i)) {
            res.push(i);
        }
    }

    for (let i = 0; i < 12; i++) {
        expenseDataMonths.push(months[res[i] - 1])
    }

    return expenseDataMonths.reverse();
}

export function generateData(data) {
    let expenseData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let expenseDataArray = []

    data.expenses.map((expense) => {
        let index = parseInt(expense.date.split('T')[0].split('-')[1]) - 1;
        expenseData[index] += expense.amount;
    })

    for (let i = 0; i < 12; i++) {
        expenseDataArray.push(expenseData[res[i] - 1])
    }

    return expenseDataArray.reverse();
}

export function generateCategortyWiseExpense(data) {
    const map1 = new Map();
    data.expenses.map((data) => {
        if (map1.has(data.category)) {
            map1.set(data.category, map1.get(data.category) + data.amount);
        } else {
            map1.set(data.category, data.amount)
        }
    })
    return map1;
}