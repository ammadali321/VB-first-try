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

  class ojTable17032259511ChangeSelectionChain extends ActionChain {

    /**
     * Sets the page variable to the selected item ID.
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.petidId
     */
    async run(context, { petidId }) {
      const { $page, $flow, $application, $constants, $variables } = context;
      $page.variables.oj_table_1703225951_1SelectedId = petidId;
    }
  }

  return ojTable17032259511ChangeSelectionChain;
});
