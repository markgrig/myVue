const appFirebase = initializeApp(firebaseConfig);
const database =  getDatabase(appFirebase);


async function writeProductData( productName,  productPrice,  productInfo ,  productImg) {

  set(ref(database,'productList/ ' + Date.now()), {

    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,

  })

}

writeProductData( 2 , 2 , 2 , 22)
/*
   get(child( ref(database), `productList/ `)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(   snapshot.val() )
    } else {
        console.log("not data");
    }
  }).catch((error) => {
        console.log(error);
  });
  

*/








exports.handler = function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!"
    })
  }
}
