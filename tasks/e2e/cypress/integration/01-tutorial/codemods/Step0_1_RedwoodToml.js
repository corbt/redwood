export default `
# This file contains the configuration settings for your Redwood app.
# This file is also what makes your Redwood app a Redwood app.
# If you remove it and try to run yarn rw dev, you'll get an error.
#
# For the full list of options, see the "App Configuration: redwood.toml" doc:
# https://redwoodjs.com/docs/app-configuration-redwood-toml

[web]
  port = 8910
  apiProxyPath = "/.redwood/functions"
[api]
  port = 8911
[browser]
  open = true
[experimental]
  esbuild = false
  useEnvelop = false
`
