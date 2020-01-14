db.products.insertOne(
  {
    _id: 2,
    name: "Pencil",
    price: 0.8,
    stock: 12,

    reviews: [
      {
        authorName: "Jesse",
        rating: 5,
        review: "Holy shit this pencil changed my fucking life!"
      },
      {
        authorName: "Jim",
        rating: 3,
        review: "Pencil was good but I would NOT recommend shoving one of these cocksuckers up your ass, yikes...."
      }
    ]
  }
)