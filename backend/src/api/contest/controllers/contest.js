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

  async find(ctx) {
    const entries = await strapi.db.query("api::contest.contest").findMany({
      where: {
        author: ctx.state.user.id,
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entries, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async findOne(ctx) {
    // some logic here
    const entry = await strapi.entityService.findOne(
      "api::contest.contest",
      ctx.params.id,
      {
        populate: ["question", "question.answer"],
      }
    );
    console.log(entry);
    return entry;
  },
}));
