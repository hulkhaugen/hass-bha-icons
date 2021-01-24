

## Usage:
Install the plugin and use it like in this example:

```yaml
title: My Card
type: entities
entities:
  - entity: light.rgbw_ledstrip
    icon: bha:led-strip
```

![Example](https://github.com/hulkhaugen/hass-bha-icons/blob/master/content.png)

### Systemwide availability (Optional)
The steps above will make the icons available, but limited to the Lovelace UI only. If you want the icons to be available throughout Home Assistant, add the following to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/hass-bha-icons/hass-bha-icons.js
```

For this step, a system restart is needed.
