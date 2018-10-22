import { knex } from "../connectors";

class Person {
  getAllPersons() {
    return knex("Persons").select();
  }
  findPerson(id: number) {
    return knex("Persons")
      .where("id", id)
      .first();
  }
  updatePerson(id: number, input: object) {
    if (id) {
      return knex("persons")
        .where("id", id)
        .update(input);
    }
    return false;
  }
  createPerson(input: object) {
    if (input) {
      return knex("persons")
        .insert(input)
        .then(function(result) {
          return knex("persons")
            .where("id", result[0])
            .first();
        });
    }
    return false;
  }
}
export const PersonModel = new Person();
