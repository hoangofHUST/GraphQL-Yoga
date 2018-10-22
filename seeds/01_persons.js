exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("persons")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("persons").insert([
        {
          name: "dungnm",
          age: "23",
          gender: "male",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          name: "hungnv",
          age: 23,
          gender: "male",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          name: "binhnt",
          age: 30,
          gender: "male",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          name: "thuvh",
          age: 23,
          gender: "female",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        }
      ]);
    });
};
