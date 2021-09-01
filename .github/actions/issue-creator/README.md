# Issue Creator

Creates an issue on GitHub when a test fails

## Inputs

## `assignees`

**Required** A comma-separated list of assignees. Example `dev1` OR `dev1,dev2,...,devn`.

## `github-token`

**Required** Github token

## Example usage

        - uses: ranskills/pipeline-test/.github/actions/issue-creator@develop
        if: ${{ failure() }}
        with:
          assignees: ranskills
          github-token: ${{ secrets.GITHUB_TOKEN }}

# Development

### 1. Install dependencies

`npm install`

### 2. Make required changes

### 3. Build the project

`npm run build`
