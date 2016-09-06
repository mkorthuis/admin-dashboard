/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/template              ->  index
 */

'use strict';

// Gets a list of Workflows
export function index(req, res) {
  res.json([{ id: '1', name: 'Template 1' }, { id:'2', name: 'Template 2' }]);
}

export function show(req, res) {
  res.json({
    id: req.params.id,
    name: 'Name ' + req.params.id,
    description: 'This is the description for ' + req.params.id
  });
}
