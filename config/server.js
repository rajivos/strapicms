module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  app: {
    keys: ["UUJVeh3kbVLXtytI2ZFeAQ==","HXYWyFrqj1cRaogmjKsoRw==","yhLbO9QbjIiqnUrUkRoorA==","FK/WmFCrj+QuJuNXSpY4iA=="],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
