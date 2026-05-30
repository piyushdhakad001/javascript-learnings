For the first few exercises, put your code in a file called "lesson!8.html".
Use the backend URL:http//supersimplebackend.dev

18a). Using XMLHttpRequest, make a GET request to / greeting and display the response in the console.


18b). Using fetch(), make the same request GET / greeting and display response in the console. Note: this URL path respond with some text, so instead of using `response.json()`, use `response.text()`


18c). Make the same request GET /greeting as 18b, but using fetch() and async await. Note: in order to use `await`, put your code inside an `async function` first, and then run the function.


18d). Using fetch() and async await, create a POSt request to /greeting. In your request, send the JSON {name: "your_name" } (send your own name instead of your_name). Display the response in the console.

Notice that even though GET / greeting and POST /greeting use the same URL path /greeting, they do different things.


18e). Try making a GET request to https://amazon.com. You'll get an error known as a CORS (Cross-Origin Resource Sharing) error. This means the URL your code is running on (probaly http://127.0.0.1:5500) is different than https://amazon.com, so Amazon's backend blocked your request for security resons. Your code is correct, Amazon needs to change some settings in their backend to allow your requests.


18f). Add error handling to 18e. When ther's an error, display 'CORS error. Your request was blocked by backend.' in the console.


18g). Make a request POST /greeting to http://supersimplebackend.dev, but don't send any data (don't send a `body`). My backend will give back a 400 error (invailid request).fetch() doesn't throw an error for 400 errors (only network errors) so we'll manually create error:
`->` Check `if (response.status >= 400)` and manually create an erron using `throw response`;
`->` Add error handling to catch this manual error. When the error is caught, check `if (error.status === 400)` and display the JSON attached to the response to the console: `await error.json()`
`->` Otherwise, display 'Network error. please try again later.'

__The rest of these exercises done in the project code :-__

18h). In the data/cart.js, create an `async function loadCartFetch()` and create an async await version of `loadCart()`.console.log() the text attached to the response. In scripts/checkout.js, inside `loadPage()`, replace `loadCart()` with `loadCartFetch()`.

18i). In checkout.js, use Promise.all to run `loadProductsFetch()` and `loadCartFetch()` at the same time. Note: give the promises directly to Promise.all (don't `await` them, otherwise they will run one at a time). Then, use `await Promise.all(...)` to wait for Promise.all to finish.

18j). In orderSummaryTest.js, in the beforeAll hook, instead of using a done function, make the inner function `async` and use `await` to wait for `loadProductsFetch()` to finish.


18k). (Optinal) If you did the exercise from the previous lessons, you may have some failing tests. Fix those failing tests (if there are any).


__Challenge Exericses__
`Note:-` in these next exercises, you will independently create entire pages and features, so you can practice figuring things out yourself. Good luck!

18l). We'll finish the orders.page. Create a new file `scripts/orders.js` for creating the orders page, and load it in `orders.html`. Using the array of the orders in `data/orders.js`, generate the HTML for this page.


18m). Make the order page intractive:
`->` "Buy it again" button should add the product to the cart.
`->` "Track package" button should open the tracking page (remember to insert the orderId and productId into the URl parameters).


18n). We'll finish the tracking page. Create a new file `scripts/tracking.js` and load it in `tracking.html `. Then, go to the order page. This will sathe the `orderId` and `productId` in the URL parameter to get the order and product to track. Use this data to generate the HTML for this page.


18o). Make the tracking page intractive:
`->` Calculate the percent progress of the delivery: ((currentTime - orderTime) / (deliveryTime - orderTime)) * 100
`->` Set the width of the green progress bar to this percent. Hint: add the style attribute:style="width:__%;"
`->` Set the correct status above the progress bar to green (0% - 49% = Preparing, 50% - 99% = Shipped, 100+% = Delivered).


18p). At the top of the home page (amazon.html) there's a search bar:
`->` When you type in the search basr and press thr search button, it shoukd go to the home page (amazon.html) and also save your search in a URL paramater:`amazon.html?search:your_search`
`->` On the home page,check if thare is a URL parameter called `search` if it exists, filter the product on the home page and only show product whose name contains what you search (hint: use `.include()`).

18q). We'll improve the search feature button from 18p:
`->` Make the search case-insensitive (capital don't matter).
`->` Each product has the property called "keywords". Add this property to the product class. When filtering the products, also check if one of the keywords contains what you searched (case-insensitive).


18r). Add some more features to this prohect that you think makes sense.