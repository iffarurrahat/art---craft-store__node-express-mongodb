const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9u7odmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const craftsCollection = client.db("artAndCraft").collection("crafts");
    const subCraftsCollection = client
      .db("artAndCraft")
      .collection("subCrafts");

    app.get("/crafts", async (req, res) => {
      const cursor = craftsCollection.find(
        {},
        {
          projection: {
            _id: 1,
            image: 1,
            item_name: 1,
            price: 1,
            short_description: 1,
            rating: 1,
          },
        }
      );
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftsCollection.findOne(query);
      res.send(result);
    });

    app.get("/crafts/email/:email", async (req, res) => {
      const email = req.params.email;
      const query = { "postUser.email": email };
      const result = await craftsCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/subCrafts", async (req, res) => {
      const cursor = subCraftsCollection.find(
        {},
        {
          projection: {
            _id: 1,
            image: 1,
            item_name: 1,
            price: 1,
            short_description: 1,
            rating: 1,
          },
        }
      );
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/subCrafts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await subCraftsCollection.findOne(query);
      res.send(result);
    });

    app.post("/crafts", async (req, res) => {
      const newCraft = req.body;
      const result = await craftsCollection.insertOne(newCraft);
      res.send(result);
    });

    app.put("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };

      const updatedCraft = req.body;
      const craft = {
        $set: {
          item_name: updatedCraft.item_name,
          subcategory_Name: updatedCraft.subcategory_Name,
          processing_time: updatedCraft.processing_time,
          stockStatus: updatedCraft.stockStatus,
          price: updatedCraft.price,
          rating: updatedCraft.rating,
          customization: updatedCraft.customization,
          image: updatedCraft.image,
          short_description: updatedCraft.short_description,
          making_details: updatedCraft.making_details,
        },
      };
      const result = await craftsCollection.updateOne(filter, craft, option);
      res.send(result);
    });

    app.delete("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftsCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Art and Craft is Running");
});

app.listen(port, () => {
  console.log(`Art and Craft is Running on PORT: ${port}`);
});
