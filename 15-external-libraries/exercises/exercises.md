`15a - 15g EXERCISES`
15a).  Using DayJS, get the date 5 days after today and display it in the format:'<Month><Day of Month>' 


15b). Calculate 1 month after today and display in the same format as 15a.


15c). DayJS has a .subtract(...) method which subtracts time from a date. Calculate 1 month before today and display in same format as 15a.


15d). Get a date from DayJS and display it in this format: '<Day of Week>' (The format should be 'Monday' 'Tuesday', etc.)


15e). Create a function isWeekend(date) that takes a DayJS object, and returns whether the date is 'Saturday' or 'Sunday' (hint: use solution from 15d). Test this function with a few different dates.


15f). Move isWeekend() into a seperate file and use export default. Import this function in another file and run it.


15g).  We can also rename a default export when we import. In 15f, when we iumport "import isWeekend", and use this new name to run the function.

`15h - 15n EXERCISES`
_We'll improve the code in the final Amazon project._
15h). When deleting a product from the cart, instead of using the DOM and updating the page directly with .delete(), regenerate the HTML for the summary.


15i). In the payment summary on the right, the number in the first line "Item(3):" is supposed to show the cart quantity. However, this number is always 3. Replace this number with the actual cart quantity and make sure it updates whenever we change the cart.


__CHALLENGE EXERCISES__
_We'll create the Checkout Header (at the top) using MVC._

15j). Create a new file "checkoutHeader.js" in the "checkout" folder, create a function renderCheckoutHeader, generate the HTML, and dispaly it on the page. *Note*: insert the correct cart quantity into the HTML.


15k). After deleting a product from the cart, re-render the Checkout Header so cart quantity is up-to-date. *Note*: use MVC instead of updating the page directly with the DOM.


_Many onlinne store don't deliver on the weekend (Saturday/Sunday). We'll update our code so that delivery dates are not on a weekend._

15l). In orderSummary.js, we have some code at the top that takes a deliveryOption, calculates the delivery date, and formats it. This code is repeated in deliveryOptionHTML(). Create a function to reuse this code. (Create function calculateDeliveryDate(deliveryOption) in deliveryOption.js, import and run this function in orderSummary.js).


15m). When calculating the delivery date, skip all Saturdays and Sundays.
-> *Examples*:
`->` if today is Friday, Oct 5, and we choose 1-day delivery, the delivery date should be Monday, Oct 8 (skip the weekend).
`->` Friday, Oct 5 + 3 days = wednesday, Oct 10 (skip the weekend).
`->` Monday, Oct 1 + 3 days = Thursday, Oct 4 (no weekend in between).
`->` Friday, Oct 5 + 7 days = Tuesday, Oct 16 (skip 2 weekends in between).

_Hints:_`->` Get the number of days you need to add. Use a while loop, and each time, add 1 day and decrease the remaining days to add.
`->` If the date is a weekend, skip decreasing the remaining days. (You can use isWeekend() from exercise 15e to help you).



15n). Optional: in exercise 14f - 14n, we made the "Update" link Interactive.
_If You didn't do this, feel to copy the solution or skip this exercise._
`->` Copy over the code for the "Update" link into the current code.
`->` After updating the quantity in the cart, instead of using the DOM to update the page directly, use MVC and re-render all parts of the page that need to be updated.
__Hasn't Done(t0o much headache)__