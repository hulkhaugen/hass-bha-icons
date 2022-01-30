#!/usr/bin/env python3
import json
from glob import glob
from os.path import basename, join, splitext
from string import Template
from xml.dom.minidom import Document, parse

SVG = "svg"
OUTFILE = join("dist", "hass-bha-icons.js")


def get_path(dom: Document) -> str:
    """Get the path of the svg file."""
    return dom.getElementsByTagName("path")[0].getAttribute("d")


def get_keywords(dom: Document) -> str:
    """Get the keywords of the svg file."""
    desc_tags = dom.getElementsByTagName("desc")
    if len(desc_tags) > 0 and desc_tags[0].firstChild is not None:
        return desc_tags[0].firstChild.nodeValue.split(" ")
    else:
        return []


doms = [
    (basename(splitext(file)[0]), parse(file)) for file in glob(join(SVG, f"*.{SVG}"))
]

icons = {
    file_name: {
        "path": get_path(dom),
        "keywords": get_keywords(dom),
    }
    for file_name, dom in doms
}

template = Template(
    """const BHA_ICONS_MAP = $icons;

async function getIcon(name) {
  return {path: BHA_ICONS_MAP[name]?.path};
}
async function getIconList() {
  return Object.entries(BHA_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["bha"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["bha"] = getIcon;
"""
)

js = template.substitute(icons=json.dumps(icons, sort_keys=True, indent=2))

with open(OUTFILE, "w") as outfile:
    outfile.write(js)
