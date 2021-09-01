const core = require('@actions/core')
const github = require('@actions/github')

try {
    const token = core.getInput('github-token');
    let assignees = core.getInput('assignees', { trimWhitespace: true }).split(',')
    assignees = assignees.map(item => item.trim())

    const octokit = github.getOctokit(token)

    const { context } = github

    core.info(`RunId: ${context.runId} RunNumber: ${context.runNumber} Workflow: ${context.workflow}`)
    octokit.rest.issues.create({
        ...context.repo,
        title: `Pipeline ${context.workflow} Failure: Run number #${context.runNumber}`,
        body: ``,
        assignees,
    }).catch(error => {
        core.error(error)
    })

} catch (error) {
    core.setFailed(error.message)
}