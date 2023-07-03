const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const vehicleSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    vehicle: {
      type: String,
      required: [true, "Vehicle is required."],
    },
    vehicleImage: {
      type: String,
      default:
        "https://www.mivodo.com/wp-content/uploads/2021/02/seat-alhambra-grosser-van-fuer-familien.jpg",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
