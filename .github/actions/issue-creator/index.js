const core = require('@actions/core')
const github = require('@actions/github')

try {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const assignees = core.getInput('assignees', { trimWhitespace: true }).split(',')

    const octokit = github.getOctokit(GITHUB_TOKEN)

    const { context } = github
    // const { repository } = context.payload

    core.info(`RunId: ${context.runId} RunNumber: ${context.runNumber} Workflow: ${context.workflow}`)
    octokit.rest.issues.create({
        // repo: context.payload.repository.url,
        ...context.repo,
        // repo: repository.name,
        // owner: repository.owner.login,
        title: `Pipeline ${github.workflow} Failure`,
        body: `RunId: ${context.runId} RunNumber: ${context.runNumber} Workflow: ${context.workflow}`,
        assignees
    }).catch(error => {
        console.debug(error)
    })

    // console.log(github.getOctokit())
    // github.getOctokit().rest.issues.create({
    //     assignees: assignees,
    // })
} catch (error) {
    core.setFailed(error.message)
}