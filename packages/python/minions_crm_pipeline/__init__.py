"""
Minions Crm-pipeline Python SDK

Deal stages, transitions, revenue forecasts, and win/loss tracking
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Crm-pipeline.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
