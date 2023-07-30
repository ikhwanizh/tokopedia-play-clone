# tokopedia-play-clone

#Database Structure
* Videos
{
  id: Number,
  imageUrl: String
}
* Pruducts
{
  id: Number,
  productLink: String,
  title: String,
  price: Number,
  videoId: Number
}
* Comments
{
  username: String,
  comment: String,
  timestamp: String,
  videoId: Number
}


#API Structure
#GET /videos
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
