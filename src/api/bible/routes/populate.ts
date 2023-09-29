export default {
  routes: [
    {
      method: 'POST',
      path: '/bible/populate',
      handler: 'bible.populate',
      config: {
        policies: []
      }
    }
  ]
}