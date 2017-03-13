exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(books) {
    books.increments('id').primary();
    books.string('title');
    books.string('genre');
    books.text('description');
    books.text('cover_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
