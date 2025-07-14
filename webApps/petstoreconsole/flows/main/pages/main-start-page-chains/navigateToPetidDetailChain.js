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

  class navigateToPetidDetailChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.petidId
     */
    async run(context, { petidId }) {
      const { $page, $flow, $application, $constants, $variables } = context;
      const navigateToPageMainPetidDetailResult = await Actions.navigateToPage(context, {
        page: 'main-petid-detail',
        params: {
          petidId: petidId,
        },
      });
    }
  }

  return navigateToPetidDetailChain;
});
