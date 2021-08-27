const core = require('@actions/core')
const github = require('@actions/github')

try {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

    const octokit = github.getOctokit(GITHUB_TOKEN)
    const { context } = github
    const assignees = core.getInput('assignees', 'ranskills').split(',')

    console.log('Assignees', assignees)
    console.log(context)
    octokit.rest.issues.create({
        repo: context.repo,
        title: 'XXXX',
        body: 'YYYY',
        assignees
    })

    // console.log(github.getOctokit())
    // github.getOctokit().rest.issues.create({
    //     assignees: assignees,
    // })
} catch (error) {
    core.setFailed(error.message)
}