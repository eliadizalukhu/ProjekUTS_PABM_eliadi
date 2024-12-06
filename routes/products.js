const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json()); // Parsing JSON body
router.use(bodyParser.urlencoded({ extended: true })); // Parsing form data

// Dummy data produk
let products = [
  { id: 1, name: 'Salad Buah', description: 'Salad buah segar dengan berbagai buah pilihan.', price: 25000 },
  { id: 2, name: 'Salad Sayur', description: 'Salad sayur sehat dengan berbagai sayuran segar.', price: 20000 },
  { id: 3, name: 'Minuman', description: 'Minuman segar untuk menemani salad anda.', price: 22000 },
  { id: 4, name: 'Buah Asli', description: 'Buah asli pilihan yang segar dan manis.', price: 15000 },
];

// Halaman utama dengan tombol interaktif
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Navigator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f9f9f9;
          }
          .container {
            margin-top: 20px;
          }
          button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
          }
          .btn-get {
            background-color: #3498db;
          }
          .btn-add {
            background-color: #2ecc71;
          }
          .btn-delete {
            background-color: #e74c3c;
          }
          #result {
            margin-top: 20px;
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>API Navigator</h1>
          <button class="btn-get" onclick="getProducts()"><i class="fas fa-sync"></i> GET Products</button>
          <button class="btn-add" onclick="addProduct()"><i class="fas fa-plus-circle"></i> POST Product</button>
          <button class="btn-delete" onclick="deleteProduct()"><i class="fas fa-trash"></i> DELETE Product</button>
          <div id="result">Result will be displayed here</div>
        </div>
        <script>
          const resultDiv = document.getElementById('result');

          function getProducts() {
            fetch('/routes/products/detail')
              .then(response => response.json())
              .then(data => {
                resultDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
              })
              .catch(err => {
                resultDiv.innerHTML = 'Error: ' + err.message;
              });
          }

          function addProduct() {
            const newProduct = {
              name: "New Salad",
              description: "Freshly added salad",
              price: 30000
            };

            fetch('/routes/products/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newProduct)
            })
              .then(response => response.json())
              .then(data => {
                resultDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
              })
              .catch(err => {
                resultDiv.innerHTML = 'Error: ' + err.message;
              });
          }

          function deleteProduct() {
            const productId = 1; // ID produk yang ingin dihapus

            fetch('/routes/products/delete/' + productId, {
              method: 'DELETE',
            })
              .then(response => response.json())
              .then(data => {
                resultDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
              })
              .catch(err => {
                resultDiv.innerHTML = 'Error: ' + err.message;
              });
          }
        </script>
      </body>
    </html>
  `);
});

// Endpoint untuk mendapatkan detail produk
router.get('/detail', (req, res) => {
  res.json(products); // Mengembalikan daftar produk dalam format JSON
});

// Endpoint untuk menambah produk
router.post('/add', (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'All fields (name, description, price) are required' });
  }

  const newProduct = {
    id: products.length + 1, // Menentukan ID baru secara otomatis
    name,
    description,
    price,
  };

  products.push(newProduct);
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

// Endpoint untuk menghapus produk berdasarkan ID
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  // Mencari produk yang akan dihapus
  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Menghapus produk
  const deletedProduct = products.splice(productIndex, 1);

  res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
});

module.exports = router;
