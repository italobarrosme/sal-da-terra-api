/**
 * bible controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::bible.bible', ({ strapi }) => ({
  async populate(ctx) {
    console.log('RUN SERVER FUNCTION')

    await strapi.service('api::bible.bible').populate()

    ctx.send({
      status: 'ok',
      message: 'Bible populated',
    })
  }
}));
