# tokopedia-play-clone

# Database Structure
* Videos
```
{
  id: Number,
  imageUrl: String
}
```
* Pruducts
```
{
  id: Number,
  productLink: String,
  title: String,
  price: Number,
  videoId: Number
}
```
* Comments
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
            {<videos_object>},
            {<videos_object>}
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
{<videos_object>}
```
