1. Chạy server
2. Tạo migrate thêm mới bảng persons với các trường sau:
* id: integer, auto increment
* name: string
* age: string
* gender: string

3. Thêm seeding cho bảng persons (dữ liệu tuỳ ý)
4. Thêm schema person với typeDefs và resolves (Tương tự member)
5. Thêm model person thực hiện các chức năng sau:
* Query
   - getAllPersons: [Person]
   - findPerson(id): Person

* Mutation
   - createPerson: Person
   - updatePerson: Person