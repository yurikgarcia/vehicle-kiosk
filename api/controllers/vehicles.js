

const getAllVehicles = async (req, res) => {
  try {
    const all = await client.query("SELECT * FROM vehicles")
    res.status(200).send(all.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const addVehicle = async (req, res) => {
  try {
    const vehicle = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dl: req.body.dl,
      plate: req.body.plate,
      make: req.body.make,
      model: req.body.model,
    };
    console.log(vehicle);

    await client.connect();
    let result = await client.query(
      "INSERT INTO vehicles(first_name, last_name, dl, plate, make, model) VALUES($1, $2, $3, $4, $5, $6)",
      vehicle
    );
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  addVehicle,
  getAllVehicles,
};
