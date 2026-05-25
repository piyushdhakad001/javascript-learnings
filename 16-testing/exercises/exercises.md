__(16a).__ In moneyTest.js, add a test case for formatCurrency(2000.4). This test checks if the code rounds down to the nearest cent. After creating the case, re-run all the tests to see if your code is correct.


__(16b).__ Add another test case for formatCurrency() and test with a negative number (you decide which number to use). Re-run all the tests after.


__Skipped all Exercises bcz Testing framework is not expecting from fresher__ __16c-16n__

_`expext()` has another method we can use: `.toHaveBeenCalledWith()` This checks what values a mocked method recieved. For example: `expect(localStorage.setItem).toHaveBeenCalledWith('cart', '[]')` Checks if the code called `localStorage.setItem('cart', '[])` at some point_


16c). In cartTest.js, in the test, add an `expect(localStorage.setItem)` and check if setItem recieved the correct values. The first value should be `'cart'` and the second value should be the cart array that was saved (convert the cart array into a string using JSON.stringify since localStorage only supports saving strings).


16d). In the second test in cartTest.js, also check if localStorage.setItem() recieved the correct values.


16e). In cartTest.js, create a beforeEach() hook. Move the setup code `spyOn(localStorage, 'setItem')`; inside this hook to share this code between the two tests.


16f). In orderSummaryTest.js, create an afterEach() hook. Move the cleanup code `document.querySelector('.js-test-container')`.... inside.


16g). In orderSummary.js, in each test, check if the product name is displayed correctly on the page. (in orderSummary.js, you'll need to add a class to the name element in order to get it from the page.


16h). In orderSummaryTest.js, check if the product prices are displayed correctly on the page. Each price should have a $ sign in front of it).


__CHALLENGE EXERCISES__

16i). In cartTest.js, create a test suit for the removeFromCart() function. 
`->` Mock `localStorage.setItem ` and `localStorage.getItem` at the start.
`->` Create a test: remove a productId that is in the cart.
`->` Create a test: remove a productId that is not in the cart (in the case, the function should do nothing).
`->` In each test, check if the cart looks correct. Also, check that `localStorage.setItem` was called once and with the correct values.


16j). In orderSummaryTest.js, create a test for update the Delivery Option.
`->` In orderSummary.js, add  a class to each delivery option element (insert the productId and deliveryOptionId into this class).
`->` Using the DOM, get the 3rd delivery option for the 1st product and click it.
`->` Using the DOM, get the <input> inside the 3rd delivery option (hint: add a class to the <input> with the productId and deliveryOptionId).
Test taht this <input> is checked (the `.checked` property it `true`).
`->` Check the cort length is correct.
`->` Check the first product in the cart: productId and deliveryOptionId are correct (the deliveryOptionId should be `3` now).
`->`After updating the delivery option, the payment summary should be displayed on the page. Get the shipping price and total price from the payment summary and check if they're correct (`$14.98` & `63.50`).


16k). In cartTest.js, add a testsuit for the `updateDeliveryOption` function.
`->` Mock `localStorage.setItem` and `localStorage.getItem` at the stsrt.
`->` Check a basic test: update the delivery option of a product in the cart.
`->` Check that the cart looks correct.
`->` Check `localStorage.setItem` was called once with the correct values.


16l). In cart.js, modify updateDeliveryOption() so if we give it a `productId` that is not in the cart, the function will `return` and do nothing (it does not update the cart and does not save to localStorage).
`->`Create tan edge case test: update the delivery option of a productId that is not in the cart.
`->` Check the cart looks correct and check that `localStorage.setItem` was not called.


16m). Moduify updateDeliveryOption() so if we give it a deliveryOptionId that does not exist, the function willl `return` and do nothing.
`->` create an egde case test: use a deliveryOptionId that does not exist.
Check the cart looks correct and check that `localStorage.setItem` was not called.


16n). (Optional) Genarally, we create tests for each file of code. Examples: `money.js`---> `moneyTest.js` and `cart.js` ---> `cartTests.js` If you want more practice, choose some other files like `product.js` or `paymentSummary.js` and create tests for these. (Note: creating tests takes time so this exercise is optional. There's no solution for this exercise, but you can check your code by re-running the tests.