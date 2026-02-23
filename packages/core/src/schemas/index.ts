/**
 * @module @minions-crm-pipeline/sdk/schemas
 * Custom MinionType schemas for Minions Crm-pipeline.
 */

import type { MinionType } from 'minions-sdk';

export const dealType: MinionType = {
  id: 'crm-pipeline-deal',
  name: 'Deal',
  slug: 'deal',
  description: 'A potential or active deal in the CRM pipeline.',
  icon: '💰',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'serviceId', type: 'string', label: 'serviceId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'value', type: 'number', label: 'value' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'stage', type: 'select', label: 'stage' },
    { name: 'probability', type: 'number', label: 'probability' },
    { name: 'expectedCloseDate', type: 'string', label: 'expectedCloseDate' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const dealtransitionType: MinionType = {
  id: 'crm-pipeline-deal-transition',
  name: 'Deal transition',
  slug: 'deal-transition',
  description: 'A stage change in the CRM pipeline.',
  icon: '➡️',
  schema: [
    { name: 'dealId', type: 'string', label: 'dealId' },
    { name: 'fromStage', type: 'string', label: 'fromStage' },
    { name: 'toStage', type: 'string', label: 'toStage' },
    { name: 'changedAt', type: 'string', label: 'changedAt' },
    { name: 'reason', type: 'string', label: 'reason' },
    { name: 'changedBy', type: 'string', label: 'changedBy' },
  ],
};

export const revenueforecastType: MinionType = {
  id: 'crm-pipeline-revenue-forecast',
  name: 'Revenue forecast',
  slug: 'revenue-forecast',
  description: 'A periodic revenue forecast from the pipeline.',
  icon: '📈',
  schema: [
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'totalPipeline', type: 'number', label: 'totalPipeline' },
    { name: 'weightedForecast', type: 'number', label: 'weightedForecast' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'dealCount', type: 'number', label: 'dealCount' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  dealType,
  dealtransitionType,
  revenueforecastType,
];

