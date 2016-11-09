#!/usr/bin/env node

const processArgs = require('minimist')
const Now = require('now-client')

const argv = processArgs(process.argv.slice(2), {
	alias: {
		t: 'token',
		d: 'deployment',
		n: 'name',
		a: 'alias',
	},
	default: {
		deployment: 0
	}
})

if (!argv.alias || !argv.name) {
	console.log(`Arguments:
-t  --token
  (will use your local one like the now cli, if available)

-d  --deployment  Defaults to 0
  (which deployment to alias - 0 is the latest, 1 is the second latest, etc.)

-n  --name        [required]
  (my-sweet-app)

-a  --alias       [required]
  (mysweetapp.com)`)

	return
}

const now = new Now(argv.token)

now.getDeployments().then(deployments => {
	const appDeployments = deployments
		.filter(deployment => deployment.name === argv.name)
		.sort((a, b) => b.created - a.created)

	const deploymentToAlias = appDeployments[argv.deployment]

	if (!deploymentToAlias) {
		throw new Error(`No deployment #${argv.deployment} found for ${argv.name}`)
	}

	return now.createAlias(deploymentToAlias.uid, argv.alias)

}).then(() => console.log('Done!')).catch(err => console.error(err))
