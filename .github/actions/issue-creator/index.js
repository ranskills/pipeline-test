const core = require('@actions/core')
const github = require('@actions/github')

try {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const assignees = core.getInput('assignees', 'ranskills').split(',')

    const octokit = github.getOctokit(GITHUB_TOKEN)
    const { context } = github

    console.log(`URL: ${context.payload.repository.url}`)
    octokit.rest.issues.create({
        // repo: context.payload.repository.url,
        repo: context.payload.repository.full_name,
        title: 'XXXX',
        body: 'YYYY',
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