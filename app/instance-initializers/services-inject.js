export function initialize(appInstance) {

  appInstance.inject('controller', 'utils', 'service:utils');
}

export default {
  name: 'services-inject',
  initialize
};
