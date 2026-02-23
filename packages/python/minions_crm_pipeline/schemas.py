"""
Minions Crm-pipeline SDK — Type Schemas
Custom MinionType schemas for Minions Crm-pipeline.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

deal_type = MinionType(
    id="crm-pipeline-deal",
    name="Deal",
    slug="deal",
    description="A potential or active deal in the CRM pipeline.",
    icon="💰",
    schema=[
        FieldDefinition(name="leadId", type="string", label="leadId"),
        FieldDefinition(name="serviceId", type="string", label="serviceId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="value", type="number", label="value"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="stage", type="select", label="stage"),
        FieldDefinition(name="probability", type="number", label="probability"),
        FieldDefinition(name="expectedCloseDate", type="string", label="expectedCloseDate"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

deal_transition_type = MinionType(
    id="crm-pipeline-deal-transition",
    name="Deal transition",
    slug="deal-transition",
    description="A stage change in the CRM pipeline.",
    icon="➡️",
    schema=[
        FieldDefinition(name="dealId", type="string", label="dealId"),
        FieldDefinition(name="fromStage", type="string", label="fromStage"),
        FieldDefinition(name="toStage", type="string", label="toStage"),
        FieldDefinition(name="changedAt", type="string", label="changedAt"),
        FieldDefinition(name="reason", type="string", label="reason"),
        FieldDefinition(name="changedBy", type="string", label="changedBy"),
    ],
)

revenue_forecast_type = MinionType(
    id="crm-pipeline-revenue-forecast",
    name="Revenue forecast",
    slug="revenue-forecast",
    description="A periodic revenue forecast from the pipeline.",
    icon="📈",
    schema=[
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="totalPipeline", type="number", label="totalPipeline"),
        FieldDefinition(name="weightedForecast", type="number", label="weightedForecast"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="dealCount", type="number", label="dealCount"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

custom_types: list[MinionType] = [
    deal_type,
    deal_transition_type,
    revenue_forecast_type,
]

