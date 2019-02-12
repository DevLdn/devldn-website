# Devldn website

## Docker Build

`docker build -t devldn.ca .`

## Docker Run
Environment Variables

PORT=5000
HOST=0.0.0.0
TOKEN=abc123
NODE_ENV=production

`docker run -it --rm -e PORT=5000 -e HOST=0.0.0.0 -e TOKEN=abc123 -e NODE_ENV=production -p 5000:5000 devldn.ca`
