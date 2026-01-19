'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const cloneState = [];
  let currentState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      currentState = { ...currentState };

      for (const remove of action.keysToRemove) {
        delete currentState[remove];
      }
    }

    if (action.type === 'clear') {
      currentState = {};
    }

    cloneState.push(currentState);
  }

  return cloneState;
}

module.exports = transformStateWithClones;
