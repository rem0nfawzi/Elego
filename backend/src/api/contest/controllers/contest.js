"use strict";
const { sanitize } = require("@strapi/utils");

/**
 *  contest controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contest.contest", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    ctx.request.body.data.author = ctx.state.user.id;
    const res = await super.create(ctx);
    return { res };
  },
}));
