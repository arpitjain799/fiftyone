"""
Color Scheme configuration.

| Copyright 2017-2023, Voxel51, Inc.
| `voxel51.com <https://voxel51.com/>`_
|
"""
from mongoengine.errors import ValidationError
from fiftyone.constants import DEFAULT_APP_COLOR_POOL
import fiftyone.core.dataset as fod
import fiftyone.core.fields as fof
from bson import json_util, ObjectId
import eta.core.serial as etas
from fiftyone.core.odm.embedded_document import EmbeddedDocument

import typing as t

import strawberry as gql

import fiftyone.core.fields as fof
from fiftyone.core.odm import EmbeddedDocument
import fiftyone.core.utils as fou


class LabelSetting(EmbeddedDocument):
    """Base class for attribute value color settings"""

    name = fof.StringField()
    color = fof.StringField()


class CustomizedColor(EmbeddedDocument):
    """Base case for customized color settings for a specific field"""

    meta = {"abstract": True, "allow_inheritance": True}

    field = fof.StringField(required=True)
    use_field_color = fof.BooleanField()
    field_color = fof.StringField()
    attribute_for_color = fof.StringField()
    use_opacity = fof.BooleanField()
    attribute_for_opacity = fof.StringField()
    use_label_colors = fof.BooleanField()
    label_colors = fof.ListField(
        fof.EmbeddedDocumentField(LabelSetting), default=[]
    )


class ColorPool(EmbeddedDocument):
    """Base case for customized color settings for a specific field"""

    meta = {"abstract": True, "allow_inheritance": True}
    color_pool = fof.ListField(fof.StringField(), default=[])


class ColorScheme(EmbeddedDocument):
    """Configuration of a color scheme.

    Args:
        color_pool: a list of colors
        customized_color_settings: a list of dicts mapping customoized color settings, which can includes properties such as field, use_field_color, field_color, use_label_colors, label_colors
    """

    meta = {"strict": False, "allow_inheritance": True}

    color_pool = fof.ListField(fof.StringField(), default=[])
    customized_color_settings = fof.ListField(
        fof.EmbeddedDocumentField(CustomizedColor), default=None
    )


default_color_scheme = ColorScheme(
    color_pool=DEFAULT_APP_COLOR_POOL, customized_color_settings=[]
)
