import core from '@actions/core';
import github from '@actions/github';

// const core = require('@actions/core')
// const github = require('@actions/github')

try {
  core.getInput('x', {});
  const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
  const assignees = core.getInput('assignees', { trimWhitespace: true }).split(',');

  const octokit = github.getOctokit(GITHUB_TOKEN);
  const { context } = github;
// context.workflow
  console.log(`URL: ${context.payload.repository.url}`);
  console.log(context.payload.repository.owner);
  octokit.rest.issues
    .create({
      // repo: context.payload.repository.url,
      owner: '',
      repo: context.payload.repository.name,
      title: 'XXXX',
      body: 'YYYY',
      assignees,
    })
    .catch((error) => {
      console.debug(error);
    });

  // console.log(github.getOctokit())
  // github.getOctokit().rest.issues.create({
  //     assignees: assignees,
  // })
} catch (error) {
  core.setFailed(error.message);
}
