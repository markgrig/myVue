const appFirebase = initializeApp(firebaseConfig);
const database =  getDatabase(appFirebase);


async function writeProductData( productName,  productPrice,  productInfo ,  productImg) {

  set(ref(database,'productList/' + Date.now()), {

    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,

  })

}

writeProductData( 2 , 2 , 2 , 2)

   get(child( ref(database), `productList/ `)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(   snapshot.val() )
    } else {
        console.log("not data");
    }
  }).catch((error) => {
        console.log(error);
  });
  




  const dbRef = ref( database , 'productList')
    onValue( dbRef, ( snapshot ) => {
      const records = []
      snapshot.forEach(element => {
            const keyName = element.key
            const data = element.val()
            records.push( { "key" : keyName, "data" : data })
      });
      console.log(records );
    })






exports.handler = async function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!"
    })
  }
}
