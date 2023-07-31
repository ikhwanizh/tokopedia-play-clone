# tokopedia-play-clone

# Database Structure
* Video Object
```
{
  id: Number,
  imageUrl: String
}
```
* Pruduct Object
```
{
  id: Number,
  productLink: String,
  title: String,
  price: Number,
  videoId: Number
}
```
* Comment Object
```
{
  username: String,
  comment: String,
  timestamp: String,
  videoId: Number
}
```

# API Structure
# GET /videos
Returns All Videos
- URL Params
  None
- Data Params
  None
- Headers
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:
```
{
  videos: [
            {<video_object>},
            {<video_object>}
          ]
}
```

# POST /videos:
Creates a new Video and returns the new object.
- URL Params
  None
- Data Params
```
{
    imageUrl: string,
}
```
- Headers
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:
```
{<video_object>}
```

# GET /products
Returns All Product
- URL Params
  None
- Data Params
  None
- Headers
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:
```
{
  products: [
            {<product_object>},
            {<product_object>}
          ]
}
```

# GET /products/:videoId
Returns product by Video Id
- URL Params
  *Required:* `id=[integer]`
- Data Params
  None
- Headers
  Content-Type: application/json
- Success Response:
  Code: 200
  Content:
```
{<product_object>}
```
