# MyReads

A bookcase application that allows you to select and sort the books you have read, are reading or want to read.
The project emphasizes using React to create the application, as well as an API server and client library, which will be used to store information as the user interacts with the application.

## How to start the app

1. Install [Node.js](https://nodejs.org/en/).

2. Install npm by the command line: _npm install_

3. In the project folder, run _npm start_ to start up a simple server.

Now you can visit _http://localhost:3000_ to view the main page or _http://localhost:3000/search_ to view the search page on your server.

## Backend Server

To simplify the development process, it was provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods need to perform operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
