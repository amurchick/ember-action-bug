//noinspection NpmUsedModulesInstalled
import Ember from 'ember';

export default Ember.Service.extend({

  init() {

    this._super(...arguments);
    this.set('messages', []);
  },

  actions: {

    buttonAction() {

      this.get('messages').pushObject({
        ts: new Date().toJSON(),
        msg: `utils.actions.buttonAction() called with params: ${JSON.stringify(arguments)}`,
      });
    },
  },

  buttonAction() {

    this.get('messages').pushObject({
      ts: new Date().toJSON(),
      msg: `utils.buttonAction() called with params: ${JSON.stringify(arguments)}`,
    });
  },
});
