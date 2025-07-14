define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class loadPetidChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const callRestResult = await Actions.callRest(context, {
        endpoint: 'Petstore/petid',
        responseType: 'petidResponse',
        uriParams: {
          petid: $page.variables.petidId,
        },
      }, { id: 'loadPetid' });

      if (!callRestResult.ok) {
        await Actions.fireNotificationEvent(context, {
          message: 'Could not load data: status ' + callRestResult.status,
          displayMode: 'persist',
          type: 'error',
          summary: 'Could not load data',
        }, { id: 'fireErrorNotification' });

        return;
      }

      $page.variables.petid = callRestResult.body;
    }
  }

  return loadPetidChain;
});
