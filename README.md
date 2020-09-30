Visse é um helper para Express e Mongoose.

## Para Instalar

```
yarn add @mobixtec/visse date-fns express express-validator
```

### ErrorHandler

Controller
```
import {ErrorHandler} from "@mobixtec/visse"

try{

}catch(e){
    if (error instanceof ErrorHandler) {
        next(error);
    } else {
        next(new ErrorHandler(500, error.message));
    }
}
```
Middleware para rotas
```
import {ErrorHandlerMiddleware} from "@mobixtec/visse"

app.use(Routes)
app.use(ErrorHandlerMiddleware)
```

### Sort para Mongoose

No queryString, crie uma variavel orderBy e passe os campos que precisam ser ordenados. ASC será só o campo, DESC coloca um "negativo" no inicio
```
http://localhost:3000?orderBy=name,-age
```
Import o sort no controller e pronto

```
import {sort} from "@mobixtec/visse"
import UserModel from "./models/user"

try{
  await UserModel.find().sort(sort.sortInFind(req.query.orderBy))
}catch(e){
  if (error instanceof ErrorHandler) {
      next(error);
  } else {
      next(new ErrorHandler(500, error.message));
  }
}
```

Caso você queira usar em aggregate, basta usar o sort.sortInAggregate conforme abaixo:

```
import {sort} from "@mobixtec/visse"
import UserModel from "./models/user"

try{
  await UserModel.aggregate([{
   
   $sort: sort.sortInAggregate(req.query.orderBy)
   
  }])
}catch(e){
  if (error instanceof ErrorHandler) {
      next(error);
  } else {
      next(new ErrorHandler(500, error.message));
  }
}
```
