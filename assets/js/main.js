fetch("./assets/data/main2.json")
.then((resp)=> resp.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))