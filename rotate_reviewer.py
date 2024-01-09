import requests
import json

# GitHub API endpoint for updating pull request assignments
api_url = 'https://api.github.com/repos/{owner}/{repo}/pulls/{pr_number}/requested_reviewers'

# List of team members
team_members = ['user1', 'user2', 'user3', 'user4']

# Determine the current reviewer (you can implement your rotation logic here)
rotation_index = 0  # Update this based on your rotation logic
current_reviewer = team_members[rotation_index]

# PR details
owner = 'your_username'
repo = 'blog-site'
pr_number = 123

# GitHub API request to assign the reviewer
headers = {'Authorization': 'token YOUR_PERSONAL_ACCESS_TOKEN'}
data = {'reviewers': [current_reviewer]}
response = requests.post(api_url.format(owner=owner, repo=repo, pr_number=pr_number), headers=headers, data=json.dumps(data))

if response.status_code == 201:
    print(f'Successfully assigned {current_reviewer} to PR #{pr_number}.')
else:
    print(f'Failed to assign reviewer. Status code: {response.status_code}, Response: {response.text}')
