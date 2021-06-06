1. Mmebuat Struktur Folder
  1. membuat root folder "js-ecommerce-project"
  2. menambahkan folder frontend dan backend
  3. membuat src folder didalam folder frontend
  4. membuat index.html didalam src
  5. jalankan npm init --y di frontend
  6. lalu, npm install -D live-server
  7. tambahkan command start dengan isi live-server src --verbose pada package.json
  8. jalankan npm start

2. Desain Website
  1. membuat style.css
  2. hubungkan style.css dengan index.html
  3. membuat div.grid-container
  4. membuat header, main dan footer
  5. style html, body
  6. style grid-container, header, main dan footer.

3. Membuat static Home Screen
  1. membuat ul.products
  2. membuat li
  3. membuat div.product
  4. menambahkan .product-image, .product-name, .product-brand, .product-price
  5. style ul.products dan div internal
  6. duplikat untuk menampilkan 3 product

4. Render Dynamic Home screen
  1. membuat data.js
  2. export array dari 6 product
  3. membuat screen/HomeScreen.js
  4. export homescreen menjadi object menggunakan render() method
  5. implementasikan render()
  6. import data.js
  7. mengembalikan products mapped ke lis didalm ul
  8. membuat app.js
  9. hubungkan dengan index.html sbagai module
  10. set main id to main_container
  11. membuat router() function
  12. set main_container innerHTML ke HomeScreen.render()
  13. set load event dari window ke router() function

5. Membangun Url Router
  1. membuat routes sebagai route;screen object untuk home screen
  2. membuat utils.js
  3. export parseRequestURL()
  4. set url sebagai hash address dipisahkan slash (/)
  5. mengembalikan resource, id dan verb dari url
  6. update router()
  7. set request sebagai parseRequestURL()
  8. membangun parsedUrl dan compare dengan routes
  9. jika route exist maka render, jika tidak error404
  10. membuat screens/Error404.js dan render pesan error

6. Membuat Node.js server
  1. jalankan npm init di root folder
  2. npm install express
  3. buat server.js
  4. tambahkan start command "node backend/server.js" di package.json
  5. require express
  6. pindah data.js dari frontend ke backend
  7. buat route untuk /api/products
  8. return products di data.js
  9. run npm start

7. Akses Products dari backend
  1. edit HomeScreen.js
  2. buat render async
  3. fetch products dari 'api/products' di render()
  4. buat router() async dan call await HomeScreen.render()
  5. gunakan cors di backend

8. Menambahkan Webpack
  1. cd frontend
  2. npm install -D webpack webpack-cli webpack-dev-server
  3. npm uninstall live-server
  4. ubah start menjadi "webpack-dev-server --mode development --watch-content-base
     --open"
  5. pindah index.html. style.css dan images ke frontend 
  6. rename app.js ke index.js
  7. update index.html
  8. tambhakn <script src="main.js"></script> sbelum </body>
  9. npm start
  10. npm install axios
  11. ubah fetch ke axios pada HomeScreen∏

9. Install Babel untuk ES6
  1. npm install -D babel core, cli, node, preset-env
  2. buat .babelrc dan set preset ke @babel/preset-env
  3. npm install -D nodemon
  4. set start: "nodemon --watch backend --exec babel-node backend/server.js"
  5. convert require ke import pada server.js
  6. npm start

10. Install Eslint
  1. npm install -D eslint
  2. npx eslint --init, set to airbnb, import module, browser: true, node: true
  3. edit setting.json on vscode, tambahkan baris "editor.formatOnSave": true dan "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
  4. enjoy your code

11. Install vscode Ext
  1. Javascript (ES6) code snippets
  2. ES7 React/Redux/GraphQL/React-Native snippets
  3. Prettier - COde formatter
  4. HTML&LESS grammar injections
  5. CSS Peek

12. Membuat Rating Komponen
  1. membuat components/Rating.js
  2. buat div.rating
  3. hubungkan ke fontawesome.css pada index.html
  4. define Rating object dengan render()
  5. if !props.value return empty div
  6. else use fa fa-star, fa-star-half-o dan fa-star-o
  7. seteleh span terakhir tambahkan props.text || ''
  9. edit HomeScreen
  10. tambah div.product-rating dan pakai Rating komponen
  11. Untuk merubah warna product.rating tambhakan color pada .rating di style.css

13. Membuat API Product pada backend dan UI
  1. Buka ProductScreen, buat render() menjadi async, dan buat request.
  2. implementasikan api.js /api/products/:id
  3. kirim Ajax request pada product 
  4. buat back to result link
  5. buat div.details dengan 3 kolom
  6. kolom 1 utk gmbar product
  7. kolom 2 untuk informasi produk
  8. kolom 3 utk form produk action
  9. buat style .details dan smua kolom pada style.css
  10. buat "Tambahkan ke keranjang" button dengan add-button id
  11. after_render() untuk add event pada button
  12. redirect user ke cart/:product_id

14. Tambah ke Keranjang Action
  1. buat CartScreen.js
  2. parseRequestUrl
  3. getProduct(request.id)
  4. addToCart
  5. getCartItems
  6. cartItems.find
  7. if existItem update qty
  8. else add item
  9. setCartItems

15. Cart UI
  1. cartItems = getCartitems()
  2. buat 2 kolom untuk cart items dan cart action
  3. cartItems.length === 0 ? cart is empty
  4. show item img, name, qty dan harga
  5. cart action
  6. subtotal
  7. Proceed to checkout button
  8. tambah pada style.css

16. Update dan Delete Cart Items
  1. tambah jumlah select pada setiap item
  2. after_render()
  3. tambah perubahan pada jumlah select
  4. getCartItems() dan pass ke addToCart()
  5. set force ke true pada addToCart()
  6. buat rerender() sebagai (component, areaName = 'content')
  7. component.render dan component.after_render
  8. if force true then rerender()
  9. tmbah delete button pada setiap item
  10. tambah click event pada jumlah button
  11. panggil removeFromCart(deleteBUtton.id)
  12. implementasikan removeFromCart(id)
  13. setCartItems(getCartItems().filter)
  14. if id === parseRequestUrl().id ? redirect to '/cart'
  15. else rerender(CartScreen)

17. Connect ke MongoDB dan Buat user admin
  1. npm install mongoose
  2. connect to mongodb
  3. buat config.js
  4. npm install dotenv
  5. export PORT dan MONGOFB_URL
  6. buat models//userModel.js
  7. create userSchema dan userModel
  8. buat userRoute
  9. buat createAdmin route

18. Sign-in UI
  1. buat LoginScreen
  2. render email dan passworld
  3. style.css

19. Sign-in action
  1. after_render() menangani dari submit form
  2. buat login request di frontend
  3. buat login api di backend

20. Buat header
  1. update index.html
  2. tmbah header render dan after render ke router function
  3. tampilkan header menu berdasar user sudah login atau belum
  test