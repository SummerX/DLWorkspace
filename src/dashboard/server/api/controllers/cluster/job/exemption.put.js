/**
 * @typedef {Object} State
 * @property {import('../../../services/cluster')} cluster
 */

/** @type {import('koa').Middleware<State>} */
module.exports = async context => {
  const { cluster } = context.state
  const { jobId } = context.params

  const { isExempted } = context.request.body
  context.body = await cluster.setJobExemption(jobId, isExempted)
}