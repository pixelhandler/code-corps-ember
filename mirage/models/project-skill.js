import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  project: belongsTo(),
  skill: belongsTo()
});
