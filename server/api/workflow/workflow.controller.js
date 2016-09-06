/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/workflow              ->  index
 */

'use strict';

// Gets a list of Workflows
export function index(req, res) {
  res.json([{ id: '1', name: 'Workflow 1' }, { id:'2', name: 'Workflow 2' }]);
}

export function show(req, res) {
  res.json({
    id: req.params.id,
    name: 'Name ' + req.params.id,
    description: 'This is the description for ' + req.params.id
  });
}
