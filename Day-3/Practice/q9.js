//Write the price of the books that you have. Display the price if the prices is lower than 200

var booksName = ['The Alchemist', 'The Monk Who Sold His Ferrari', 'The Power of Your Subconscious Mind', 'The Secret', 'The 5 AM Club', 'The Power of Positive Thinking', 'The Power of Habit', 'The 7 Habits of Highly Effective People', 'The 48 Laws']

var booksPrice = [150, 200, 250, 300, 350, 400, 450, 500, 550]

var i = 0;
while (i < booksPrice.length) {
    if (booksPrice[i] < 200) {
        console.log(booksName[i] + " : " + booksPrice[i]);
    }
    i++;
}