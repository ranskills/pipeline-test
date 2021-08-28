const core = require('@actions/core')
const github = require('@actions/github')

try {
    const token = core.getInput('github-token');
    const assignees = core.getInput('assignees', { trimWhitespace: true }).split(',')

    const octokit = github.getOctokit(token)

    const { context } = github

    core.info(`RunId: ${context.runId} RunNumber: ${context.runNumber} Workflow: ${context.workflow}`)
    octokit.rest.issues.create({
        ...context.repo,
        title: `Pipeline ${context.workflow} Failure: Run number #${context.runNumber}`,
        body: ``,
        assignees,
    }).catch(error => {
        console.debug(error)
    })

} catch (error) {
    core.setFailed(error.message)
}